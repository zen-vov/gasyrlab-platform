import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookies } from "@/shared/lib/cookies";

import axios from "axios";

import { BASE_URL } from "@/shared/api/_BASE_URL";

export const loginUser = createAsyncThunk(
  'users/loginUser', 
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        }
      }); 
      console.log(res.data);
      setCookies('access_token', res.data.access_token);
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// import { User } from "../types"
// import { api } from "./api"

// export const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation<
//       { token: string },
//       { email: string; password: string }
//     >({
//       query: (userData) => ({
//         url: "/login",
//         method: "POST",
//         body: userData,
//       }),
//     }),
//     register: builder.mutation<
//       { email: string; password: string; name: string },
//       { email: string; password: string; name: string }
//     >({
//       query: (userData) => ({
//         url: "/register",
//         method: "POST",
//         body: userData,
//       }),
//     }),
//     current: builder.query<User, void>({
//       query: () => ({
//         url: "/current",
//         method: "GET",
//       }),
//     }),
//     getUserById: builder.query<User, string>({
//       query: (id) => ({
//         url: `/users/${id}`,
//         method: "GET",
//       }),
//     }),
//     updateUser: builder.mutation<User, { userData: FormData; id: string }>({
//       query: ({ userData, id }) => ({
//         url: `/users/${id}`,
//         method: "PUT",
//         body: userData,
//       }),
//     }),
//   }),
// })

// export const {
//   useRegisterMutation,
//   useLoginMutation,
//   useCurrentQuery,
//   useLazyCurrentQuery,
//   useGetUserByIdQuery,
//   useLazyGetUserByIdQuery,
//   useUpdateUserMutation,
// } = userApi

// export const {
//   endpoints: { login, register, current, getUserById, updateUser },
// } = userApi