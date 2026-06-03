import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Star, GitFork, ExternalLink, AlertCircle } from "lucide-react";

type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    fork: boolean;
    updated_at: string;
};

const GITHUB_USER = "Prabhath3";

function getProjectImage(repo: Repo) {
    const text = `${repo.name} ${repo.description ?? ""} ${
        repo.language ?? ""
    }`.toLowerCase();

    if (text.includes("ai") || text.includes("machine learning"))
        return "/images/AI.webp";
    if (text.includes("class") || text.includes("pin") || text.includes("edu"))
        return "/images/education.webp";
    if (
        text.includes("ecommerce") ||
        text.includes("ecommarce") ||
        text.includes("shop") ||
        text.includes("employee")
    )
        return "/images/ecommarce.webp";
    if (text.includes("portfolio") || text.includes("website"))
        return "/images/portfoliyo.png";

    return "/images/ecommarce.webp";
}

function formatName(name: string) {
    return name
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

function ProjectSkeleton() {
    return (
        <div className="animate-pulse bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="h-40 bg-zinc-800" />
            <div className="p-6 space-y-4">
                <div className="h-5 w-2/3 bg-zinc-800 rounded" />
                <div className="h-3 w-full bg-zinc-800 rounded" />
                <div className="h-3 w-4/5 bg-zinc-800 rounded" />
                <div className="h-3 w-1/3 bg-zinc-800 rounded" />
            </div>
        </div>
    );
}

function Projects() {
    const [projects, setProjects] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function fetchProjects() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }

                const data: Repo[] = await response.json();
                const filtered = data
                    .filter((repo) => !repo.fork)
                    .sort(
                        (a, b) =>
                            b.stargazers_count - a.stargazers_count ||
                            new Date(b.updated_at).getTime() -
                                new Date(a.updated_at).getTime()
                    )
                    .slice(0, 6);

                setProjects(filtered);
            } catch (err) {
                if ((err as Error).name !== "AbortError") {
                    console.error(err);
                    setError(
                        "Couldn't load projects from GitHub right now. Please try again later."
                    );
                }
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
        return () => controller.abort();
    }, []);

    return (
        <section
            id="projects"
            className="bg-zinc-950 text-white px-4 sm:px-8 md:px-16 py-24 overflow-x-hidden scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-lg mb-4">Projects</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-gradient">GitHub Projects</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A selection of things I've been building — pulled live
                        from GitHub.
                    </p>
                </div>

                {error ? (
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-red-500/30 bg-red-500/5 py-16 text-center">
                        <AlertCircle className="text-red-400" size={36} />
                        <p className="text-gray-300 max-w-md">{error}</p>
                        <a
                            href={`https://github.com/${GITHUB_USER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                        >
                            <FaGithub /> Visit my GitHub
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                  <ProjectSkeleton key={i} />
                              ))
                            : projects.map((repo, index) => (
                                  <motion.article
                                      key={repo.id}
                                      initial={{ opacity: 0, y: 40 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{
                                          delay: index * 0.08,
                                          duration: 0.5,
                                      }}
                                      className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                                  >
                                      <div className="relative overflow-hidden">
                                          <img
                                              src={getProjectImage(repo)}
                                              alt={repo.name}
                                              loading="lazy"
                                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                                      </div>

                                      <div className="flex flex-col flex-1 p-6">
                                          <h3 className="text-lg font-bold text-purple-400 mb-2">
                                              {formatName(repo.name)}
                                          </h3>
                                          <p className="text-gray-400 mb-4 text-sm flex-1 line-clamp-3">
                                              {repo.description ||
                                                  "No description available."}
                                          </p>

                                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                              {repo.language && (
                                                  <span className="inline-flex items-center gap-1.5">
                                                      <span className="h-2 w-2 rounded-full bg-purple-400" />
                                                      {repo.language}
                                                  </span>
                                              )}
                                              <span className="inline-flex items-center gap-1">
                                                  <Star size={13} />
                                                  {repo.stargazers_count}
                                              </span>
                                              <span className="inline-flex items-center gap-1">
                                                  <GitFork size={13} />
                                                  {repo.forks_count}
                                              </span>
                                          </div>

                                          <div className="flex items-center gap-3 mt-auto">
                                              <a
                                                  href={repo.html_url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300"
                                              >
                                                  <FaGithub /> Code
                                              </a>
                                              {repo.homepage && (
                                                  <a
                                                      href={repo.homepage}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300"
                                                  >
                                                      <ExternalLink size={14} />{" "}
                                                      Live
                                                  </a>
                                              )}
                                          </div>
                                      </div>
                                  </motion.article>
                              ))}
                    </div>
                )}

                {!loading && !error && (
                    <div className="text-center mt-12">
                        <a
                            href={`https://github.com/${GITHUB_USER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-purple-400 text-purple-400 px-6 py-3 rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                        >
                            <FaGithub /> View All on GitHub
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
