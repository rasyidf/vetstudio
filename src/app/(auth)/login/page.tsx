
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import UserAuthForm from "@/components/groups/user-auth-form";
import { useUser } from "@supabase/auth-helpers-react";
import { Link, useNavigate } from "react-router-dom";


export function Component() {
  const user = useUser();
  const navigate = useNavigate();
  if (user) {
    navigate("/app");
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        to="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-16 w-16" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Selamat datang di VetStudio
          </h1>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
