type UserName = {
    name: string;
}

function Hero({ name }: UserName) {

    return (
        <section className="min-h-screen bg-slate-950 text-white flex items-center px-8 md:px-16">
            <div className="max-w-3xl">
                <p className="text-cyan-400 text-lg mb-4">AI & Robotics Enthusiast</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Hi, I'm {name}</h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">Passionate software engineer focused on building modern, intelligent, and futuristic digital experiences using AI, robotics, and scalable technologies</p>
                <div className="flex gap-4">
                    <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300">See Projects</button>
                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">Contact Me</button>
                </div>
                
            </div>
            <img src="#" alt="prabhath" />
        </section>
    );
}

export default Hero;