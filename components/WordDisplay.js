import React from "react";
import styles from "../styles/Forca.module.css";

export default function WordDisplay({ word, guessed }) {
  return (
    <div className={styles.word}>
      {word.split("").map((letter, idx) => (
        <span key={idx} className={styles.letter}>
          {guessed.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}
