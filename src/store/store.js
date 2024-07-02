import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./slices/countriesSlice";

const store = configureStore({
  reducer: {
    countriesData: countriesSlice,
  },
});

export default store;
