import { MainNav } from "@/components/groups/main-nav";
import { DashboardNav } from "@/components/groups/nav";
import { SiteFooter } from "@/components/groups/site-footer";
import { UserAccountNav } from "@/components/groups/user-account-nav";
import { dashboardConfig } from "@/config/dashboard";
import { useUser } from "@supabase/auth-helpers-react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
    const user = useUser();

    const navigate = useNavigate();
    if (!user) {
        navigate("/login");
    }

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <MainNav items={dashboardConfig.mainNav} />
                    <UserAccountNav
                        user={{
                            name: user?.user_metadata.full_name,
                            image: user?.user_metadata.avatar_url,
                            email: user?.email,
                        }}
                    />
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    <Outlet />
                </main>
            </div>
            <SiteFooter className="border-t" />
        </div>
    );
};