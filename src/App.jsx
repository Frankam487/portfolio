import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Offres from "./components/Offres";
import Parcours from "./components/Parcours";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


const App = () => {
    return (
        <div className="app">
            <Header/>
            <Home />
            <Skills />
            <AboutMe />
            <Expertise />
            <Parcours />
            <Offres />
            <Portfolio/>
        </div>
    );
}

export default App;