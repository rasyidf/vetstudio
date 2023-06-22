
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/icons";
import { useNavigate } from "react-router-dom";
import { useUser } from "@supabase/auth-helpers-react";
import { BillingForm } from "@/components/groups/billing-form";
import { DashboardHeader } from "@/components/groups/header";
import { DashboardShell } from "@/components/groups/shell";

export const metadata = {
  title: "Billing",
  description: "Manage billing and your subscription plan.",
};

export function Component() {
  const user = useUser();
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }


  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        <Alert className="!pl-14">
          <Icons.warning />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription>
            You can use the following test credit card details to test the
          </AlertDescription>
        </Alert>
        <BillingForm         />
      </div>
    </DashboardShell>
  );
}

Component.displayName = "BillingPage";