import styles from './denunciar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AbrirParaDenunciar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/logoKap.png" alt="Logo KAP" width={80} height={40} />
        <Image src="/logoimg.png" alt="Puzzle" width={60} height={60} />
      </header>

      <main className={styles.main}>
        <Link href="/mapa">
          <button className={styles.button}>VER MAPA</button>
        </Link>
        <Link href="/denuncia">
          <button className={styles.button}>REALIZAR DENUNCIA</button>
        </Link>
      </main>

      <footer className={styles.footer}>
        PREGUNTAS FRECUENTES
      </footer>
    </div>
  );
}
