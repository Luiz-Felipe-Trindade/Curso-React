// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeContext from "../components/ChangeContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { color, dispatch } = useTitleColorContext();
  const { counter } = useCounterContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h2 style={{ color: color }}>Home</h2>
      <p>O valor do contador é: {counter}</p>
      <ChangeContext />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
