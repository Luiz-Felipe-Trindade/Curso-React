import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  // Gerenciamento de dados;
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando...");
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="Nome"
            id=""
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input type="text" placeholder="Digite o seu e-mail" value={email} />
        </label>
        <input type="submit" name="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
