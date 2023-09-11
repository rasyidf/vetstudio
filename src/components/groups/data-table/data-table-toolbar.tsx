"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { DataTableViewOptions } from "./data-table-view-options"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    children?: React.ReactNode,
    filterColumn?: string,
}

export function DataTableToolbar<TData>({
    table,
    filterColumn = "name",
    children,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0
    const statuses = [
        { label: "Open", value: "open" },
        { label: "In Progress", value: "in-progress" },
        { label: "Closed", value: "closed" },
    ]

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 space-x-2">
                <Input
                    placeholder="Filter tasks..."
                    value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn(filterColumn)?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {children}

                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}