import { useEffect, useState } from "react";

type Repo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
}


function Projects(){
    const [projects, setProjects] = useState<Repo[]>([]);

    useEffect(() => {
        async function fetchProject() {
            const response = await fetch (
                "https://api.github.com/users/Prabhath3/repos"
            );

            const data = await response.json();

            console.log(data);

            setProjects(data);
        }
        fetchProject();
    }, []);

    return(
        <section id="Projects" className="bg-zinc-950 text-white px-8  md:px-16 py-24">
            <div className="mb-16">
                <p className="text-purple-400 text-lg mb-4">
                    Projects
                </p>
                <h2 className="text-4xl md:texxt-5xl font-bold">
                    My Github Projects
                </h2>
                <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8">
                    {projects.map((repo) => (
                        <div key={repo.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500 transition-all duration-300">
                            <h3 className="text-xl font-boold text-purple-400 mb-2">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;