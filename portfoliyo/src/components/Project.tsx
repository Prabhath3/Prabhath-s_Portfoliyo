import { useEffect, useState } from "react";

function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProject() {
            const response = await fetch (
                "https://github.com/Prabhath3?tab=repositories"
            );

            const data = await response.json();

            console.log(data);

            setProjects(data);
        }
        fetchProject();
    }, []);

    return(
        <section id="Projects">
            <div>
                <p>
                    Projects
                </p>
                <h2>
                    My Github Projects
                </h2>
            </div>
        </section>
    );
}

export default Projects;