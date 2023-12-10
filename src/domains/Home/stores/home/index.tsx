import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IHome } from "./interface";

export const createHomeSlice: StateCreator<IHome> = (set) => ({
  // state
  isLoading: false,
  isSuccess: false,
  isLoadingBanner: false,
  characters: {
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
  dataBanner: [],
  topAnime: {
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
  topManga: {
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
  getBanner: async (limit?: number) => {
    try {
      set({
        isLoadingBanner: true,
      });
      const res = await apiClient.get(`/v4/anime?limit=${limit}`);
      set({
        dataBanner: res?.data?.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoadingBanner: false });
    }
  },
  getCharacters: async (limit: number, page: number) => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(
        `/v4/characters?limit=${limit}&page=${page}`
      );
      if (res?.status === 200) {
        set({
          characters: res?.data,
          isSuccess: true,
        });
      }
    } catch (error) {
      set({ isSuccess: false });
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  getTopAnime: async () => {
    try {
      const res = await apiClient.get(`/v4/top/anime?limit=10`);
      if (res?.status === 200) {
        set({
          topAnime: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  getTopManga: async () => {
    try {
      const res = await apiClient.get(`/v4/top/manga?limit=10`);
      if (res?.status === 200) {
        set({
          topManga: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
