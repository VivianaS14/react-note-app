import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../features/notes/notesSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const NotesForm = () => {
  const { register, handleSubmit } = useForm();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = (_note) => {
    if (params.id) {
      dispatch(
        updateNote({
          ..._note,
          id: note.id,
        })
      );
    } else {
      dispatch(
        addNote({
          ..._note,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      let note = notes.find((note) => note.id === params.id);
      setNote(note);
      document.getElementById("title").value = note.title;
      document.getElementById("description").value = note.description;
    }
  }, [params.id, note]);

  return (
    <form
      className="bg-zinc-800 max-w-sm p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block text-xs font-bold mb-2" htmlFor="title">
        Note:{" "}
      </label>
      <input
        name="title"
        id="title"
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        type="text"
        placeholder="Title"
        {...register("title")}
      />
      <label className="block text-xs font-bold mb-2" htmlFor="description">
        Description:{" "}
      </label>
      <textarea
        name="description"
        id="description"
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Description"
        {...register("description")}
      ></textarea>
      <button
        className="w-2/6 bg-indigo-600 px-2 py-1 rounded-md"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default NotesForm;
