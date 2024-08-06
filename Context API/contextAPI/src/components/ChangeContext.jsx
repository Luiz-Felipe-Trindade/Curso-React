import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeContext = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default ChangeContext;
