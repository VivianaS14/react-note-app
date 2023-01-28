import { configureStore } from "@reduxjs/toolkit";
// se importa el default que son los recuders
import notesReducer from "../features/notes/notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})