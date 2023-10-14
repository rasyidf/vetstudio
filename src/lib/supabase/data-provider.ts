import { SupabaseClient } from "@supabase/supabase-js";
import { generateFilter, handleError } from "./utils";
import { DataProvider } from "@/types/data-provider";


function applySorters(query: any, sorters: any, meta: any) {
    sorters?.forEach((item: any) => {
        const [foreignTable, field] = item.field.split(/\.(.*)/);

        if (foreignTable && field) {
            query.select(meta?.select ?? `*, ${foreignTable}(${field})`).order(field, {
                ascending: item.order === "asc",
                foreignTable,
            });
        } else {
            query.order(item.field, {
                ascending: item.order === "asc",
            });
        }
    });
}

function applyFilters(query: any, filters: any) {
    filters?.forEach((item: any) => generateFilter(item, query));
}



export const dataProvider = (
    supabaseClient: SupabaseClient,
): Required<DataProvider> => {
    return {
        async getList({ resource, pagination, filters, sorters, meta }) {
            const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};
            const query = supabaseClient.from(resource).select(meta?.select ?? "*", { count: meta?.count ?? "exact" });

            if (mode === "server") {
                query.range((current - 1) * pageSize, current * pageSize - 1);
            }

            applySorters(query, sorters, meta);
            applyFilters(query, filters);

            const { data, count, error } = await query;

            if (error) {
                return handleError(error);
            }

            return {
                data: data || [],
                total: count || 0,
            } as any;
        },

        async getMany({ resource, ids, meta }) {
            const query = supabaseClient.from(resource).select(meta?.select ?? "*");

            if (meta?.idColumnName) {
                query.in(meta.idColumnName, ids);
            } else {
                query.in("id", ids);
            }

            const { data, error } = await query;

            if (error) {
                return handleError(error);
            }

            return {
                data: data || [],
            } as any;
        },

        async create({ resource, variables, meta }) {
            const query = supabaseClient.from(resource).insert(variables);

            if (meta?.select) {
                query.select(meta.select);
            }

            const { data, error } = await query;

            if (error) {
                return handleError(error);
            }

            return {
                data: (data || [])[0] as any,
            };
        },

        async createMany({ resource, variables, meta }) {
            const query = supabaseClient.from(resource).insert(variables);

            if (meta?.select) {
                query.select(meta.select);
            }

            const { data, error } = await query;

            if (error) {
                return handleError(error);
            }

            return {
                data: data as any,
            };
        },

        async update({ resource, id, variables, meta }) {
            const query = supabaseClient.from(resource).update(variables);

            if (meta?.idColumnName) {
                query.eq(meta.idColumnName, id);
            } else {
                query.match({ id });
            }

            if (meta?.select) {
                query.select(meta.select);
            }

            const { data, error } = await query;
            if (error) {
                return handleError(error);
            }

            return {
                data: (data || [])[0] as any,
            };
        },

        async updateMany({ resource, ids, variables, meta }) {
            const response = await Promise.all(
                ids.map(async (id) => {
                    const query = supabaseClient
                        .from(resource)
                        .update(variables);

                    if (meta?.idColumnName) {
                        query.eq(meta.idColumnName, id);
                    } else {
                        query.match({ id });
                    }

                    if (meta?.select) {
                        query.select(meta.select);
                    }

                    const { data, error } = await query;
                    if (error) {
                        return handleError(error);
                    }

                    return (data || [])[0] as any;
                }),
            );

            return {
                data: response,
            };
        },

        async getOne({ resource, id, meta }) {
            const query = supabaseClient
                .from(resource)
                .select(meta?.select ?? "*");

            if (meta?.idColumnName) {
                query.eq(meta.idColumnName, id);
            } else {
                query.match({ id });
            }

            const { data, error } = await query;
            if (error) {
                return handleError(error);
            }

            return {
                data: (data || [])[0] as any,
            };
        },

        async deleteOne({ resource, id, meta }) {
            const query = supabaseClient.from(resource).delete();

            if (meta?.idColumnName) {
                query.eq(meta.idColumnName, id);
            } else {
                query.match({ id });
            }

            const { data, error } = await query;
            if (error) {
                return handleError(error);
            }

            return {
                data: (data || [])[0] as any,
            };
        },

        async deleteMany({ resource, ids, meta }) {
            const response = await Promise.all(
                ids.map(async (id) => {
                    const query = supabaseClient.from(resource).delete();

                    if (meta?.idColumnName) {
                        query.eq(meta.idColumnName, id);
                    } else {
                        query.match({ id });
                    }

                    const { data, error } = await query;
                    if (error) {
                        return handleError(error);
                    }

                    return (data || [])[0] as any;
                }),
            );

            return {
                data: response,
            };
        },

        getApiUrl: () => {
            throw Error("Not implemented on data provider.");
        },

        custom: () => {
            throw Error("Not implemented on data provider.");
        },
    };
};