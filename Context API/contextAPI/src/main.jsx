import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
