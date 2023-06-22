import { MainNav } from "@/components/groups/main-nav";
import { SiteFooter } from "@/components/groups/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { useUser } from "@supabase/auth-helpers-react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    const user = useUser();
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="container z-40 bg-background">
                    <div className="flex h-20 items-center justify-between py-6">
                        <MainNav items={marketingConfig.mainNav} />
                        <nav>
                            <Link
                                to={user ? "/app" : "/login"}
                                className={cn(
                                    buttonVariants({ variant: "secondary", size: "sm" }),
                                    "px-4"
                                )}
                            >
                                {user ? "Dashboard" : "Login"}
                            </Link>
                        </nav>
                    </div>
                </header>
                <main className="flex-1">
                    <Outlet />
                </main>
                <SiteFooter />
            </div>

        </>
    );
};