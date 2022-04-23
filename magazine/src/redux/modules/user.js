import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apis } from '../../shared/axios';

export const signupDB = createAsyncThunk(
  'user/signup',
  async (data, thunkAPI) => {
    try {
      //console.log('data확인', data);
      await apis.signup(data);
      return;
    } catch (err) {
      alert(thunkAPI.rejectWithValue(err.response.data).payload.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const user = createSlice({
  name: 'userReducer',
  initialState: {
    isLogin: false,
    nickname: '',
  },
  extraReducers: {
    [signupDB.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signupDB.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signupDB.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default user.reducer;
