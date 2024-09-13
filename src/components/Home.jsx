import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
    const {text} = useTypewriter({
        words: ["developper", "photographe", "designer"],
        loop: {},
        
    });
    return ( 
        <div className="home">
            <div className="name-content">
                <h4>Salut, J'suis</h4>
                <h1>Frank Kamgang</h1>
            <h5>je sui un
                <span >{text}</span>
             <Cursor cursorColor="red" />
            </h5>
            </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Inciis voluptatibus iusttuyu...</p>
                <div className="btns-container">
                    <button className="tel">Telecharger CV</button>
                    <button
                     className="contact">Me contacter</button>
                </div>
        </div>
     );
}
 
export default Home;