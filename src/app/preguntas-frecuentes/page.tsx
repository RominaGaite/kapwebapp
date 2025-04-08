"use client";

import { useRouter } from "next/navigation";
import styles from "./preguntas.module.css";

export default function PreguntasFrecuentes() {
  const router = useRouter();

  const handleVolverClick = () => {
    router.back(); // Volver a la página anterior
  };

  return (
    <div className={styles.preguntasContainer}>
      {/* NAV con los dos logos */}
      <nav className={styles.nav}>
        <img src="/kap/public/logokap.png" alt="Logo 1" className={styles.logo} />
        <img src="/kap/public/logoimg.png" alt="Logo 2" className={styles.logo} />
      </nav>

      {/* Contenido de Preguntas Frecuentes */}
      <section className={styles.mainSection}>
        <h1>Preguntas Frecuentes</h1>

        <div className={styles.faqItem}>
          <h2>¿Qué es KAP?</h2>
          <p>
            KAP es una plataforma diseñada por y para familias, con el objetivo
            de salvaguardar la seguridad de los niños y niñas. Funciona como una
            comunidad colaborativa que mapea áreas de alto riesgo y permite a los
            usuarios registrar alertas sobre incidentes que puedan afectar la
            seguridad infantojuvenil en áreas cercanas.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h2>¿Qué tipo de incidentes se pueden reportar en KAP?</h2>
          <p>
            KAP permite reportar una amplia gama de incidentes que pueden poner
            en peligro la seguridad de los menores, tales como:
            <ul>
              <li>Toma de fotografías o filmación sin autorización</li>
              <li>Acoso callejero (seguimiento)</li>
              <li>Abuso sexual</li>
              <li>Exhibicionismo</li>
              <li>Sustracción o intento de sustracción del niño, niña o adolescente</li>
              <li>Robo o intento de robo</li>
              <li>Venta de estupefacientes</li>
            </ul>
          </p>
        </div>

        <div className={styles.faqItem}>
          <h2>¿Dónde pueden ocurrir estos incidentes?</h2>
          <p>
            Los incidentes pueden tener lugar en diversas ubicaciones, tales como:
            <ul>
              <li>Plazas y parques públicos</li>
              <li>Parques temáticos y acuáticos</li>
              <li>Transporte público</li>
              <li>Calles y espacios públicos</li>
              <li>Zonas cercanas a establecimientos educativos</li>
            </ul>
          </p>
        </div>

        <div className={styles.faqItem}>
          <h2>¿Cómo se registran los detalles de un incidente en KAP?</h2>
          <p>
            Para registrar un incidente, los usuarios deben proporcionar la mayor
            cantidad de información posible, incluyendo:
            <ul>
              <li>Quién fue (género y cantidad de personas involucradas)</li>
              <li>Edad aproximada de los involucrados</li>
              <li>Fecha y hora del incidente</li>
              <li>Ubicación del incidente</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Botón Volver Atrás */}
      <footer>
        <button onClick={handleVolverClick} className={styles.volverButton}>
          Volver Atrás
        </button>
      </footer>
    </div>
  );
}
