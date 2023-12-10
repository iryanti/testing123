import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IRecomendation } from "./interface";

export const createRecomendationSlice: StateCreator<IRecomendation> = (
  set
) => ({
  // state
  isLoading: false,
  isSuccess: false,
  dataRecomendation: {
    data: [],
    pagination: {
      current_page: 0,
      has_next_page: false,
      items: { count: 0, total: 0, per_page: 0 },
      count: 0,
      per_page: 0,
      total: 0,
      last_visible_page: 0,
    },
  },

  // actions
  getRecomendation: async (type: string) => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(`/v4/recommendations/${type}`);
      if (res?.status === 200) {
        set({
          dataRecomendation: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
