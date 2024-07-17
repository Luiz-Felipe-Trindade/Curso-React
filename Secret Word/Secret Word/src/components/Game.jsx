import "./Game.css";
import { useState, useRef } from "react";
const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");

  const inputLetterRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);

    setLetter("");

    inputLetterRef.current.focus();
  };
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra!</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <p>Você ainda tem {guesses} tentativas</p>
      <div>
        <div className="letterContainer">
          <p>Tente adivinhar uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={inputLetterRef}
            />
            <button>Jogar</button>
          </form>
        </div>
        <div className="wrongLetterContainer">
          <p>Letras já utilizadas: </p>
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
