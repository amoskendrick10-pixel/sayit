'use client'

import { useAuth } from "@/context/AuthContext";
import Link from "next/link"
import Button from "./Button";


const Navbar = () => {
    const { logout, isAuthenticated } = useAuth(); // Destructure logout from context
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
    return (
        <header className=" py-4 bg-sky-800 text-white ">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <div>
                    <h4 className="text-2xl font-bold">
                        <Link  href="/">Sayit</Link>
                    </h4>
                </div>

                <nav className="flex justify-between items-center gap-20 ">
                    {navLinks.map(nav => (
                        <Link
                            key={nav.name}
                            href={nav.href}
                            className="text-white hover:text-slate-300 text-lg"
                        >
                            {nav.name}
                        </Link>
                    ))}
                </nav>

                <nav>
                    {isAuthenticated === true ? (
                        <div>
                            <Link
                            href="/dashboard"
                            className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-full mr-4"
                        >
                            Dashboard
                        </Link>
                        <Button
                            label="Sign Out"
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4"
                        />
                        </div>
                            
                    ) : (
                        <div>
                            <Link
                            href="/signin"
                            className="bg-blue-100 hover:bg-blue-300 text-sky-900 py-2 px-4 rounded-full"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-blue-100 hover:bg-blue-300 text-sky-900 py-2 px-4 rounded-full"
                        >
                            Sign Up
                        </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}
export default Navbar