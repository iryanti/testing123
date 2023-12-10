import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IAnime } from "./interface";

export const createAnimeSlice: StateCreator<IAnime> = (set) => ({
  // state
  isLoading: false,
  isSuccess: false,
  dataAnimeByID: {
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
  getAnimeByID: async (id: number) => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(`/v4/anime/${id}/full`);
      if (res?.status === 200) {
        set({
          dataAnimeByID: res?.data?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
