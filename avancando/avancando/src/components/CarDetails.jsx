import React from "react";

const CarDatails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>O carro é novo!</p>}
    </div>
  );
};

export default CarDatails;
