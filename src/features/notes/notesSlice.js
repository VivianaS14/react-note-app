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
        },
        updateNote: (state, action) => {
            const { id, title, description } = action.payload

            const noteFound = state.find(note => note.id === id)
            if (noteFound) {
                noteFound.title = title
                noteFound.description = description
            }
        },
        deleteNote: (state, action) => {
            const noteFound = state.find(note => note.id === action.payload)
            if (noteFound) {
                state.splice(state.indexOf(noteFound), 1)
            }
        },

    }
})

export const { addNote, updateNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer