import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Icons from './Icons';


const Home = () => {
    const { text } = useTypewriter({
        words: ['développeur', 'photographe', 'designer'],
        loop: {}, 
        typeSpeed: 100,
        deleteSpeed: 50, 
        delaySpeed: 1500
    });

    return (
        <div className="home">
            <Icons />
            <div className="name-content">
                <h4>Salut, je suis</h4>
                <h1>Frank Kamgang</h1>
                <h5>
                    Je suis un
                    <span>
                        {text}
                    </span>
                    <Cursor />
                </h5>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inciis voluptatibus iusttuyu...
            </p>
            <div className="btns-container">
                <button className="tel">Télécharger CV</button>
                <button className="contact">Me contacter</button>
            </div>
        </div>
    );
}

export default Home;