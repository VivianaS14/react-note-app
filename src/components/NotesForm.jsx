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
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NotesForm;
