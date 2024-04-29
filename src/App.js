//import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Homepage from './homepage';
import MovieTile from './movieTiles';
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Homepage />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
