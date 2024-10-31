import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "../layout/Header";
import Inicio from "../Inicio";
import Nosotros from "../Nosotros";
import Servicios from "../Servicios";
import Portfolio from "../Portfolio";
import Presupuesto from "../Presupuesto";
import Contacto from "../Contacto";
import { Footer } from "../layout/Footer";

export const Routing = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      {/* Content */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="*"
            element={
              <div className="page">
                <img
                  className="img-404"
                  src="/images/404.png"
                  alt="gato verde enredado en un 404 gigante"
                />
              </div>
            }
          />
        </Routes>
        {/* Footer */}
        <Footer />
      </section>
    </BrowserRouter>
  );
};
