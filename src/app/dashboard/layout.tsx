import { Outlet } from "react-router-dom";

export const Layout = () => {

    return (
        <>
            <div className="flex-col">
                <Outlet />
            </div>
        </>
    );
};