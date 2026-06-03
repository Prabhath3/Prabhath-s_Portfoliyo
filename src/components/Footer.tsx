import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer(){
    return(
        <footer>
            <div>
                <div>
                    <div>
                        <h2>
                            Prabhath Nishantha
                        </h2>
                        <p>
                            AI & Robotics Enthusiast . Software Engineer
                        </p>
                    </div>
                    <ul>
                        <li>
                            <a href="">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="">
                                Skill
                            </a>
                        </li>

                        <li>
                            <a href="">
                                Project
                            </a>
                        </li>

                        <li>
                            <a href="">
                                Contact
                            </a>
                        </li>

                    </ul>

                    <div>
                        <a href="">
                            <FaGithub/>
                        </a>

                        <a href="">
                            <FaLinkedin/>
                        </a>

                        <a href="">
                            <FaEnvelope/>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            © 2026 Prabhath Nishantha. All rights reserved.
                        </p>

                        <button>
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