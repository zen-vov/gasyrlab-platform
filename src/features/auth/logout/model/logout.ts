import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { BASE_URL } from "@/shared/api/_BASE_URL";

export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (_, thunkAPI) => {
    try {
      // Отправляем запрос на сервер для завершения сеанса пользователя
      await axios.post(`${BASE_URL}/auth/logout`);
      
      // Очищаем данные аутентификации в Redux-состоянии
      // Например, удаление токена аутентификации или других данных, связанных с аутентификацией
      // dispatch(clearAuthToken());

      // Возвращаем успешный результат
      return true;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
