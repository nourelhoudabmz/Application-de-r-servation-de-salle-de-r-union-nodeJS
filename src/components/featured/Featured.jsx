import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://zupimages.net/up/24/12/gn1h.jpg" 
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tunisie</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://zupimages.net/up/24/12/pyxu.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>France</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://zupimages.net/up/24/12/xaj4.jpg" 
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Italie</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
