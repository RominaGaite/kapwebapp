"use client";

import { useRouter } from "next/navigation";
import styles from "./inicio.module.css";

export default function Inicio() {
  const router = useRouter();

  const handleDenunciaClick = () => {
    router.push("/iniciarsecion"); // Redirige a la página de inicio de sesión
  };

  const handlePreguntasClick = () => {
    router.push("/preguntas-frecuentes"); // Redirige a la página de preguntas frecuentes
  };

  return (
    <div className={styles.inicioContainer}>
      {/* NAV con los dos logos */}
      <nav className={styles.nav}>
        <img src="/kap/public/logokap.png" alt="Logo 1" className={styles.logo} />
        <img src="/kap/public/logoimg.png" alt="Logo 2" className={styles.logo} />
      </nav>

      {/* Sección principal */}
      <section className={styles.mainSection}>
        <h1>Bienvenido</h1>
        <p>Si necesitas hacer una denuncia, haz clic en el botón rojo.</p>
        <button className={styles.denunciaButton} onClick={handleDenunciaClick}>
          DENUNCIA
        </button>
      </section>

      {/* Enlace a preguntas frecuentes */}
      <footer>
        <a onClick={handlePreguntasClick} className={styles.link}>
          Preguntas Frecuentes
        </a>
      </footer>
    </div>
  );
}
