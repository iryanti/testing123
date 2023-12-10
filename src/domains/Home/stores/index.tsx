import { create } from "zustand";
import { IHome } from "./home/interface";
import { createHomeSlice } from "./home/index";

export const useBoundHomeStore = create<IHome>()((...a) => ({
  ...createHomeSlice(...a),
}));
