import "../../index.css";
import "../../App.css";
import "./Classes.css";
import "@material/web/button/filled-button.js";
import imgCard01 from "../../assets/imgCard01.webp";
import imgCard02 from "../../assets/imgCard02.webp";
import imgCard03 from "../../assets/imgCard03.webp";

export const Classes = () => {
  return (
    <section className="containerClasses">
      <span className="spanClasses">Nuetras Clases</span>
      <div className="containerCards">
        <div className="card greyCard">
          <div className="image">
            <img src={imgCard01} alt="" />
          </div>
          <div className="description">
            <span>Clases Para Principiantes</span>
            <p>Para aquellos que están aprendiendo diseño</p>
            <md-filled-button>Contacto</md-filled-button>
          </div>
        </div>

        <div className="card greyCard">
          <div className="image imageSpecial">
            <img src={imgCard02} alt="" />
          </div>
          <div className="description">
            <span>Clases Para Expertos</span>
            <p>Para aquellos que quieran mejorar sus habilidades</p>

            <md-filled-button className="greyButton">Contacto</md-filled-button>
          </div>
        </div>

        <div className="card greyCard">
          <div className="image">
            <img src={imgCard03} alt="" />
          </div>

          <div className="description">
            <span>Clases Para Empleados</span>
            <p>Para los que están ocupados pero quieren aprender</p>

            <md-filled-button>Contacto</md-filled-button>
          </div>
        </div>
      </div>
    </section>
  );
};
