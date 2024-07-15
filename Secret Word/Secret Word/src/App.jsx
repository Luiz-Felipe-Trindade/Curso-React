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
  return (
    <>
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </>
  );
}

export default App;
