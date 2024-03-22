import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://zupimages.net/up/24/12/pqr5.jpg" 
          alt=""
          className="fpImg"
        />
        <span className="fpName">Salle Reunion</span>
        <span className="fpCity">Tunisie</span>
        <span className="fpPrice">A partir de 300DT</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://zupimages.net/up/24/12/9sft.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Salle Conférence</span>
        <span className="fpCity">France</span>
        <span className="fpPrice">A partir de $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://zupimages.net/up/24/12/an5k.png" 
          alt=""
          className="fpImg"
        />
        <span className="fpName">Salle Séminaire</span>
        <span className="fpCity">Tunisie</span>
        <span className="fpPrice">A partir de 500DT</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://zupimages.net/up/24/12/5x2q.jpg" 
          alt=""
          className="fpImg"
        />
        <span className="fpName">Espace Coworking</span>
        <span className="fpCity">Italie</span>
        <span className="fpPrice">A partir de  $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;