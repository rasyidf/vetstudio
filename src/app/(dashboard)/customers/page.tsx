import { DataTable } from "@/components/groups/data-table/data-table";
import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";
import { ColumnDef } from "@tanstack/react-table";

const customers = [
    {
        id: 1,
        name: "John Doe",
        email: "rudi@gmail.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com"
    },
]

const columns = [
    {
        header: "Name",
        accessorKey: "name"
    },
    {
        header: "Email",
        accessorKey: "email"
    },
] as ColumnDef<{
    id: number;
    name: string;
    email: string;
}, unknown>[]

export function Component() {

    return (
        <>
            <DashboardShell>
                <DashboardHeader
                    heading="Customers"
                    text="Manage your customers."
                />

                <DataTable data={customers} columns={columns} />
            </DashboardShell>
        </>
    );
}


Component.displayName = "AboutPage";