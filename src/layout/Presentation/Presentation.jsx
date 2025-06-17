import "@material/web/button/filled-button.js";
import "../../index.css";
import "../../App.css";
import "./Presentation.css";

import sujeto1 from "../../assets/sujeto1.webp";
import sujeto2 from "../../assets/sujeto2.webp";
import sujeto3 from "../../assets/sujeto3.webp";

export const Presentation = () => {
  return (
    <section className="containerPresentation">
      <div className="divTitle">
        <h1>
          <span className="decoration">#</span>
          mejore su diseño con nuestra clase de diseño
          <span className="decoration">!</span>
        </h1>
      </div>

      <div className="divInfo">
        <span>Te gustaría saber más sobre nuestras clases</span>
        <md-filled-button className="buttonInfo">Contacto</md-filled-button>
      </div>

      <div className="divCards">
        <span>Deja que la creatividad cree diseños increíbles</span>
        <div className="cards">
          <img src={sujeto2} alt="Sujeto 2" />
          <img src={sujeto1} alt="Sujeto 1" className="specialCard" />
          <img src={sujeto3} alt="Sujeto 3" />
        </div>
      </div>
    </section>
  );
};
