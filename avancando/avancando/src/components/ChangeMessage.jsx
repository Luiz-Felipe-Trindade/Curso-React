import React from "react";

const ChangeMessage = ({ handleMessage }) => {
  const message = ["OI", "OLA", "OPA"];
  return (
    <div>
      <button onClick={() => handleMessage(message[0])}>1</button>
      <button onClick={() => handleMessage(message[1])}>2</button>
      <button onClick={() => handleMessage(message[2])}>3</button>
    </div>
  );
};

export default ChangeMessage;
