import "./GameOver.css";
const GameOver = ({ restartGame }) => {
  return (
    <div>
      <h1>Game Over!</h1>
      <button onClick={restartGame}>Tentar Novamente</button>
    </div>
  );
};

export default GameOver;
