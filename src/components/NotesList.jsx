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
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h2>Notes {notes.length}</h2>
        <Link
          to="/create-note"
          className="bg-indigo-600 px-4 py-1 rounded-md text-sm"
        >
          Create Note
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-md "
          >
            <header className="flex justify-between gap-x-2">
              <h3>{note.title}</h3>
              <div className="flex">
                <Link
                  className="px-2 py-1 text-xs rounded-md"
                  to={`/edit-note/${note.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            </header>
            <p className="h-auto">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
