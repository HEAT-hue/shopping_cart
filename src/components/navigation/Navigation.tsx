// jshint esversion:6
import { Outlet, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="sticky top-0 left-0 right-0 px-5 w-full h-[65px] flex items-center justify-between shadow-sm bg-white md:px-8">
                <div className="h-full flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center px-5 ${isActive ? "font-bold" : undefined}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `flex items-center px-5 ${isActive ? "font-bold" : undefined}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `flex items-center px-5 ${isActive ? "font-bold" : undefined}`}
                    >
                        Contact
                    </NavLink>
                </div>
                <div>
                    <button className="relative p-2.5 rounded-full border-2  border-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        <div className="absolute right-0 bottom-0 translate-x-2 translate-y-3 w-6 h-6 p-1 rounded-full text-white bg-red-600 text-xs">0</div>
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <Outlet />
            </div>
        </>
    );
}

export { Navigation };