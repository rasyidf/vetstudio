import { PostgrestError } from "@supabase/supabase-js";
import { CrudFilter, CrudOperators, HttpError } from "@/types/data-provider";

export const mapOperator = (operator: CrudOperators) => {
    switch (operator) {
        case "ne":
            return "neq";
        case "nin":
            return "not.in";
        case "contains":
            return "ilike";
        case "ncontains":
            return "not.ilike";
        case "containss":
            return "like";
        case "ncontainss":
            return "not.like";
        case "null":
            return "is";
        case "nnull":
            return "not.is";
        case "between":
        case "nbetween":
            throw Error(`Operator ${operator} is not supported`);
        default:
            return operator;
    }
};


export const generateFilter = (filter: CrudFilter, query: any) => {
    switch (filter.operator) {
        case "eq":
            return query.eq(filter.field, filter.value);
        case "ne":
            return query.neq(filter.field, filter.value);
        case "in":
            return query.in(filter.field, filter.value);
        case "gt":
            return query.gt(filter.field, filter.value);
        case "gte":
            return query.gte(filter.field, filter.value);
        case "lt":
            return query.lt(filter.field, filter.value);
        case "lte":
            return query.lte(filter.field, filter.value);
        case "contains":
            return query.ilike(filter.field, `%${filter.value}%`);
        case "containss":
            return query.like(filter.field, `%${filter.value}%`);
        case "null":
            return query.is(filter.field, null);
        case "startswith":
            return query.ilike(filter.field, `${filter.value}%`);
        case "endswith":
            return query.ilike(filter.field, `%${filter.value}`);
        case "or":
            const orSyntax = filter.value
                .map((item) => {
                    if (
                        item.operator !== "or" &&
                        item.operator !== "and" &&
                        "field" in item
                    ) {
                        return `${item.field}.${mapOperator(item.operator)}.${item.value
                            }`;
                    }
                    return;
                })
                .join(",");
            return query.or(orSyntax);

        case "and":
            throw Error("Operator 'and' is not supported");
        default:
            return query.filter(
                filter.field,
                mapOperator(filter.operator),
                filter.value,
            );
    }
};


export const handleError = (error: PostgrestError) => {
    const customError: HttpError = {
        ...error,
        message: error.message,
        statusCode: parseInt(error.code),
    };
    return Promise.reject(customError);
};