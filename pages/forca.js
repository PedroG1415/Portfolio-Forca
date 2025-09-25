import React, { useState, useEffect } from "react";
import WordDisplay from "../components/WordDisplay";
import Keyboard from "../components/Keyboard";
import ForcaSVG from "../components/ForcaSVG";
import styles from "../styles/Forca.module.css";

const words = [
  "REACT", "JAVASCRIPT", "NEXT", "COMPONENTE", "PROPS", "ESTADO",
  "HOOKS", "FUNCAO", "ARRAY", "OBJETO", "VARIAVEL", "CONDICIONAL",
  "MAP", "FILTER", "REDUX", "CONTEXT", "EVENTO", "BUTTON", "INPUT",
  "FORMULARIO", "CSS", "HTML", "NODE", "BACKEND", "FRONTEND", "API",
  "SERVIDOR", "CLIENTE", "JSON", "PROMISE"
];

export default function Forca() {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [maxErrors] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessed([]);
    setWrongLetters([]);
    setGameOver(false);
    setWin(false);
  };

  const handleGuess = (letter) => {
    if (gameOver) return;
    letter = letter.toUpperCase();

    if (word.includes(letter)) {
      if (!guessed.includes(letter)) {
        const newGuessed = [...guessed, letter];
        setGuessed(newGuessed);

        if (word.split("").every(l => newGuessed.includes(l))) {
          setWin(true);
          setGameOver(true);
        }
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        const newWrong = [...wrongLetters, letter];
        setWrongLetters(newWrong);

        if (newWrong.length >= maxErrors) {
          setGameOver(true);
          setWin(false);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Jogo da Forca</h1>
      <ForcaSVG errors={wrongLetters.length} />
      <WordDisplay word={word} guessed={guessed} />
      <Keyboard guessed={[...guessed, ...wrongLetters]} onClick={handleGuess} />
      <p>Tentativas restantes: {maxErrors - wrongLetters.length}</p>

      {gameOver && (
        <div className={styles.result}>
          {win ? <h2>Parabéns! Você ganhou! 🎉</h2> : <h2>Você perdeu! 😢 Palavra: {word}</h2>}
          <button onClick={startNewGame}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}
