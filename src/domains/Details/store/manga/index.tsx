import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IManga } from "./interface";

export const createMangaSlice: StateCreator<IManga> = (set) => ({
  // state
  isLoading: false,
  isSuccess: false,
  dataMangaByID: {},

  // actions
  getMangaByID: async (id: number) => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(`/v4/manga/${id}/full`);
      if (res?.status === 200) {
        set({
          dataMangaByID: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
