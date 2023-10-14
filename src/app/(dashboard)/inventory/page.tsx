import { DataTable } from "@/components/groups/data-table/data-table";
import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { json, useLoaderData } from "react-router-dom";

type Inventory = {
    name: string;
    price: number;
    stock: number;
    description: string;
    category: string;
    image: string;
    status: "open" | "in-progress" | "closed";
    createdAt: string;
    updatedAt: string;
}

const generateMock = (count: number) => {
    let data: Inventory[] = []
    for (let i = 0; i < count; i++) {
        data.push({
            name: `Item ${i}`,
            price: Math.random() * 100,
            stock: Math.random() * 100,
            description: `Description ${i}`,
            category: `Category ${i}`,
            status: "open", // "in-progress", "closed"
            image: `https://picsum.photos/seed/${i}/200/200`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        })
    }
    return data;
}

export async function loader({ }) {
    let data: Inventory[] = generateMock(15);
    return json(data);
}
const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        header: "Image",
        cell: ({ row }) => {
            return (
                <Avatar>
                    <AvatarImage src={row?.original?.image} alt="" />
                </Avatar>)
        }
    }
] as ColumnDef<Inventory, any>[];
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
                    <DataTable data={data ?? []} columns={columns} />
                </div>
            </DashboardShell>
        </>
    );
}















Component.displayName = "InventoryPage";