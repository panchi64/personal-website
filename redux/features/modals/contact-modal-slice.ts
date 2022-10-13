import { createSlice } from "@reduxjs/toolkit";

import { ContactModalState } from "../../../ts-interfaces/redux-states/ContactModalState";

const initialState: ContactModalState = {
  isOpen: false,
};

export const contactModalSlice = createSlice({
  name: "contactModal",
  initialState,
  reducers: {
    openContactModal: (state) => {
      state.isOpen = true;
    },
    closeContactModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openContactModal, closeContactModal } =
  contactModalSlice.actions;
export default contactModalSlice.reducer;
