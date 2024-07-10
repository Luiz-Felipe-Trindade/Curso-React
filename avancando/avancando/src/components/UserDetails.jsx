import React from "react";

const UserDetails = ({ nameUser, ageUser, occupationUser }) => {
  return (
    <div>
      <p>
        {nameUser} tem {ageUser} anos é {occupationUser}
      </p>
      {ageUser >= 18 ? (
        <p>Está Apto a realizar a Carteira de Habilitação</p>
      ) : (
        <p>Não Está Apto a Realizar a Carteira De Habilitação!</p>
      )}
    </div>
  );
};

export default UserDetails;
