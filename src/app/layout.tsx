import { MainNav } from "@/components/groups/main-nav";
import { Search } from "@/components/groups/search";
import { UserNav } from "@/components/groups/user-nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/icon.png";
import { useSession } from "@supabase/auth-helpers-react";
import { useEffect } from "react";

export const Layout = () => {
    const session = useSession();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <>
            <div className="flex-col md:flex">
                <div className="border-b">
                    <nav>
                        <div className="flex h-14 items-center px-4">
                            <Link to="/" className="text-2xl font-bold">
                                <img src={logo} className="h-8" alt="Logo" />
                            </Link>
                            <MainNav className="mx-6" />
                            <div className="ml-auto flex items-center space-x-4">
                                {
                                    session ?
                                        location.pathname.startsWith("/app") ? (
                                            <>
                                                <Search />
                                                <UserNav />
                                            </>
                                        ) : (
                                            <Link to="/app" className="text-sm font-medium hover:text-primary">Dashboard</Link>
                                        )
                                        : (
                                            <Link to="/login" className="text-sm font-medium hover:text-primary">Login</Link>
                                        )
                                }
                            </div>
                        </div>
                    </nav>
                </div>
                <main >
                    <Outlet />
                </main>
            </div>

        </>
    );
};