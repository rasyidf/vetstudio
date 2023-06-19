import { MainNav } from "@/components/groups/main-nav";
import { Search } from "@/components/groups/search";
import { UserNav } from "@/components/groups/user-nav";
import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/icon.png";

export const Layout = () => {
    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-14 items-center px-4">
                        <Link to="/" className="text-2xl font-bold">
                            <img src={logo} className="h-8" alt="Logo" />
                        </Link>
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <Outlet />
                </div>
            </div>

        </>
    );
};