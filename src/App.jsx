import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Offres from "./components/Offres";
import Parcours from "./components/Parcours";
import Portfolio from "./components/Portfolio";

import Skills from "./components/Skills";
import Mind from "./components/Mind";
import Clients from "./components/Clients";
import Blog from "./components/Blog";

const App = () => {
   
    return (
        <>
        <div className="app">
            <Header/>
            <Home />
            <Skills />
            <AboutMe />
            <Expertise />
            <Parcours />
            <Offres />
            <Portfolio/>
            <Mind/>
            <Clients/>
            <Blog/>
        </div>
        </>
    );
    
    
}
    export default App;