// Css
import "./App.css";
// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
// React
import { useCallback, useEffect, useState } from "react";
// Data
import { wordsList } from "./data/words";
const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(words).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // starts the secret word game
  const startGame = () => {
    setGameStage(stage[1].name);
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");

    // lower the letters
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);
  };
  // process letter input
  const verifyLetter = () => {
    setGameStage(stage[2].name);
  };

  // Restart the secret word game
  const restartGame = () => {
    setGameStage(stage[0].name);
  };
  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver restartGame={restartGame} />}
      </div>
    </>
  );
}

export default App;
