/**
 * @Componente "Navbar": Barra de navegación principal para mostrar
 * las secciones de la pagina
 *
 * @Description
 * Este componente renderiza los enlaces y barra de navegación principal
 *
 * @requires md-filled-button - Componente de botón de Material Design Web Components
 * @requires ../Navbar.css - Estilos especifícos del componente
 * @requires ../../index.css - Estilos css y variables globales
 * @requires material-symbols-outlined - Iconos de google fonts personalizados
 *
 * @returns {JSX.Element} Retorna una sección con la barra de navegación estatica
 */

import "./Navbar.css";
import "../../index.css";
import "@material/web/button/filled-button.js";
import logo from "../../assets/Logo Oficial.webp";

export const Navbar = () => {
  return (
    <nav className="nav borderBottom">
      <div className="navItems gap-32">
        <img src={logo} alt="Logo" className="logo" />

        <div className="navIcon active">
          <span class="material-symbols-outlined">home</span>
          <a href="">
            <span>Inicio</span>
          </a>
        </div>

        <div className="navIcon active">
          <span class="material-symbols-outlined">view_timeline</span>
          <a href="">
            <span>Sobre mí</span>
          </a>
        </div>
      </div>

      <div className="navItems gap-24">
        <div className="navIcon">
          <span className="material-symbols-outlined">category</span>
          <a href="">
            <span>Clases</span>
          </a>
        </div>

        {/* Versión móvil  se muestra en forma de (enlace) */}
        <div className="navIcon mobile-contact">
          <span className="material-symbols-outlined">person</span>
          <a href="">
            <span>Contacto</span>
          </a>
        </div>

        {/* Versión desktop se muestra en forma de botón (botón) */}
        <md-filled-button className="desktop-contact">
          Contacto
        </md-filled-button>
      </div>
    </nav>
  );
};
