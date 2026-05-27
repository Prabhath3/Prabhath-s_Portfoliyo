import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
}


function Projects() {
    const [projects, setProjects] = useState<Repo[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const getProjectImage = (repo: any) => {
        const text = (repo.name + " " + (repo.description || "")).toLowerCase();

        if (text.includes("ai") || text.includes("machine learning")) {
            return "/images/ai.png";
        }

        if (text.includes("chat") || text.includes("bot")) {
            return "/images/chatbot.png";
        }

        if (text.includes("ecommerce") || text.includes("shop")) {
            return "/images/ecommerce.webp";
        }

        if (text.includes("robot") || text.includes("robotics")) {
            return "/images/robot.png";
        }

        if (text.includes("portfolio") || text.includes("website")) {
            return "/images/portfoliyo.png";
        }

        return "/images/ecommarce.webp";
    };

    useEffect(() => {
        async function fetchProject() {
            const response = await fetch(
                "https://api.github.com/users/Prabhath3/repos"
            );

            const data = await response.json();

            console.log(data);

            setProjects(data);
        }
        fetchProject();
    }, []);

    useEffect(() => {
        if (projects.length === 0) return;

        const internal = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 3000);

        return () => clearInterval(internal);
    }, [projects]);

    const getPosition = (index: number) => {
        const angle = (index - activeIndex) * 60;
        const radius = 250;

        const x = Math.sin((angle * Math.PI) / 180) * radius;
        const scale = index === activeIndex ? 1.2 : 0.8;
        const opacity = index === activeIndex ? 1 : 0.5;
        const zIndex = index === activeIndex ? 10 : 0;

        return { x, scale, opacity, zIndex };
    };

    return (
        <section id="Projects" className="bg-zinc-950 text-white px-8  md:px-16 py-24">
            <div className="mb-16">
                <p className="text-purple-400 text-lg mb-4">
                    Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    My Github Projects
                </h2>
                <div className="relative h-[500px] flex items-center justify-center">
                    <div className="absolute w-96 h-96 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
                    {projects.slice(0, 6).map((repo, index) => {
                        const { x, scale, opacity, zIndex } = getPosition(index);

                        return (
                            <motion.div key={repo.id} animate={{ x, scale, opacity, zIndex, }} transition={{ duration: 0.8, ease: "easeInOut", }} className="absolute bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500 transition-all duration-300">
                                <img
                                    src={getProjectImage(repo)}
                                    alt={repo.name}
                                    className="w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-xl font-bold text-purple-400 mb-2">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {repo.description || "No description available"}
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    ⭐ Stars: {repo.stargazers_count}
                                </p>
                                <a href={repo.html_url} target="_blank" className="text-purple-400 hover:text-purple-300 underline">
                                    View Project →
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;