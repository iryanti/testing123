import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IManga } from "./interface";

export const createMangaSlice: StateCreator<IManga> = (set) => ({
  // state
  isLoading: false,
  isSuccess: false,
  dataMangaByID: {
    mal_id: 0,
    title: "",
    background: "",
    synopsis: "",
    images: {
      jpg: {},
      webp: {},
    },
    score: 0,
    scored_by: 0,
    year: 0,
  },

  // actions
  getMangaByID: async (id: number) => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(`/v4/manga/${id}/full`);
      if (res?.status === 200) {
        set({
          dataMangaByID: res?.data?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
