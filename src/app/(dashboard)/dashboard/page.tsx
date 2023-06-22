import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";
import { json, useLoaderData } from "react-router-dom";

export async function loader({ }) {
  let data = "Hello Dashboard!";
  return json(data);
}

export function Component() {
  let data = useLoaderData() as string;

  return (
    <>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Get started managing your clinics."
        />
        <div className="grid gap-10">
          <h1>{data}</h1>
        </div>
      </DashboardShell>
    </>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "DashboardPage";