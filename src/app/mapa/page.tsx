'use client';

import styles from './vermapa.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function VerMapa() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logokap.png" alt="Logo KAP" width={60} height={60} />
        <Image src="/logoimg.png" alt="Logo Niño" width={60} height={60} />
      </div>

      <div className={styles.backButton}>
        <Link href="/abrir-para-denunciar">← Volver</Link>
      </div>

      <input
        type="text"
        placeholder="Inserte dirección aproximada"
        className={styles.input}
      />

      <div className={styles.mapPlaceholder}>
        Acá se va a ver el mapa
      </div>

      <p className={styles.footer}>
        *Esta es una versión de prueba sin conexión real al mapa.
      </p>
    </div>
  );
}
