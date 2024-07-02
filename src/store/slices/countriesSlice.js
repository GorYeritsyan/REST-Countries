import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//thunkCreators

export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
});

export const fetchOne = createAsyncThunk("fetchOne", async (name) => {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return res.data;
});

export const fetchRegion = createAsyncThunk("fetchRegion", async (region) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  return res.data;
});

//slice

const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState: {
    countries: [],
    isFetching: false,
    country: [],
    oneRegion: [],
  },
  extraReducers: (builder) => {
    //getting all countries
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isFetching = false;
      state.countries = action.payload;
    });

    //getting one country

    builder.addCase(fetchOne.pending, (state, action) => {
      state.isFetching = true;
    });

    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.isFetching = false;
      state.country = action.payload;
    });
    //getting region
    builder.addCase(fetchRegion.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchRegion.fulfilled, (state, action) => {
      state.isFetching = false;
      state.oneRegion = action.payload;
    });
  },
});

export default countriesSlice.reducer;
