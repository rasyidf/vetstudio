
import { cn } from "@/lib/utils";
import { useSession } from "@supabase/auth-helpers-react";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const session = useSession();

    const menus = useMemo(() => {
        if (!session) return [
            {
                name: "About",
                path: "/about",
            },
            {
                name: "Pricing",
                path: "/pricing",
            },
            {
                name: "Contact",
                path: "/contact",
            },
            {
                name: "Blog",
                path: "/blog",
            }
        ];

        return [
            {
                name: "Dashboard",
                path: "/app/",
            },
            {
                name: "Settings",
                path: "/app/settings",
            },
            {
                name: "Profile",
                path: "/app/profile",
            }
        ];
    }, [session]);

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            {menus.map((menu) => (
                <NavLink
                    key={menu.path}
                    to={menu.path}
                    className={({ isActive }) => cn("text-sm font-medium hover:text-primary", isActive ? "text-primary" : "text-muted-foreground")}
                >
                    {menu.name}
                </NavLink>
            ))}
        </nav>
    );
}