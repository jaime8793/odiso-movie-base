//import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Homepage from './homepage';
import Profile from './profile';
//import MovieTile from './movieTiles';
import Anime from './Movie-Genres/anime';
import Netflix from './Movie-Genres/Netflix';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tv show" element={<Netflix/>} />
          <Route path="/anime" element={<Anime/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

 /*<Route path="/" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />*/
