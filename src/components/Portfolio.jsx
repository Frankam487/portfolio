const Portfolio = () => {
  return (
    <div className="portfolio ">
      <div className="text flex flex-col items-center">
        <h3>Mon Portfolio</h3>
        <h1>Projets Recents</h1>
      </div>
      <ul className="flex items-center w-[70%] mx-auto ">
        <li className="mx-auto my-10">
          <a href="">Tous les Projets</a>
        </li>
        <li className="">
          <a href="">Web Design</a>
        </li>
        <li className="mx-auto">
          <a href="">App Mobile</a>
        </li>
        <li className="mx-auto">
          <a href="">Grahique Design</a>
        </li>
      </ul>
      <div className="projects flex flex-wrap items-center justify-center">
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" className="w-full" />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>App Mobile</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>Graphic Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" class />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>Web Design</h2>
          </div>
        </div>
        <div className="image m-12 relative w-[400px]">
          <img src="../../public/fr.jpg" alt="" />
          <div className="content">
            <div className="btns">
              <button>X</button>
              <button>X</button>
            </div>
            <h2>Web Design</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
