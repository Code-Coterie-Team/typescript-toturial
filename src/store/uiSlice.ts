import { createSlice } from "@reduxjs/toolkit";

interface IUiSlice {
  introModal: boolean;
  confirmModal: boolean;
}

const initialState: IUiSlice = {
  introModal: false,

  confirmModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    //introModal
    // toggleIntroModal: (state, action: PayloadAction<boolean>) => {
    //   state.introModal = action.payload;
    // },
 

    //
  },
});

export const {  } = uiSlice.actions;
export default uiSlice.reducer;
