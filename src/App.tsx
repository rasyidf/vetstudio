import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/globals.css';
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/lib/supabase";
import { ThemeProvider } from './components/groups/theme-provider';

function App() {

  return (
    <>
      <SessionContextProvider supabaseClient={supabase}>
        <ThemeProvider defaultTheme="light" storageKey="vetstudio-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </SessionContextProvider>
    </>
  );
}

export default App;
