import React, { useState } from "react";

export const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wantsPhoneInfo: false,
    email: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
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
          <option value="" disabled>Selecciona un servicio</option>
          <option value="diseñoGrafico">Diseño Gráfico</option>
          <option value="gestionRedes">Gestión de Redes Sociales</option>
          <option value="creacionWeb">Creación y Diseño de Página Web o WebApp</option>
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

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;