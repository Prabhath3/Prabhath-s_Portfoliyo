import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 text-white">

            <div className="flex items-center justify-between px-8 md:px-16 py-5">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    Prabhath
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">

                    <a
                        href="#about"
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        Contact
                    </a>

                    <button className="bg-purple-500 px-5 py-2 rounded-xl font-semibold hover:bg-purple-400 transition-all duration-300">
                        Hire Me
                    </button>

                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <X size={30} /> : <Menu size={30} />}

                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-6 px-8 pb-8 text-lg bg-zinc-950 border-t border-zinc-800">

                    <a
                        href="#About"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#Skill"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        Skill
                    </a>

                    <a
                        href="#Project"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-purple-400 transition-all duration-300"
                    >
                        Contact
                    </a>

                    <button className="bg-purple-500 px-5 py-3 rounded-xl font-semibold hover:bg-purple-400 transition-all duration-300">
                        Hire Me
                    </button>

                </div>
            )}

        </nav>
    );
}

export default Header;