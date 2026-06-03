import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Header />
            <Hero name="Prabhath Nishantha" />
            <About />
            <Skill />
            <Projects/>
            <Contact/>
            <Footer />
        </div>
    )
}

export default App;