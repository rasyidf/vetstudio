"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { PopoverProps } from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Medication, ModelType } from "../data/models"

interface ModelSelectorProps extends PopoverProps {
    types: readonly ModelType[]
    models: Medication[]
}

export function ModelSelector({ models, types, ...props }: ModelSelectorProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedModel, setSelectedModel] = React.useState<Medication>(models[0])
    const [peekedModel, setPeekedModel] = React.useState<Medication>(models[0])

    return (
        <div className="grid gap-2">
            <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                    <Label htmlFor="model">Medication</Label>
                </HoverCardTrigger>
                <HoverCardContent
                    align="start"
                    className="w-[260px] text-sm"
                    side="left"
                >
                    The model which will generate the completion. Some models are suitable
                    for natural language tasks, others specialize in code. Learn more.
                </HoverCardContent>
            </HoverCard>
            <Popover open={open} onOpenChange={setOpen} {...props}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a model"
                        className="w-full justify-between"
                    >
                        {selectedModel ? selectedModel.name : "Select a model..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[250px] p-0">
                    <HoverCard>
                        <HoverCardContent
                            side="left"
                            align="start"
                            forceMount
                            className="min-h-[280px]"
                        >
                            <div className="grid gap-2">
                                <h4 className="font-medium leading-none">{peekedModel.name}</h4>
                                <div className="text-sm text-muted-foreground">
                                    {peekedModel.indications}
                                </div>
                                {
                                    peekedModel.sideEffects ? (
                                        <div className="mt-4 grid gap-2">
                                            <h5 className="text-sm font-medium leading-none">
                                                Side Effects
                                            </h5>
                                            <div className="text-sm text-muted-foreground">
                                                {peekedModel.sideEffects}
                                            </div>
                                        </div>
                                    ) : null
                                }
                                {peekedModel.concentration ? (
                                    <div className="mt-4 grid gap-2">
                                        <h5 className="text-sm font-medium leading-none">
                                            Concentration
                                        </h5>
                                        <div className="text-sm text-muted-foreground">
                                            {peekedModel.concentration} mg/ml
                                        </div>
                                    </div>
                                ) : null}
                                {peekedModel.desiredDosage ? (
                                    <div className="mt-4 grid gap-2">
                                        <h5 className="text-sm font-medium leading-none">
                                            Desired Dose
                                        </h5>
                                        <div className="text-sm text-muted-foreground">
                                            {peekedModel.desiredDosage} ml/kg
                                        </div>
                                    </div>
                                ) : null}


                            </div>
                        </HoverCardContent>
                        <Command loop>
                            <CommandList className="h-[var(--cmdk-list-height)] max-h-[400px]">
                                <CommandInput placeholder="Search Models..." />
                                <CommandEmpty>No Models found.</CommandEmpty>
                                <HoverCardTrigger />
                                {types.map((type) => (
                                    <CommandGroup key={type} heading={type}>
                                        {models
                                            .filter((model) => model.type === type)
                                            .map((model) => (
                                                <ModelItem
                                                    key={model.id}
                                                    model={model}
                                                    isSelected={selectedModel?.id === model.id}
                                                    onPeek={(model) => setPeekedModel(model)}
                                                    onSelect={() => {
                                                        setSelectedModel(model)
                                                        setOpen(false)
                                                    }}
                                                />
                                            ))}
                                    </CommandGroup>
                                ))}
                            </CommandList>
                        </Command>
                    </HoverCard>
                </PopoverContent>
            </Popover>
        </div>
    )
}

interface ModelItemProps {
    model: Medication
    isSelected: boolean
    onSelect: () => void
    onPeek: (model: Medication) => void
}

function ModelItem({ model, isSelected, onSelect, onPeek }: ModelItemProps) {
    const ref = React.useRef<HTMLDivElement>(null)

    useMutationObserver(ref, (mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes") {
                if (mutation.attributeName === "aria-selected") {
                    onPeek(model)
                }
            }
        }
    })

    return (
        <CommandItem
            key={model.id}
            onSelect={onSelect}
            ref={ref}
            className="aria-selected:bg-primary aria-selected:text-primary-foreground"
        >
            {model.name}
            <CheckIcon
                className={cn(
                    "ml-auto h-4 w-4",
                    isSelected ? "opacity-100" : "opacity-0"
                )}
            />
        </CommandItem>
    )
}