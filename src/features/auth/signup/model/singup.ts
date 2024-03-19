import { createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";

import { BASE_URL } from "@/shared/api/_BASE_URL";

export const createUser = createAsyncThunk(
  "users/createUser", 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);