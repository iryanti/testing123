import { create } from "zustand";
import { IRecomendation } from "./Recomendation/interface";
import { createRecomendationSlice } from "./Recomendation";

export const useBoundRecomenStore = create<IRecomendation>()((...a) => ({
  ...createRecomendationSlice(...a),
}));
