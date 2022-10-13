import { createSlice } from "@reduxjs/toolkit";

import { ContactModalState } from "../../../ts-interfaces/redux-states/ContactModalState";

const initialState: ContactModalState = {
  isOpen: false,
};

export const contactModalSlice = createSlice({
  name: "contactModal",
  initialState,
  reducers: {
    toggleContactModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleContactModal } = contactModalSlice.actions;
export default contactModalSlice.reducer;
