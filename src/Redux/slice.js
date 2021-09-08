import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
};

const packSlice = createSlice({
  name: "packs",
  initialState,
  reducers: {
    addPack(state, { payload }) {
      state.packages = [...state.packages, payload];
    },
    removePack(state, { payload }) {
      const filteredPacks = state.packages.filter(
        (pack) => pack.id !== payload
      );
      state.packages = filteredPacks;
    },
    changePackName(state, { payload }) {
      const searchedPack = state.packages.find(
        (pack) => pack.id === payload.id
      );
      searchedPack.name = payload.updatedName;
    },
  },
});

export const { addPack, removePack, changePackName } = packSlice.actions;
export default packSlice.reducer;
