const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="text">
        <h3>Mon Portfolio</h3>
        <h1>Projets Recents</h1>
      </div>
      <ul>
        <li>
          <a href="">Tous les Projets</a>
        </li>
        <li>
          <a href="">Web Design</a>
        </li>
        <li>
          <a href="">App Mobile</a>
        </li>
        <li>
          <a href="">Grahique Design</a>
        </li>
      </ul>
      <div className="projects">
        <div className="image">
          <img src="../../public/fr.jpg" alt="" />
          <div className="content">
            <h1>je suis labas</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam tempore assumenda.</p>
          </div>        
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
