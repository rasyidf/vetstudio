import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { CodeViewer } from "./components/code-viewer"
import { MaxLengthSelector } from "./components/maxlength-selector"
import { ModelSelector } from "./components/model-selector"
import { PresetActions } from "./components/preset-actions"
import { PresetSave } from "./components/preset-save"
import { PresetSelector } from "./components/preset-selector"
import { PresetShare } from "./components/preset-share"
import { TemperatureSelector } from "./components/temperature-selector"
import { TopPSelector } from "./components/top-p-selector"
import { medication, admision } from "./data/models"
import { presets } from "./data/presets"
import { NumberInput } from "./components/number-input"



export function Component() {
    return (
        <>
            <div className="hidden h-full flex-col md:flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg min-w-10 font-semibold">Dosage Calculator</h2>
                    <div className="ml-auto flex w-120 space-x-2 sm:justify-end">
                        <PresetSelector presets={presets} />
                        <PresetSave />
                        {/* <div className="hidden space-x-2 md:flex">
                            <CodeViewer />
                            <PresetShare />
                        </div> */}
                        <PresetActions />
                    </div>
                </div>
                <Separator />
                <Tabs defaultValue="complete" className="flex-1">
                    <div className="container h-full py-6">
                        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                <div className="grid gap-2">
                                    <HoverCard openDelay={200}>
                                        <HoverCardTrigger asChild>
                                            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Mode
                                            </span>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-[320px] text-sm" side="left">
                                            Choose the interface that best suits your task. You can
                                            provide: a simple prompt to complete, starting and ending
                                            text to insert a completion within, or some text with
                                            instructions to edit it.
                                        </HoverCardContent>
                                    </HoverCard>
                                    <TabsList className="grid grid-cols-3">
                                        <TabsTrigger value="complete">
                                            <span className="sr-only">Complete</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="h-5 w-5"
                                            >
                                                <rect
                                                    x="4"
                                                    y="3"
                                                    width="12"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="7"
                                                    width="12"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="11"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="15"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="8.5"
                                                    y="11"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="8.5"
                                                    y="15"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="13"
                                                    y="11"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                            </svg>
                                        </TabsTrigger>
                                        {/* <TabsTrigger value="insert">
                                            <span className="sr-only">Insert</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                                                    fill="currentColor"
                                                ></path>
                                                <rect
                                                    x="4"
                                                    y="15"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="8.5"
                                                    y="15"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="13"
                                                    y="15"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                            </svg>
                                        </TabsTrigger>
                                        <TabsTrigger value="edit">
                                            <span className="sr-only">Edit</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="h-5 w-5"
                                            >
                                                <rect
                                                    x="4"
                                                    y="3"
                                                    width="12"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="7"
                                                    width="12"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="11"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="4"
                                                    y="15"
                                                    width="4"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <rect
                                                    x="8.5"
                                                    y="11"
                                                    width="3"
                                                    height="2"
                                                    rx="1"
                                                    fill="currentColor"
                                                ></rect>
                                                <path
                                                    d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </TabsTrigger> */}
                                    </TabsList>
                                </div>
                                <NumberInput defaultValue={0.31} label={"Animal Weight"} units="kg" />
                                <ModelSelector types={admision} models={medication} />
                                <MaxLengthSelector defaultValue={[256]} />
                                <TopPSelector defaultValue={[0.9]} />
                            </div>
                            <div className="md:order-1">
                                <TabsContent value="complete" className="mt-0 border-0 p-0">
                                    <div className="flex h-full flex-col space-y-4">
                                    
                                        <div className="flex items-center space-x-2">
                                            <Button>Submit</Button>
                                            <Button variant="secondary">
                                                <span className="sr-only">Show history</span>
                                                <CounterClockwiseClockIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </>
    )
}