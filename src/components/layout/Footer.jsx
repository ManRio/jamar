import React from "react";
import { NavLink } from "react-router-dom";
import { ContactForm } from "../ContactForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        
        {/* Column Contact Info */}
        <div className="footer__column footer__contact-info">
          <h3>Información de Contacto</h3>
          <a href="mailto:manureina87@gmail.com" className="footer__email">
          <i class="bi bi-envelope-at"></i> &nbsp;manureina87@gmail.com
          </a>
          <p className="footer__phone"> <i class="bi bi-telephone"></i> Teléfono: +34 645 022 166</p>
          <div className="footer__social">
            <a href="https://wa.me/+34645022166" className="footer__social-link">
            <i class="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com" className="footer__social-link">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" className="footer__social-link">
            <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Column Navigation */}
        <div className="footer__column footer__navigation">
          <h3>Menú</h3>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/nosotros">Sobre Nosotros</NavLink></li>
            <li><NavLink to="/servicios">Nuestros Servicios</NavLink></li>
            <li><NavLink to="/portfolio">Portfiolio</NavLink></li>
            <li><NavLink to="/presupuesto">presupuesto</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </div>
        {/* Column  Legal Information */}
        <div className="footer__column footer__legal">
          <h3>Legal</h3>
          <ul>
            <li><NavLink to="/aviso-legal">Aviso Legal</NavLink></li>
            <li><NavLink to="/politica-cookies">Política de Cookies</NavLink></li>
            <li><NavLink to="/politica-privacidad">Política de Privacidad</NavLink></li>
          </ul>
        </div>
    </div>
          {/* Sub-footer */}
          <div className="footer__sub-footer">
        <p>
          &copy; {new Date().getFullYear()} JAMAR MEDIA &copy; Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};
