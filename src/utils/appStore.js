import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
