import "./GameOver.css";
const GameOver = ({ restartGame, score }) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>
        A sua Pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={restartGame}>Tentar Novamente</button>
    </div>
  );
};

export default GameOver;
