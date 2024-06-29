import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReviews } from "../../services/apiReviews";

const initialState = {
  reviews: [],
  isLoading: true,
  err: false,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.err = true;
      });
  },
});

export const fetchReviews = createAsyncThunk("fetchReviews", async () => {
  return getReviews();
});

export default reviewSlice.reducer;
