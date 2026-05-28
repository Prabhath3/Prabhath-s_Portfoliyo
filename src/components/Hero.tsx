import { motion } from "framer-motion";
type UserName = {
    name: string;
}

function Hero({ name }: UserName) {

    return (
        <section className="min-h-screen bg-zinc-950 text-white px-8 md:px-16 flex items-center overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-16">
                <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1}} className="max-w-3xl">
                    <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}} className="text-purple-400 text-lg mb-4">AI & Robotics Enthusiast</motion.p>
                    <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.7}} className="text-5xl md:text-7xl font-bold leading-tight mb-6">Hi, I'm {name}</motion.h1>
                    <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.7}}className="text-gray-400 text-lg leading-relaxed mb-8">Passionate software engineer focused on building modern, intelligent, and futuristic digital experiences using AI, robotics, and scalable technologies</motion.p>
                    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="flex gap-4">
                        <button className="bg-purple-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300">See Projects</button>
                        <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">Contact Me</button>
                    </motion.div>
                </motion.div>
            
            {/*right side*/}
            <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:1}} className="relative">
                <motion.div animate={{scale:[1, 1.2, 1], opacity:[0.2, 0.3, 0.2]}} transition={{duration:4, repeat: Infinity}} className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounted-full"></motion.div>
                <img src= "/Profile.png" alt="prabhath" className="relative w-84 h-100 md:w-80 rounded-full object-cover  floating" />
            </motion.div>
        </div>
        </section>
    );
}

export default Hero;