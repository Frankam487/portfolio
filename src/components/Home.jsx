import { TypeAnimation } from "react-type-animation";
import Icons from "./Icons";


export const Home = () => {
  return (
    <>
      <Icons />
      <div className="content">
        <div className="home">
          <div className="name-content">
            <h4>Salut, je suis</h4>
            <h1>Frank Kamgang</h1>
            <h5>
              <span style={{ background: "red" }}>
                <TypeAnimation
                  style={{
                    color: "#007bff",
                    fontWeight: "100",
                    fontSize: "1.5rem",
                    fontFamily: "sans-serif",
                  }}
                  sequence={[
                    "Hey!!!",
                    1000,
                    "Bienvenue dans mon portfolio",
                    1000,
                  ]}
                  wrapper="p"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit. Inciis
            voluptatibus iusttuyu...
          </p>
          <div className="btns-container">
            <button className="tel">Télécharger CV</button>
            <button className="contact">Me contacter</button>
          </div>
        </div>
        <div className="image"></div>
      </div>

    </>
  );
};
