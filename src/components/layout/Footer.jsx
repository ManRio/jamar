import React from "react";
import { NavLink } from "react-router-dom";
import { ContactForm } from "../ContactForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* left Column Contact Form /> */}
        <div className="footer__left">
          <ContactForm className="footer-form" />
        </div>

        {/* Center Column Contact Info */}
        <div className="footer__column footer__contact-info">
          <h3>Contacta con Nosotros</h3>
          <a href="mailto:manureina87@gmail.com" className="footer__email">
            manureina87@gmail.com
          </a>
          <p className="footer__phone">Teléfono: +34 645 022 166</p>
          <div className="footer__social">
            <a href="https://www.facebook.com" className="footer__social-link">
              <img src="/images/facebook.png" alt="facebook"></img>
            </a>
            <a href="https://www.instagram.com" className="footer__social-link">
              <img src="/images/instagram.png" alt="instagram"></img>
            </a>
          </div>
        </div>

        {/* Right Column Navigation */}
        <div className="footer__column footer__services">
          <h3>Servicios</h3>
          <ul>
            <li>
              <NavLink to="/servicios#servicio1">Servicio 1</NavLink>
            </li>
            <li>
              <NavLink to="/servicios#servicio2">Servicio 2</NavLink>
            </li>
            <li>
              <NavLink to="/servicios#servicio3">Servicio 3</NavLink>
            </li>
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
