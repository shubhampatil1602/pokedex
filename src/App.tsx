import { BrowserRouter, Route, Routes } from "react-router";

import PokemonList from "./pages/PokemonList";
import Pokemon from "./pages/Pokemon";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonList />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
