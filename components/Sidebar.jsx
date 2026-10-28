"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Sidebar = () => {
    const pathname = usePathname();
    const { logout } = useAuth(); 

    const sidebarLinks = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Quotes", link: "/quotes"},
        { name: "History", link: "/history" },
        { name: "Settings", link: "/settings" },
        { name: "Profile", link: "/profile" }
    ];

    return (
        <div className="flex flex-col h-full justify-between pb-6">
            <div>
                <h2 className="text-white text-2xl font-bold p-6">SayIt</h2>

                <nav className="flex flex-col text-white px-4 space-y-2">
                    {sidebarLinks.map(link => {
                        const isActive = pathname === link.link;

                        return (
                            <Link
                                key={link.name}
                                href={link.link}
                                className={`px-4 py-2 rounded transition-colors ${isActive ? "bg-sky-700 font-semibold" : "hover:bg-sky-800"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            {/* Logout Button */}
            <div className="px-4 mt-auto">
                <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-300 hover:bg-sky-800 rounded transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}
export default Sidebar;