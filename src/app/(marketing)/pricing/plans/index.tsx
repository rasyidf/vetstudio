import { LoadingAnimation } from "@/components/loading-animation";
import { Button } from "@/components/ui/button";
import { PlanProps } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function formatNumber(num: number) {
    return Intl.NumberFormat("id-ID", { currency: "idr", useGrouping: true, notation: "standard" }).format(num);
}
export function Plan({
    title,
    description,
    cost,
    features,
    action,
    disabled,
    className,
    loading,
}: PlanProps & { className?: string }) {
    return (
        <div
            key={title}
            className={cn(
                "flex w-full flex-col",
                disabled && "pointer-events-none opacity-70",
                className,
            )}
        >
            <div className="flex-1">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <p className="font-cal mb-2 text-xl">{title}</p>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                    <p className="shrink-0">
                        {typeof cost === "number" ? (
                            <>
                                <span className="font-cal text-2xl">Rp. {formatNumber(cost)}</span>
                                <span className="text-muted-foreground font-light">/month</span>
                            </>
                        ) : (
                            <span className="font-cal text-2xl">{cost}</span>
                        )}
                    </p>
                </div>
                <ul className="border-border/50 grid divide-y py-2">
                    {features.map((item) => (
                        <li
                            key={item}
                            className="text-muted-foreground inline-flex items-center py-2 text-sm"
                        >
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {action ? (
                <div>
                    {"link" in action ? (
                        <Button asChild size="sm">
                            <Link to={action.link}>{action.text}</Link>
                        </Button>
                    ) : null}
                    {"onClick" in action ? (
                        <Button
                            onClick={action.onClick}
                            size="sm"
                            disabled={disabled || loading}
                        >
                            {loading ? <LoadingAnimation /> : action.text}
                        </Button>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}