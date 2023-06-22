import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
      disabled: true,
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/app/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/app/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/app/settings",
      icon: "settings",
    },
  ],
}
