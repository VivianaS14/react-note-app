import { createSlice } from "@reduxjs/toolkit";

//hardcode notes
const hardCodeNotes = [
    {
        id: "1",
        title: "Note Example",
        description: "Note Description"
    }
]

const localsValues = localStorage.getItem("NOTES_V1")
let initialState

if (!localsValues) {
    localStorage.setItem("NOTES_V1", JSON.stringify(hardCodeNotes))
    initialState = hardCodeNotes
} else {
    initialState = JSON.parse(localsValues)
}

// como creamos un useState, inicializamos un valor
export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
            localStorage.setItem("NOTES_V1", JSON.stringify(state))
        },
        updateNote: (state, action) => {
            const { id, title, description } = action.payload

            const noteFound = state.find(note => note.id === id)
            if (noteFound) {
                noteFound.title = title
                noteFound.description = description
            }

            localStorage.setItem("NOTES_V1", JSON.stringify(state))

        },
        deleteNote: (state, action) => {
            const noteFound = state.find(note => note.id === action.payload)
            if (noteFound) {
                state.splice(state.indexOf(noteFound), 1)
            }

            localStorage.setItem("NOTES_V1", JSON.stringify(state))
        },

    }
})

export const { addNote, updateNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer