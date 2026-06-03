import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer(){
    return(
        <footer className="bg-black border-t border-zinc-800 text-white">
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">
                            Prabhath Nishantha
                        </h2>
                        <p className="text-gray-400 mt-2">
                            AI & Robotics Enthusiast . Software Engineer
                        </p>
                    </div>
                    <ul className="flex gap-6 text-gray-400">
                        <li>
                            <a href="#About" className="hover:text-purple-400 transition duration-300">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#Skill" className="hover:text-purple-400 transition duration-300">
                                Skill
                            </a>
                        </li>

                        <li>
                            <a href="#Project" className="hover:text-purple-400 transition duration-300">
                                Project
                            </a>
                        </li>

                        <li>
                            <a href="#Contact" className="hover:text-purple-400 transition duration-300 ">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex gap-5">
                        <a href="https://github.com/prabhath3"
                           target="_blank"
                           rel="noonpener noreferrer"
                           className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300">
                            <FaGithub/>
                        </a>

                        <a href="https://www.linkedin.com/in/prabhath-nishantha-ab553a334/?skipRedirect=true"
                           target="_blank"
                           rel="noonpener noreferrer"
                           className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300">
                            <FaLinkedin/>
                        </a>

                        <a href="mailto:prabhathnishantha130@gmail.com"
                           target="_blank"
                           rel="noonpener noreferrer"
                           className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300">
                            <FaEnvelope/>
                        </a>
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center">
                            © 2026 Prabhath Nishantha. All rights reserved.
                        </p>

                        <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition duration-300">
                            <FaArrowUp />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;