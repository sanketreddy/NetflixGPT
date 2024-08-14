import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    error: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieResults = movieResult;
      state.movieNames = movieNames;
    },
    addError: (state, action) => {
      const { message } = action.payload;
      state.error = message;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, addError } =
  gptSlice.actions;
export default gptSlice.reducer;
