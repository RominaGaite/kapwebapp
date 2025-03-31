"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const images = [
    "/1.png", // La ruta correcta desde la carpeta 'public'
    "/2.png",
    "/3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    // Redirige después de que se muestren todas las imágenes
    if (currentImage === images.length - 1) {
      setTimeout(() => {
        router.push("/inicio"); // Redirige a la pantalla de inicio
      }, 1000); // Espera 1 segundo después de la última imagen
    }

    return () => clearInterval(interval);
  }, [currentImage, images.length, router]);

  return (
    <div className={styles.carouselContainer}>
      <img
        className={styles.carouselImg}
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
      />
    </div>
  );
}
