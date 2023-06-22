import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/globals.css';
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/lib/supabase";

function App() {

  return (
    <>
      <SessionContextProvider supabaseClient={supabase}>
        <RouterProvider router={router} />
      </SessionContextProvider>
    </>
  );
}

export default App;
