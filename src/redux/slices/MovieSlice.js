import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const getMovie = createAsyncThunk("movie/getMovie", async () => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: { language: "ar", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRhY2ZlMGU1MGY3M2UyOGVkM2VlZTdlMmE0OThjNSIsIm5iZiI6MTc0NTQxNDY3Ny43MTcsInN1YiI6IjY4MDhlYTE1MTQyYjA5Y2VjZjg5ZmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qo7UtX_5SQE198ik7j0de714jqD4zs7bQ1ThSSMu34c",
    },
  });
  return res.data;
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.data = [];
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
    builder.addCase(getMovie.rejected, (state) => {
      state.data = [];
    });
  },
});

export default movieSlice.reducer;
