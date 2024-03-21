import { loginUser } from "@/features/auth/login/model/login";
// import { createUser } from "@/features/auth/signup/model/singup";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      if(action.error.message === 'Request failde') {
        state.error = 'Access Denied!'
      } else {
        state.error = action.error.message;
      }
    })
  }
});

// export const { toggleFormType, setError } = userSlice.actions;

export default userSlice.reducer;

