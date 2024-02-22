import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "books",
    initialState: { data: [], loading: false },
    reducers: {
        addBook: (state, action) => {
            state.data.push(action.payload);
        },
        editBook: (state, action) => {
            const { id, title, author } = action.payload;
            const book = state.data.find((book) => book.id === id);
            if (book) {
                book.title = title;
                book.author = author;
            }
        },
        removeBook: (state, action) => {
            state.data = state.data.filter(
                (book) => book.id !== action.payload
            );
        },
        fetchBookStart: (state) => {
            state.loading = true;
        },
        fetchBookSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        fetchBookFailure: (state) => {
            state.loading = false;
        },
    },
});

export const {
    addBook,
    editBook,
    removeBook,
    fetchBookStart,
    fetchBookSuccess,
    fetchBookFailure,
} = bookSlice.actions;

export default bookSlice;