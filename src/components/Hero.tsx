import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

type UserName = {
    name: string;
};

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

function Hero({ name }: UserName) {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-zinc-950 text-white px-8 md:px-16 flex items-center overflow-hidden pt-24 md:pt-0"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600 blur-3xl opacity-20 rounded-full glow-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600 blur-3xl opacity-10 rounded-full glow-pulse" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl text-center md:text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                        </span>
                        Available for opportunities
                    </motion.span>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-purple-400 text-lg mb-4"
                    >
                        AI &amp; Robotics Enthusiast
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                    >
                        Hi, I'm <span className="text-gradient">{name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-400 text-lg leading-relaxed mb-8 mx-auto md:mx-0 max-w-2xl"
                    >
                        Passionate software engineer focused on building modern,
                        intelligent, and futuristic digital experiences using AI,
                        robotics, and scalable technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            See Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-purple-400 text-purple-400 px-6 py-3 rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-5 mt-8 justify-center md:justify-start"
                    >
                        {SOCIALS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-gray-400 hover:text-purple-400 text-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <Icon />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex-shrink-0"
                >
                    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-25 rounded-full glow-pulse" />
                    <div className="relative rounded-full p-1.5 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-700">
                        <img
                            src="/Profile.png"
                            alt="Prabhath Nishantha"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover bg-zinc-900 floating"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                aria-label="Scroll to about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors"
            >
                <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="block"
                >
                    <ArrowDown size={24} />
                </motion.span>
            </motion.a>
        </section>
    );
}

export default Hero;
