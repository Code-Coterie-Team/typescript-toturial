import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalSlice {
  introModal: boolean;
  confirmModal: boolean;
}

const initialState: IModalSlice = {
  introModal: false,

  confirmModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    //introModal
    toggleIntroModal: (state, action: PayloadAction<boolean>) => {
      state.introModal = action.payload;
    },
    showIntroModal: (state) => {
      state.introModal = true;
    },

    //confirmModal
    toggleConfirmModal: (state, action: PayloadAction<boolean>) => {
      state.confirmModal = action.payload;
    },

    //
  },
});

export const { toggleIntroModal } = modalSlice.actions;
export default modalSlice.reducer;
