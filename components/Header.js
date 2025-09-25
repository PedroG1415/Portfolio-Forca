import React from "react";
import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Pedro Gabriel</h1>
      <p>Desenvolvedor Frontend | React | Next.js | JavaScript</p>
      <nav>
        <Link href="/">Home</Link> | <Link href="/forca">Jogo da Forca</Link>
      </nav>
    </header>
  );
}
