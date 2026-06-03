import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#about");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_LINKS.map((l) =>
            document.querySelector(l.href)
        ).filter(Boolean) as Element[];

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
                scrolled
                    ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 shadow-lg shadow-purple-500/5"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="flex items-center justify-between px-8 md:px-16 py-5">
                {/* Logo */}
                <a href="#home" className="group flex items-center gap-1">
                    <span className="text-2xl font-bold tracking-wide">
                        Prabhath
                    </span>
                    <span className="text-2xl font-bold text-purple-500 transition-transform duration-300 group-hover:rotate-12">
                        .
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${
                                active === link.href
                                    ? "text-purple-400"
                                    : "text-gray-300"
                            }`}
                        >
                            {link.label}
                            {active === link.href && (
                                <motion.span
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-purple-500"
                                />
                            )}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="bg-purple-500 px-5 py-2 rounded-xl font-semibold hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden flex flex-col gap-6 px-8 pb-8 pt-2 text-lg bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`transition-all duration-300 hover:text-purple-400 ${
                                active === link.href
                                    ? "text-purple-400"
                                    : "text-gray-200"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-purple-500 px-5 py-3 rounded-xl font-semibold text-center hover:bg-purple-400 transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Header;
