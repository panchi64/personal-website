import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuBarState {
  selOption: string;
}

const initialState: MenuBarState = {
  selOption: "home",
};

export const menuBarSlice = createSlice({
  name: "menuBar",
  initialState,
  reducers: {
    setSelOption: (state, action: PayloadAction<string>) => {
      state.selOption = action.payload;
    },
  },
});

export const { setSelOption } = menuBarSlice.actions;
export default menuBarSlice.reducer;
