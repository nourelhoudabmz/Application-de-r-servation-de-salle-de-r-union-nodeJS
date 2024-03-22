import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
       
        <ul className="fList">
          <li className="fListItem"> Salles de réunion </li>
          <li className="fListItem">Salles de conférence </li>
          <li className="fListItem"> Salles de formation </li>
          <li className="fListItem"> Salles de Séminaire</li>
          <li className="fListItem">Espaces de coworking</li>
          <li className="fListItem">Studios créatifs</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Espaces événementiels uniques </li>
          <li className="fListItem">Témoignages clients</li>
          <li className="fListItem">Blog: Astuces d'organisation </li>
          <li className="fListItem">Communautés professionnelles </li>
          <li className="fListItem">Offres spéciales pour événements </li>
        </ul>
        <ul className="fList">
          <li className="fListItem"> Service de transport </li>
          <li className="fListItem"> Recherche de lieux</li>
          <li className="fListItem"> Catering et restauration </li>
          <li className="fListItem"> Organisateurs d'événements </li>
        </ul>
       
      </div>
      <div className="fText">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;