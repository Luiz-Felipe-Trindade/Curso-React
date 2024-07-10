import { useState } from "react";
import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ShowMessage from "./components/ShowMessage";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";
import UserDetails from "./components/UserDetails";

function App() {
  const [userName, setUserName] = useState("Luiz");
  const [cars, setCars] = useState([
    {
      id: 1,
      brand: "Renault",
      km: 0,
      color: "Red",
      newCar: true,
    },
    {
      id: 2,
      brand: "Fiat",
      km: 1000,
      color: "White",
      newCar: false,
    },
    {
      id: 3,
      brand: "Uno",
      km: 0,
      color: "Silver",
      newCar: true,
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Luiz",
      age: 20,
      occupation: "Machine Operator",
    },
    {
      id: 2,
      name: "Ana",
      age: 25,
      occupation: "Teacher",
    },
    {
      id: 3,
      name: "Lucas",
      age: 10,
      occupation: "Studant",
    },
  ]);

  function showMessage() {
    console.log("Função do componente Pai!");
  }
  const [myMessage, setMyMessage] = useState("");

  const handleMessage = (newMessage) => {
    setMyMessage(newMessage);
  };

  return (
    <>
      {/* Hooks */}
      <ManageData />
      {/* Renderização de listas */}
      <ListRender />
      {/* Condicional IF */}
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Reaproveitamento de Componentes */}
      <CarDetails brand="VW" km={100000} color="Red" />
      <CarDetails brand="Ford" km={3000} color="Blue" />
      {/* loop de componente com objetos e props */}
      {cars.map((car, i) => (
        <CarDetails
          key={i}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      <Container>
        <p>esta é a children Prop</p>
      </Container>
      <ShowMessage executeFunction={showMessage} />
      <Message message={myMessage} />
      <ChangeMessage handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nameUser={user.name}
          ageUser={user.age}
          occupationUser={user.occupation}
        />
      ))}
    </>
  );
}

export default App;
