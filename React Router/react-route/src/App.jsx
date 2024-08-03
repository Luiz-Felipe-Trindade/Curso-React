import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Navbar from "./components/Navbar";

// Config react route:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        {/* 2- Links com react router*/}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4- Rota dinamica */}
            <Route path="/products/:id" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
