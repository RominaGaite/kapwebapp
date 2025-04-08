"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./denuncia.module.css";

export default function Denuncia() {
  const router = useRouter();

  // Función para gestionar el inicio de sesión simulado
  const handleGoogleLogin = () => {
    // Simulamos el inicio de sesión con Google
    localStorage.setItem("user", "googleUser"); // Almacenamos el usuario en el localStorage
    router.push("/hacer-denuncia"); // Redirige a la página donde se puede hacer la denuncia
  };

  // Función para gestionar el enlace de preguntas frecuentes
  const handlePreguntasClick = () => {
    router.push("/preguntas-frecuentes"); // Redirige a la página de preguntas frecuentes
  };

  // Función para gestionar el botón "Atrás"
  const handleGoBack = () => {
    router.back(); // Vuelve a la página anterior
  };

  return (
    <div className={styles.denunciaContainer}>
      <h1>Iniciar Sesión para Hacer una Denuncia</h1>
      <button onClick={handleGoogleLogin} className={styles.googleLoginButton}>
        Iniciar sesión con Google
      </button>
      <footer>
        <button onClick={handleGoBack} className={styles.backButton}>
          Volver Atrás
        </button>
        <a onClick={handlePreguntasClick} className={styles.link}>
          Preguntas Frecuentes
        </a>
      </footer>
    </div>
  );
}
