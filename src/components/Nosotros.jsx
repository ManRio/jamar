import React from "react";
import "./AboutUs.css"; // Asegúrate de crear este archivo CSS para los estilos

const Nosotros = () => {
  return (
    <section className="about-us">
      <h1>Conócenos un poco más</h1>
      <p>
        En nuestra empresa, contamos con una sólida trayectoria y años de
        experiencia en el sector, lo que nos posiciona como líderes en brindar
        soluciones efectivas y accesibles en tecnología. Nos dedicamos a
        empoderar a emprendedores y negocios, liberándolos de la complejidad de
        gestionar las herramientas digitales, para que puedan concentrarse en lo
        que realmente importa: su crecimiento y desarrollo. Nuestros servicios
        abarcan desde la gestión estratégica de redes sociales, donde creamos
        contenido atractivo que conecta con su audiencia, hasta el diseño
        gráfico innovador que refleja la esencia de su marca. Además, ofrecemos
        la creación y desarrollo de páginas web y aplicaciones web
        personalizadas, asegurando que cada cliente tenga una presencia en línea
        que destaque y atraiga a sus clientes. Permítanos ser su aliado en el
        mundo digital y llevar su negocio al siguiente nivel.
      </p>

      <div className="service-container">
        <div className="service">
          <img src="/images/graphicdesign.jpg" alt="Diseño Gráfico" />
          <div className="service-description">
            <h2>Diseño Gráfico</h2>
            <p>
              En nuestra empresa, nos especializamos en la creación de logotipos
              impactantes, el desarrollo integral de la imagen empresarial y el
              branding efectivo. Nuestro equipo de diseñadores talentosos
              trabaja de la mano con cada cliente, sumergiéndose en su visión y
              entendiendo a fondo sus necesidades. Este enfoque colaborativo nos
              permite entregar diseños que no solo reflejan la esencia de la
              marca, sino que también cautivan y resuenan con su público
              objetivo. Cada proyecto representa una oportunidad para
              transformar ideas creativas en realidades visuales únicas que
              destacan en un mercado competitivo, asegurando que su marca se
              diferencie y deje una impresión duradera.
            </p>
          </div>
        </div>

        <div className="service">
          <img src="/images/socialmedia.jpg" alt="Gestión de Redes Sociales" />
          <div className="service-description">
            <h2>Gestión de Redes Sociales</h2>
            <p>
              En la actual era digital, una presencia activa y atractiva en las
              redes sociales no es solo recomendable, es esencial para el éxito
              de cualquier negocio. Nuestro servicio integral de gestión de
              redes sociales está diseñado para impulsar su marca al siguiente
              nivel. Creamos contenido cautivador y relevante que no solo capta
              la atención, sino que también resuena profundamente con su
              audiencia. Nos ocupamos de cada aspecto de su estrategia: desde la
              planificación y publicación hasta el análisis detallado de sus
              campañas. Con nuestra ayuda, podrá construir una comunidad leal y
              activa, aumentando su visibilidad y reputación en el mercado.
              Permítanos ser su socio estratégico y llevar su marca a nuevas
              alturas en el vibrante mundo digital.
            </p>
          </div>
        </div>

        <div className="service">
          <img
            src="/images/webdev.jpg"
            alt="Creación y Desarrollo de Páginas Web"
          />
          <div className="service-description">
            <h2>Creación y Desarrollo de Páginas Web y WebApps</h2>
            <p>
              En un mundo cada vez más interconectado, contar con un sitio web
              profesional no es solo una opción, sino una necesidad imperante
              para el crecimiento de su negocio. En nuestra empresa, nos
              especializamos en la creación y desarrollo de páginas web y
              aplicaciones web personalizadas que se alinean perfectamente con
              las necesidades y objetivos de su empresa. Nuestro enfoque va más
              allá de un simple diseño atractivo; nos centramos en la usabilidad
              y la optimización para motores de búsqueda, garantizando que su
              sitio no solo sea visualmente impactante, sino también fácil de
              navegar y altamente efectivo. Transformamos sus ideas en
              soluciones digitales innovadoras que no solo aumentan su presencia
              en línea, sino que también convierten visitantes en clientes
              leales. Confíe en nosotros para llevar su negocio al mundo digital
              y destacar en un mercado competitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
