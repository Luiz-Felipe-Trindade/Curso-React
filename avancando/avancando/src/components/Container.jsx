const Container = ({ children }) => {
  return (
    <div>
      <p>container prop</p>
      <h2>{children}</h2>
    </div>
  );
};

export default Container;
