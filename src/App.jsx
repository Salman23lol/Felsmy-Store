import React from "react";
import "./App.css";
import Header from "./compoments/Header";
import Cards from "./compoments/cards";
import {Route,Routes} from 'react-router-dom'
import AddMovies from "./compoments/AddMovies";


function App() {
  return (
    <>
      <div className=" bg-gray-950 w-[100%] h-[100%]">
        <Header />
        <Routes>
          <Route path="/"  element={<Cards />} />
          <Route path="/add-movie"  element={<AddMovies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
