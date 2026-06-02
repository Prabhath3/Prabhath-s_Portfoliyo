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

        if (text.includes("AI") || text.includes("machine learning")) {
            return "/images/AI.webp";
        }

        if (text.includes("class") || text.includes("pin")) {
            return "/images/education.webp";
        }

        if (text.includes("ecommarce") || text.includes("employee")) {
            return "/images/ecommarce.webp";
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
        const isMobile = window.innerWidth < 768;
        const angle = (index - activeIndex) * (isMobile ? 90 : 60);
        const radius = isMobile ? 120 : 250;

        const x = Math.sin((angle * Math.PI) / 180) * radius;
        const scale = index === activeIndex ? 1 : 0.7;
        const opacity = index === activeIndex ? 1 : 0.3;
        const zIndex = index === activeIndex ? 10 : 0;

        return { x, scale, opacity, zIndex };
    };

    return (
        <section id="Project" className="bg-zinc-950 text-white px-4  sm:px-8 md:px-16 py-24 overflow-x-hidden">
            <div className=" text-canter md:text-left">
                <p className="text-purple-400 text-lg mb-4">
                    Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    My Github Projects
                </h2>
                <div className="relative h-[500px] flex items-center justify-center md:mt-0">
                    <div className="absolute w-96 h-96 md:w-96 md:h-96 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
                    {projects.slice(0, 6).map((repo, index) => {
                        const { x, scale, opacity, zIndex } = getPosition(index);

                        return (
                            <motion.div key={repo.id} animate={{ x, scale, opacity, zIndex, }} transition={{ duration: 0.8, ease: "easeInOut", }} className="absolute bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500 transition-all duration-300">
                                <img
                                    src={getProjectImage(repo)}
                                    alt={repo.name}
                                    className="w-full h-32 md:h-40 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-xl md:text-xl font-bold text-purple-400 mb-2">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm h-10 overflow-hidden">
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