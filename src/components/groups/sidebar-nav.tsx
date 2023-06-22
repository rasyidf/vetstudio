
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {

    return (
        <nav
            className={cn(
                "flex space-x-4 px-4",
                className
            )}
            {...props}
        >
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) => cn(
                        buttonVariants({ variant: "ghost" }),
                        isActive
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start"
                    )}
                >
                    {item.title}
                </NavLink>
            ))}
        </nav>
    );
}