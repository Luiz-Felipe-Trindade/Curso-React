import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Com CSS</h1>
      <MyComponent />
    </>
  );
}

export default App;
