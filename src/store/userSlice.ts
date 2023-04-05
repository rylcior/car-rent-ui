import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  userId: string | null;
}
const initialState: UserState = {
  email: null,
  userId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; userId: string }>
    ) => {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
