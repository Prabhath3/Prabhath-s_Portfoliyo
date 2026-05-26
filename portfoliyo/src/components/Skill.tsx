import { useState } from "react";
import {motion, AnimatePresence, hover} from "framer-motion";

interface SkillCardProps {
  name: string;
  proficiency : number;
  since : string;
  accent : string;
  fill : string;
  index : number;
}

const SKILLS_DATA = [
  {
    category: "Languages",
    accent: "#A855F7",
    fill: "#22152E",
    darkFill: "#140B1F",
    skills: [
      { name: "JavaScript", proficiency: 96, since: "2020" },
      { name: "TypeScript", proficiency: 50, since: "2026" },
      { name: "Python",     proficiency: 78, since: "2019" },
      { name: "Java",       proficiency: 60, since: "2023" },
    ],
  },
  {
    category: "Frontend",
    accent: "#C084FC",
    fill: "#241530",
    darkFill: "#120A1A",
    skills: [
      { name: "React",         proficiency: 50, since: "2026" },
      { name: "Tailwind CSS",  proficiency: 60, since: "2026" },
      { name: "Framer Motion", proficiency: 25, since: "2026" },
    ],
  },
  {
    category: "Backend",
    accent: "#9333EA",
    fill: "#1F122B",
    darkFill: "#0E0714",
    skills: [
     
    ],
  },
  {
    category: "Cloud / DevOps",
    accent: "#8B5CF6",
    fill: "#21142D",
    darkFill: "#12091B",
    skills: [
      { name: "Docker",     proficiency: 50, since: "2025" }
    ],
  },
  {
    category: "Databases",
    accent: "#D946EF",
    fill: "#2A1632",
    darkFill: "#14081A",
    skills: [
      { name: "MySQL",      proficiency: 82, since: "2024" },
    ],
  },
  {
    category: "Tools",
    accent: "#7C3AED",
    fill: "#1D1328",
    darkFill: "#0D0713",
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



function SkillCard({name, proficiency,since, accent,fill, index} : SkillCardProps) {
    const[hovered, setHovered] = useState(false);

    return(
      <motion.div custom={index} initial="hidden" animate="visible" exit="exit" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="relative p-4 rounded-2xl border  bg-[#111111] border-[#2A2A2A] hover:border-purple-500/40 overflow-hidden cursor-default" style={{borderColor: hovered ? accent + "60" : undefined, transition: "border-color 0.2s ease"}}>
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
                <p className="text-sm font-medium text-white dark:text-gray-100 leading-snug">
                  {name}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-400 font-mono">
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
          <div className="h-[3px] rounded-full bg-[#2A2A2A] dark:bg-[#1A1A1A] overflow-hidden pl-1">
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
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? SKILLS_DATA : SKILLS_DATA.filter((s) => s.category === active);
    return(
        <section id="Skill" className="py-28 px-6 max-w-10xl mx-auto bg-zinc-950 " aria-label="Skills" >
            <div className="mb-14">
              <span className="text-[11px] font-mono tracking-[0.15em] text-gray-400 dark:text-gray-400 uppercase">
                02 &nbsp;/&nbsp; skills
              </span>
                <h2 className="mt-3 text-5xl font-bold tracking-tight text-white dark:text-gray-500 leading-tight">
                    What I build&nbsp; Skills
                </h2>
                <p className="mt-3 text-gray-400 dark:text-gray-400 max-w-lg">
                  Technologies I reach for day-to-day - sorted by category, rated by real-world usage
                </p>
            </div>
            <div
                role="tablist"
                aria-label="Skill categories"
                className="flex flex-wrap gap-2 mb-12"
            >
              {TABS.map((tab) => {
                const isActive = tab === active;
                const cat = SKILLS_DATA.find((s) => s.category === tab);
                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(tab)}
                    className={`px-4 py-1.5 text-[13px] rounded-full border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-transparent text-white dark:text-gray-900 font-medium"
                        : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 bg-transparent"
                    }`}
                    style={
                      isActive
                        ? { background: cat ? cat.accent : "#111" }
                        : {}
                    }
                  >
                    {tab}
                  </button>
          );
        })}
      </div>
      
            {/* ── Skill groups ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {filtered.map(({ category, accent, fill, skills }) => (
                  <div key={category} className="mb-12">
                    {/* Category divider */}
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="text-[10.5px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                        style={{ color: accent, background: fill }}
                      >
                        {category}
                      </span>
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                      <span className="text-xs text-gray-400 font-mono tabular-nums">
                  {skills.length} skills
                </span>
              </div>
      
                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {skills.map((skill, i) => (
                        <SkillCard
                          key={skill.name}
                          {...skill}
                          accent={accent}
                          fill={fill}
                          index={i}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
        </section>
    );
};