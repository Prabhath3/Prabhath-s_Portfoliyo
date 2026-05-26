import { useState } from "react";
import {motion, AnimatePresence, hover} from "framer-motion";

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

const ALL = "All";
const TABS = [ALL, ...SKILLS_DATA.map((s) => s.category)];
 
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};



function SkillCard({name, proficiency,since, accent,fill, index}) {
    const[hovered, setHovered] = useState(false);

    return(
      <motion.div custom={index} initial="hidden" animate="visible" exit="exit" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="relative p4 rounded-2xl border bg-white dark:bg-gray-900/60 overflow-hidden cursor-default" style={{borderColor: hovered ? accent + "60" : undefined, transition: "border-color 0.2s ease"}}>
        <motion.div className="absolute left-0 top-0 bottom-0 w-[3px] rounted-r-full"
          style={{background:accent}}
          initial={{scaleY:0}}
          animate={{scaleY:hovered ? 1 : 0}}
          transition={{duration:0.2}}/>
          <div className="flex items-start justify-between mb-3 pl-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounted-xl flex items-center justify-center text-xs font-bbold flex-shrink-0"
               style={{background:fill, color:accent}}>
                {name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-snug">
                  {name}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
                  since {since}
                </p>
              </div>
            </div>

            {/*percentage -animate colour on hover*/}
            <span className="text-xs font-mono tabular-nums transition-colors duration-200"
             style={{color: hovered ? accent : undefined}}>
              {proficiency}%
            </span>
          </div>
          {/* Animated progress bar */}
          <div className="h-[3px] rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden pl-1">
            <motion.div
              className="h-full rounded-full"
              style={{ background: accent }}
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + index * 0.04,
              }}
            />
          </div>
      </motion.div>
    );
}


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