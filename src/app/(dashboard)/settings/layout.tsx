
import { DashboardShell } from "@/components/groups/shell";
import { SidebarNav } from "@/components/groups/sidebar-nav";
import { Outlet } from "react-router-dom";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/app/settings/profile",
    },
    {
        title: "Account",
        href: "/app/settings/account",
    },
    {
        title: "Appearance",
        href: "/app/settings/appearance",
    },
    {
        title: "Notifications",
        href: "/app/settings/notifications",
    },
];

export function Layout() {
    return (
        <>

            <DashboardShell>
                <div className="grid gap-10">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl"><Outlet /></div>

                </div>
            </DashboardShell>
        </>
    );
}