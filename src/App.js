import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main"
import About from "./pages/About"
import Nav from './components/Nav';
import Stocks from "./pages/Stocks"
import Price from "./pages/Price"

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

