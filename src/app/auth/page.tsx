import { supabase } from "@/lib/supabase";
import { useSession } from "@supabase/auth-helpers-react";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Navigate } from "react-router-dom";

export const Component = () => {
    const session = useSession();
    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />);
    }
    else {
        return <Navigate to="/app" />;
    }
};

Component.displayName = "AuthPage";