import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/notesSlice";
import { v4 as uuid } from "uuid";

const NotesForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (note) => {
    dispatch(
      addNote({
        ...note,
        id: uuid(),
      })
    );
    //document.querySelector("#title").value = "";
    //document.querySelector("#description").value = "";
  };

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
