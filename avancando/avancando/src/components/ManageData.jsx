import { useState } from "react";

const ManageData = () => {
  const [number, setNumber] = useState(15);

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number - 5)}>Decremente 5!</button>
    </div>
  );
};

export default ManageData;
