import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Navbar from "./components/Navbar";

// Config react route:
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
