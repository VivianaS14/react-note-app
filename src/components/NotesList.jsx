import React from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  // tiene acceso a todo el estado completo, y del estado traeme notes
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
