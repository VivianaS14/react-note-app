import React from "react";
// useDispatch --> funciones que queremos llamar para actualizar el estado = para hacer algo desde el estado
// useSelector --> formar que podemos traer los datos dentro del estado = para seleccionar / traer algo desde el estado
//import { useDispatch, useSelector } from "react-redux";
// components
import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-zinc-900 bg-repeat h-screen text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl ">My Note's App</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/create-note" element={<NotesForm />} />
            <Route path="/edit-note/:id" element={<NotesForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
