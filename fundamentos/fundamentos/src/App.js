// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpressions";
// Style
import "./App.css";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <div className="App">
      <h1>My First React Project!</h1>
      {/*Exemplo de Comentário!*/}
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
