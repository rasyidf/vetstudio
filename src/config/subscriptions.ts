export type Plans = "free" | "basic" | "standard" | "pro" | "enterprise";

export interface PlanProps {
  title: string;
  description: string;
  cost: number | string;
  features: string[];
  action?:
    | {
        text: string;
        link: string;
      }
    | {
        text: string;
        onClick: () => void;
      };
  disabled?: boolean;
  loading?: boolean;
}

export const plansConfig: Record<Plans, PlanProps> = {
  free: {
    title: "Free",
    description: "Try out our platform with small clinics management.",
    cost: "Free",
    features: ["1 Clinic", "1-3 Veterinarians", "1 Rooms", "1 Sessions", "Up to 20 Appointments"],
    action: {
      text: "Get Started",
      link: "/app/sign-up?plan=Free",
    },
  },
  basic: {
    title: "Basic",
    description: "Start with the basics and upgrade as you grow.",
    cost: 120000,
    features: ["1 Clinic", "3-5 Veterinarians", "2-4 Rooms", "1-2 Sessions", "Up to 40 Appointments"],
    action: {
      text: "Buy Now",
      link: "/signup?plan=basic",
    },
  },
  standard: {
    title: "Standard",
    description: "Best for small clinics with multiple branch.",
    cost: 500000,
    features: ["Up to 3 Clinics", "4-6 Veterinarians", "3-5 Rooms", "3-4 Sessions", "Up to 50 Appointments"],
    action: {
      text: "Buy Now",
      link: "/signup?plan=standard",
    },
  },
  pro: {
    title: "Pro",
    description: "Best for large clinics with multiple locations.",
    cost: 900000,
    features: [
      "Up to 5 Clinics",
      "6-10 Veterinarians",
      "5-10 Rooms",
      "5-10 Sessions",
      "Up to 100 Appointments",
    ],
    action: {
      text: "Buy Now",
      link: "/app/sign-up?plan=pro",
    },
  },
  enterprise: {
    title: "Enterprise",
    description: "Dedicated support and needs for your company.",
    cost: "Let's talk",
    features: [],
    action: {
      text: "Schedule a Call",
      link: "https://cal.com/thibault-openstatus/30min",
    },
  },
};
