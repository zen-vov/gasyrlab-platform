import { createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";

import { getCookies } from "@/shared/lib/cookies";
import { BASE_URL } from "@/shared/api/_BASE_URL";

export const createUser = createAsyncThunk(
  "users/createUser", 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users/`, payload);
      getCookies('access_token');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);