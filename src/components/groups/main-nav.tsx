
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <NavLink
                to="/dashboard"
                className={({ isActive }) => cn("text-sm font-medium hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => cn("text-sm font-medium hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")}
            >
                About
            </NavLink>
        </nav>
    );
}