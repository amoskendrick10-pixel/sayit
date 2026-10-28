import Link from "next/link"


const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
    return (
        <header className=" py-4 bg-[#030b27] text-white ">
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
            </div>
        </header>
    )
}
export default Navbar