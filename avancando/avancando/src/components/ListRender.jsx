import { useState } from "react";

import React from "react";

const ListRender = () => {
  const [list] = useState(["Luiz", "Matheus", "João", "Maurício"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Luiz", age: 20 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Ana", age: 10 },
    { id: 4, name: "Lucas", age: 24 },
    { id: 5, name: "Marcos", age: 29 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomNumber !== users.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Random Delete User</button>
    </div>
  );
};

export default ListRender;
