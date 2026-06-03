import { motion } from "framer-motion";
import { Brain, Code2, Bot } from "lucide-react";

const CARDS = [
    {
        icon: Brain,
        title: "AI Development",
        text: "Exploring intelligent systems, automation, machine learning, and AI-powered solutions for real-world challenges.",
    },
    {
        icon: Code2,
        title: "Fullstack Development",
        text: "Building responsive, scalable, and modern web applications using React, TypeScript, and contemporary frontend technologies.",
    },
    {
        icon: Bot,
        title: "Robotics",
        text: "Interested in robotics engineering, embedded systems, automation, and intelligent machine interaction.",
    },
];

const STATS = [
    { value: "5+", label: "Years Coding" },
    { value: "10+", label: "Projects Built" },
    { value: "8+", label: "Technologies" },
    { value: "∞", label: "Curiosity" },
];

function About() {
    return (
        <section
            id="about"
            className="bg-zinc-950 text-white px-8 md:px-16 py-24 scroll-mt-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <p className="text-purple-400 text-lg mb-4">About Me</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Passionate About Building{" "}
                    <span className="text-gradient">Intelligent Systems</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    I am a software engineering student focused on AI, robotics,
                    and modern web technologies. I enjoy creating futuristic
                    digital experiences and solving real-world problems through
                    technology.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CARDS.map((card, i) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                            <card.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            {card.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 py-8 text-center"
                    >
                        <p className="text-4xl font-bold text-gradient">
                            {stat.value}
                        </p>
                        <p className="mt-2 text-sm text-gray-400">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default About;
