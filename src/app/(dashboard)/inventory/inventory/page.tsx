import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { json, useLoaderData } from "react-router-dom";

type Inventory = {
    name: string;
    price: number;
    stock: number;
    description: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export async function loader({ }) {
    let data: Inventory[] = [ 
    ] ;
    return json(data);
}

export function Component() {
    let data = useLoaderData() as Inventory[];

    return (
        <>
            <DashboardShell>
                <DashboardHeader
                    heading="Inventory"
                    text="Manage your inventory."
                />
                <div className="grid gap-10">
                    <DataTable data={data} columns={[
                        {
                            accessorKey: "name",
                            header: "Name",
                        },
                        {
                            accessorKey: "price",
                            header: "Price",
                        }
                    ]} />
                </div>
            </DashboardShell>
        </>
    );
}



export function DataTable<TData>({ columns, data }: { columns: ColumnDef<TData, any>[], data: TData[] }) {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>

                    {table.getRowModel().rows?.length
                        ? (
                            table.getRowModel().rows.map((row) => {

                                return (
                                    <tr
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td>
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </>
    )
}














Component.displayName = "DashboardPage";