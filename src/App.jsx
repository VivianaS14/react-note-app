import React from "react";
// useDispatch --> funciones que queremos llamar para actualizar el estado = para hacer algo desde el estado
// useSelector --> formar que podemos traer los datos dentro del estado = para seleccionar / traer algo desde el estado
//import { useDispatch, useSelector } from "react-redux";
// components
import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <NotesList />
      <NotesForm />
    </div>
  );
};

export default App;
