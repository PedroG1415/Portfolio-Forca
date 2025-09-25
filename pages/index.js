import React from "react";
import Link from "next/link";
import styles from "../styles/Portfolio.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pedro Gabriel</h1>
        <p>Desenvolvedor Frontend | React | JavaScript | CSS</p>
      </header>

      <section className={styles.about}>
        <h2>Sobre mim</h2>
        <p>Sou um desenvolvedor apaixonado por criar interfaces modernas e interativas usando React e Next.js.</p>
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>React / Next.js</li>
          <li>JavaScript / TypeScript</li>
          <li>HTML / CSS / Tailwind</li>
          <li>APIs REST / Back4App</li>
        </ul>
      </section>

      <section className={styles.projects}>
        <h2>Projetos</h2>
        <ul>
          <li>Catálogo de Filmes (React + Back4App)</li>
          <li>Sistema de Restaurante (Java)</li>
          <li>Jogo da Forca (Next.js/React) - <Link href="/forca">Jogar</Link></li>
        </ul>
      </section>
    </div>
  );
}
