import { createSlice } from "@reduxjs/toolkit";

//hardcode notes
const initialState = [
    {
        id: "1",
        title: "Note 1",
        description: "Note 1 Description"
    },
    {
        id: "2",
        title: "Note 2",
        description: "Note 2 Description"
    }
]

// como creamos un useState, inicializamos un valor
export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addNote } = notesSlice.actions

export default notesSlice.reducer