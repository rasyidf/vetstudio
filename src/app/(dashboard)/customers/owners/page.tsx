import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";

export function Component() {

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Owners"
                text="Manage customer."
            />

        </DashboardShell>
    );
}


Component.displayName = "AboutPage";