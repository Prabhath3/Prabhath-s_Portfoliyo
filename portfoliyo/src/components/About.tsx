import { motion } from "framer-motion";

function About() {
    return (
        <section className="bg-zinc-950 text-white px-8 md:px-16 py24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="text-center mb-16">
                <p className="text-purple-400 text-lg mb-4">
                    About Me
                </p>

                <h2 className="text-2xl md:text-2xl font-bold mb-6">
                    Passionate About Building Intelligent Systems
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    I am a software engineering student focused on AI, robotics,
                    and modern web technologies. I enjoy creating futuristic digital
                    experiences and solving real-world problems through technology.
                </p>
            </motion.div>

            {/*Cards*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500 transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                        AI Development
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Exploring intelligent systems, automation, machine learning, and AI-powered solutions for real-world challenges.
                    </p>
                </motion.div>
                {/*card 2 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500 transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                        Fullstack Development
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Building responsive, scalable, and modern web applications using React, TypeScript, and contemporary frontend technologies.
                    </p>
                </motion.div>
                {/*card 3*/}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500 transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                        Robotics
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Interested in robotics engineering, embedded systems, automation, and intelligent machine interaction.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;