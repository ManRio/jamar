import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wantsPhoneInfo: false,
    email: "",
    serviceType: "",
    message: "",
    acceptedLegalConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jamar-manriodevs-projects.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Formulario enviado correctamente.");
        setFormData({
          name: "",
          phone: "",
          wantsPhoneInfo: false,
          email: "",
          serviceType: "",
          message: "",
          acceptedLegalConditions: false,
        });
      } else {
        alert(
          "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un error de red al enviar el formulario. Por favor, inténtalo más tarde."
      );
    }
  };

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      {/* Checkbox para recibir información telefónica */}
      <label className="contact-form__checkbox-label">
        <input
          type="checkbox"
          name="wantsPhoneInfo"
          checked={formData.wantsPhoneInfo}
          onChange={handleChange}
        />
        <span>Quiero recibir información por teléfono</span>
      </label>

      <label>
        Correo Electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Tipo de Servicio:
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option value="diseñoGrafico">Diseño Gráfico</option>
          <option value="gestionRedes">Gestión de Redes Sociales</option>
          <option value="creacionWeb">
            Creación y Diseño de Página Web o WebApp
          </option>
        </select>
      </label>

      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Cuéntanos más sobre tu proyecto y necesidades"
        />
      </label>

      {/* Checkbox para aceptar condiciones legales */}
      <label className="contact-form__checkbox-label">
        <input
          type="checkbox"
          name="acceptedLegalConditions"
          checked={formData.acceptedLegalConditions}
          onChange={handleChange}
          required
        />
        <span>
          Acepto las{" "}
          <Link to="/aviso-legal" className="link">
            condiciones legales
          </Link>{" "}
          y la{" "}
          <Link to="/politica-privacidad" className="link">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
