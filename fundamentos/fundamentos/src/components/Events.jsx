const Events = () => {
  const handleClickCount = () => {
    console.log("Clicou");
  };
  return (
    <div>
      <button onClick={handleClickCount}> Clique Aqui</button>
      <button onClick={() => console.log("Isso Também pode!")}>
        Clique Aqui Novamente
      </button>
    </div>
  );
};

export default Events;
