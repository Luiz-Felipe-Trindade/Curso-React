// Style
import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// Config react route:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Router</h1>
        {/* 2- Links com react router*/}

        <BrowserRouter>
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 6- Nested Route */}
            <Route path="/products/:id/info" element={<Info />} />
            {/* 4- Rota dinamica */}
            <Route path="/products/:id" element={<Products />} />
            {/* Search */}
            <Route path="/search" element={<Search />} />
            {/* redirect */}
            <Route path="/company" element={<Navigate to="/about" />}></Route>
            {/* 404 Page Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
