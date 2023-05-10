import { createSlice } from '@reduxjs/toolkit';

const darklightSlice = createSlice({
  name: 'darklight',
  initialState: typeof window !== 'undefined' && localStorage.getItem("theme")?localStorage.getItem("theme"):"light",
  reducers: {
  
    modechange: (state) => state=="light" ? "dark" : "light",
    // decrement: (state) => state - 1,
  },
});
// console.log("sdfsdfsdff")

export const { modechange } = darklightSlice.actions;
export default darklightSlice.reducer;