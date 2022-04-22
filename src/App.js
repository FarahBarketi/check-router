import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import MovieList from "./moovies/MovieList";
import Description from "./moovies/Description";
import Home from "./components/Home";
import { Data } from "./Data";

function App() {
  const [movies, setMovies] = useState(Data);
  return (
    <div>
      <Navigation />
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<Description movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;