import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./paginas/Home/Home";
import { Pagina1001Filmes } from "./paginas/Pagina1001Filmes/Pagina1001Filmes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1001filmes" element={<Pagina1001Filmes />} />
      </Routes>
    </Router>
  );
}
