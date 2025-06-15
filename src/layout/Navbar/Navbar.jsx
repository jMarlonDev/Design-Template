import "./Navbar.css"
import '@material/web/button/filled-button.js';
import "../../index.css"
import "./Navbar.css"
import logo from "../../assets/Logo Oficial.webp"

export const Navbar = () => {
  return (
    <nav className="nav borderBottom">

      <div className="navItems gap-32">
        <img src={logo} alt="Logo" className="logo" />

        <div className="navIcon active">
          <span class="material-symbols-outlined">home</span>
          <a href=""><span>Inicio</span></a>
        </div>

        <div className="navIcon active">
          <span class="material-symbols-outlined">view_timeline</span>
          <a href=""><span>Sobre mí</span></a>
        </div>

      </div>

      <div className="navItems gap-24">

        <div className="navIcon">
          <span className="material-symbols-outlined">category</span>
          <a href=""><span>Clases</span></a>
        </div>

        { /* Versión móvil  se muestra en forma de (enlace) */}
        <div className="navIcon mobile-contact">
          <span className="material-symbols-outlined">person</span>
          <a href=""><span>Contacto</span></a>
        </div>

        {/* Versión desktop se muestra en forma de botón (botón) */}
        <md-filled-button className="desktop-contact">Contacto</md-filled-button>
      </div>
    </nav>
  )
}
