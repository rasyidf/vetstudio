import { useUser } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const user = await useUser();
  const navigate = useNavigate();
  if (user) {
    navigate("/app");
  }
  return <div className="min-h-screen">{children}</div>;
}
