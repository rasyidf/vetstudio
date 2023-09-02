import { User } from "./main";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Role } from "./roles";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;

  // If the role is not specified, it means that the route is accessible to all roles
  role?: Role[];
} & (
    | {
      href: string;
      items?: never;
    }
    | {
      href?: string;
      items: NavLink[];
    }
  );

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: Record<string, string>;
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  clinics: string;
  veterinarians: string;
  rooms: string;
  sessions: string;
  appointments: string;
  price: string;
};

export type UserSubscriptionPlan = SubscriptionPlan & {
  isPro: boolean;
  isCanceled: boolean;
};
