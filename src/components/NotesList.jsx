import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../features/notes/notesSlice";

const NotesList = () => {
  // tiene acceso a todo el estado completo, y del estado traeme notes
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteNote(_id));
  };

  return (
    <div>
      <header>
        <h2>Notes {notes.length}</h2>
        <Link to="/create-note">Create task</Link>
      </header>

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
          <Link to={`/edit-note/${note.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
