
function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between px-8 md:px-16 py-6 bg-zinc-950 text-white border-b border-zinc-800">
               <h2 className="text-2xl font-bold tracking-wide">Prabhath</h2>
               <div className="flex items-center gap-8">
                <ul className="flex gap-6 text-gray-300">
                    <li className="cursor-pointer hover:text-purple-400 transition-all duration-300" ><a href="#About">About</a></li>
                    <li className="cursor-pointer hover:text-purple-400 transition-all duration-300"><a href="#Skill">Skill</a></li>
                    <li className="cursor-pointer hover:text-purple-400 transition-all duration-300">Contact US</li>
                    <li className="cursor-pointer hover:text-purple-400 transition-all duration-300">Projects</li>
                </ul>
                <button type="button" className="bg-purple-400 text-black rounded-xl px-5 py-2 font-semibold hover:bg-purple-300 transition-all duration-300">Hire me</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;