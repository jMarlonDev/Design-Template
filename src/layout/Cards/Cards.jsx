/**
 * @Componente "Classes": Muestra una sección con tarjetas mostrando diferentes tipos de clases
 * que se ofrecen en al web
 *
 * @Description:
 * Este componente renderiza tres tipos de tarjetas con información sobre clases para:
 * - Principiantes
 * - Expertos
 * - Empleados
 *
 * @Tarjeta: Incluye
 * -Imagen
 * - Título de la clase y descripción
 * - Botón de contacto ( Usando material Web Components )
 *
 *  @requires md-filled-button - Componente de botón de Material Design Web Components
 *  @requires ./Cards.css - Estilos especifícos del componente
 *  @requires .../../index.css - Estilos Globales
 *  @requires ../../App.css - Estilos principales de al aplicación
 *
 * @returns {JSX.Element} Retorna una sección con tarjetas de clases personalizadas
 */

import "../../index.css";
import "../../App.css";
import "./Cards.css";
import "@material/web/button/filled-button.js";
import imgCard01 from "../../assets/imgCard01.webp";
import imgCard02 from "../../assets/imgCard02.webp";
import imgCard03 from "../../assets/imgCard03.webp";

export const Cards = () => {
  return (
    <section className="container">
      <span className="title">Nuetras Clases</span>
      <div className="containerCards">
        <div className="card greyCard">
          <div className="divImage">
            <img src={imgCard01} alt="" />
          </div>
          <div className="description">
            <span>Clases Para Principiantes</span>
            <p>Para aquellos que están aprendiendo diseño</p>
            <md-filled-button>Contacto</md-filled-button>
          </div>
        </div>

        <div className="card greyCard">
          <div className="divImage imageSpecial">
            <img src={imgCard02} alt="" />
          </div>
          <div className="description">
            <span>Clases Para Expertos</span>
            <p>Para aquellos que quieran mejorar sus habilidades</p>

            <md-filled-button className="greyButton">Contacto</md-filled-button>
          </div>
        </div>

        <div className="card greyCard">
          <div className="divImage">
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
