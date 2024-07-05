// Components
import FirstComponent from "./components/FirstComponent"
import TemplateExpression from "./components/TemplateExpressions";
// Style
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My First React Project!</h1>
      {/*Exemplo de Comentário!*/}; 
    <FirstComponent/>
    <TemplateExpression/>
    </div>
  );
}

export default App;
