import React from "react";
import styles from "../styles/Forca.module.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ guessed, onClick }) {
  return (
    <div className={styles.keyboard}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onClick(letter)}
          disabled={guessed.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
