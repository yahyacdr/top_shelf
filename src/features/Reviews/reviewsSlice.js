import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addReview, getReviews } from "../../services/apiReviews";

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
      })
      .addCase(uploadReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadReviews.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(uploadReviews.rejected, (state) => {
        state.err = true;
      });
  },
});

export const fetchReviews = createAsyncThunk("fetchReviews", async () => {
  return getReviews();
});

export const uploadReviews = createAsyncThunk(
  "uploadReviews",
  async (data, thunkAPI) => {
    return addReview(data.name, data.review, data.rating, data.productId);
  }
);

export default reviewSlice.reducer;
