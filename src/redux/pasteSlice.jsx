// redux/pasteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pasteSlice = createSlice({
  name: 'pastes',
  initialState: JSON.parse(localStorage.getItem("pastes")) || [],
  reducers: {
    addToPastes: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state));
    },
    updateToPastes: (state, action) => {
      const index = state.findIndex(p => p._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state));
      }
    },
    deletePaste: (state, action) => {
      const updatedState = state.filter(p => p._id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(updatedState));
      return updatedState;
    }
  },
});

export const { addToPastes, updateToPastes, deletePaste } = pasteSlice.actions;
export default pasteSlice.reducer;
