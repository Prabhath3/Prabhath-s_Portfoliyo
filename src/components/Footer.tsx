import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    { icon: FaGithub, href: "https://github.com/prabhath3", label: "GitHub" },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/prabhath-nishantha-ab553a334",
        label: "LinkedIn",
    },
    {
        icon: FaEnvelope,
        href: "mailto:prabhathnishantha130@gmail.com",
        label: "Email",
    },
];

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black border-t border-zinc-800 text-white">
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">
                            Prabhath Nishantha
                        </h2>
                        <p className="text-gray-400 mt-2">
                            AI &amp; Robotics Enthusiast · Software Engineer
                        </p>
                    </div>

                    <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="hover:text-purple-400 transition duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-5">
                        {SOCIALS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300 hover:-translate-y-1"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center">
                            © {new Date().getFullYear()} Prabhath Nishantha. All
                            rights reserved.
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition duration-300"
                        >
                            <FaArrowUp />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
