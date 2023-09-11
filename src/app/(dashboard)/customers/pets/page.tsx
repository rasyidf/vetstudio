import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";

export function Component() {

    return (
        <>
            <DashboardShell>
                <DashboardHeader
                    heading="Pets"
                    text="Manage your pets."
                />

            </DashboardShell>
        </>
    );
}


Component.displayName = "AboutPage";