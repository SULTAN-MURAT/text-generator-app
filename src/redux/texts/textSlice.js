import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTextAsync = createAsyncThunk(
  "getTextAsync",
  async (params) => {
    console.log("params",params)
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${params.input}&format=${params.resType}`
    );
    console.log(res.data);
    return res.data;
  }
);

export const textSlice = createSlice({
  name: "texts",
  initialState: {
    item: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTextAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTextAsync.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.status = "succeeded";
    },
    [getTextAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    },
  },
});
export const textSelector = (state) => state.texts.item;

export default textSlice.reducer;
