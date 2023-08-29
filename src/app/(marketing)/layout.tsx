import { MainNav } from "@/components/groups/main-nav";
import { SiteFooter } from "@/components/groups/site-footer";
import { ModeToggle } from "@/components/groups/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { useUser } from "@supabase/auth-helpers-react";
import { Link, Outlet } from "react-router-dom";
import { LanguageToggle } from "@/components/groups/language-toggle";

export const Layout = () => {
    const user = useUser();
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="container z-40 bg-background">
                    <div className="flex items-center justify-between h-20 py-6">
                        <MainNav items={marketingConfig.mainNav} />
                        <nav className="flex space-x-4">
                            <LanguageToggle />
                            <ModeToggle />
                            <Link
                                to={user ? "/app" : "/login"}
                                className={cn(
                                    buttonVariants({ variant: "secondary" }),
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