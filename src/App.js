
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home"
import Inicio from "./Inicio"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Inicio/>} />
  
    </Routes>
  </BrowserRouter>,
    </>
  );
}

export default App;
