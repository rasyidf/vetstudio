import { DashboardConfig } from "@/types"
import { Role } from "@/types/roles"

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
      icon: "dashboard",
      role: [Role.Admin, Role.Receptionist, Role.Doctor, Role.Nurse, Role.Groomer]
    },
    {
      title: "Customers",
      href: "/app/customers",
      icon: "user",
      role: [Role.Admin, Role.Receptionist],
      items: [
        {
          title: "Owners",
          href: "/app/customers/owners",
        },
        {
          title: "Pets",
          href: "/app/customers/pets",
        },
      ]
    },
    {
      title: "Appointments",
      href: "/app/appointments",
      icon: "calendar",
      role: [Role.Admin, Role.Receptionist, Role.Doctor, Role.Nurse],
      items: [
        {
          title: "Calendar",
          href: "/app/appointments/calendar",
        },
        {
          title: "Assignments",
          href: "/app/appointments/assignments",
        },
        {
          title: "History",
          href: "/app/appointments/history",
        }
      ]
    },
    {
      title: "Inventory Management",
      href: "/app/inventory",
      icon: "box",
      role: [Role.Admin, Role.Receptionist],
      items: [
        {
          title: "Inventory",
          href: "/app/inventory/inventory",
        },
        {
          title: "Suppliers",
          href: "/app/inventory/suppliers",
        },
        {
          title: "Orders",
          href: "/app/inventory/orders",
        },
        {
          title: "Stocks",
          href: "/app/inventory/stocks",
        },
        {
          title: "Purchase Orders",
          href: "/app/inventory/purchase-orders",
        },
      ]
    },
    {
      title: "Prescriptions",
      href: "/app/prescriptions",
      icon: "prescription",
      role: [Role.Admin, Role.Receptionist, Role.Doctor, Role.Nurse, Role.Pharmacist],
      items: [
        {
          title: "New Prescription",
          href: "/app/prescriptions/new",
        },
        {
          title: "History",
          href: "/app/prescriptions/history",
        }
      ]
    },
    {
      title: "Reports",
      href: "/app/reports",
      icon: "report",
      role: [Role.Admin],
      items: [
        {
          title: "Sales",
          href: "/app/reports/sales",
        },
        {
          title: "Inventory",
          href: "/app/reports/inventory",
        },
        {
          title: "Appointments",
          href: "/app/reports/appointments",
        },
        {
          title: "Customers",
          href: "/app/reports/customers",
        },
        {
          title: "Employees",
          href: "/app/reports/employees",
        },
        {
          title: "Pets",
          href: "/app/reports/pets",
        },
        {
          title: "Expenses",
          href: "/app/reports/expenses",
        }
      ]

    },
    {
      title: "Billing",
      href: "/app/billing",
      icon: "billing",
      role: [Role.Admin]
    },
    {
      title: "Settings",
      href: "/app/settings",
      icon: "settings",
      role: []
    },
  ],
}
