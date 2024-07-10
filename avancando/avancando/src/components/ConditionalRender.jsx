import React, { useState } from "react";

const ConditionalRender = () => {
  const [x, setX] = useState(true);
  const [name, setName] = useState("Ana");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>se X for True, sim!</p>}
      {!x && <p>X agora é False!</p>}
      <h1>If Ternário</h1>
      {name === "Luiz" ? (
        <div>
          <p>O nome é Luiz!</p>
        </div>
      ) : (
        <div>
          <p>O nome não é Luiz!</p>
        </div>
      )}
      <button
        onClick={() => {
          setName("Luiz");
        }}
      >
        Clique Aqui!
      </button>
    </div>
  );
};

export default ConditionalRender;
