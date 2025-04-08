'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from './iniciarsecion.module.css';

export default function IniciarSesion() {
  return (
    <div className={styles.container}>
      {/* Logos arriba */}
      <div className={styles.logos}>
        <Image src="/logokap.png" alt="Logo KAP" width={60} height={60} />
        <Image src="/logoimg.png" alt="Logo Niño" width={60} height={60} />
      </div>

      {/* Centro */}
      <div className={styles.centro}>
        <h1 className={styles.titulo}>IDENTIFICARSE CON</h1>
        <button onClick={() => signIn('google')} className={styles.googleBtn}>
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          <span>Google</span>
        </button>
      </div>

      {/* Enlaces abajo */}
      <div className={styles.links}>
        <Link href="/porque-identificarse" className={styles.linkRojo}>
          ¿Por qué debo identificarme?
        </Link>
        <Link href="/preguntas-frecuentes" className={styles.linkNegro}>
          PREGUNTAS FRECUENTES
        </Link>
      </div>
    </div>
  );
}
