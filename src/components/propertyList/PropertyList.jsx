import "./propertyList.css";


const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://zupimages.net/up/24/12/8cxd.jpeg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Salles de Conférence</h1>
          <h2>233 salles</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://zupimages.net/up/24/12/gwmk.jpeg" 
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Salles de Séminaire</h1>
          <h2>2331 Salles</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://zupimages.net/up/24/12/o97m.jpg" 
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Salles de Réception</h1>
          <h2>2331 Salles</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://zupimages.net/up/24/12/3v78.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Espaces de Coworking</h1>
          <h2>2331 Espaces</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://zupimages.net/up/24/12/yv8c.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Salles de Reunion</h1>
          <h2>2331 Salles</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
