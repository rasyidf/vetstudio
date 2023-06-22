import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";


export function Component() {

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "DashboardPage";