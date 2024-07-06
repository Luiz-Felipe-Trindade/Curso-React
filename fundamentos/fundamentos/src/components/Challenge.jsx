const Challenge = () => {
  const A = 19;
  const B = 20;
  const handlePlusOnClick = () => {
    return console.log(A + B);
  };
  return (
    <div>
      <h1>A equivale a {A}</h1>
      <h1>B equivale a {B}</h1>
      <button onClick={handlePlusOnClick}>
        Clique aqui para somar os dois!
      </button>
    </div>
  );
};

export default Challenge;
