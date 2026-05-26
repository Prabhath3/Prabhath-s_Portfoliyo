import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";

const SKILLS_DATA = [
  {
    category: "Languages",
    accent: "#7F77DD",
    fill: "#EEEDFE",
    darkFill: "#26215C",
    skills: [
      { name: "JavaScript", proficiency: 96, since: "2020" },
      { name: "TypeScript", proficiency: 50, since: "2026" },
      { name: "Python",     proficiency: 78, since: "2019" },
      { name: "Java",       proficiency: 60, since: "2023" },
    ],
  },
  {
    category: "Frontend",
    accent: "#378ADD",
    fill: "#E6F1FB",
    darkFill: "#042C53",
    skills: [
      { name: "React",         proficiency: 50, since: "2026" },
      { name: "Tailwind CSS",  proficiency: 60, since: "2026" },
      { name: "Framer Motion", proficiency: 25, since: "2026" },
    ],
  },
  {
    category: "Backend",
    accent: "#1D9E75",
    fill: "#E1F5EE",
    darkFill: "#04342C",
    skills: [
     
    ],
  },
  {
    category: "Cloud / DevOps",
    accent: "#BA7517",
    fill: "#FAEEDA",
    darkFill: "#412402",
    skills: [
      { name: "Docker",     proficiency: 50, since: "2025" }
    ],
  },
  {
    category: "Databases",
    accent: "#D85A30",
    fill: "#FAECE7",
    darkFill: "#4A1B0C",
    skills: [
      { name: "MySQL",      proficiency: 82, since: "2024" },
    ],
  },
  {
    category: "Tools",
    accent: "#5F5E5A",
    fill: "#F1EFE8",
    darkFill: "#2C2C2A",
    skills: [
      { name: "Git",     proficiency: 96, since: "2018" },
      { name: "Figma",   proficiency: 68, since: "2021" },
      { name: "Linux",   proficiency: 82, since: "2019" },
    ],
  },
];


// function SkillCard({name, proficiency,since, accent,fill, index}) {
//     const[hovered, setHovered] = useState(false);
// }


export default function Skill () {
    return(
        <section id="Skill">
            <div>
              <span>
                02 &nbsp;/&nbsp; skills
              </span>
                <h2>
                    What I build&nbsp; Skills
                </h2>
                <p>
                  Technologies I reach for day-to-day - sorted by category, rated by real-world usage
                </p>
            </div>
            <div>
              
            </div>
        </section>
    );
};