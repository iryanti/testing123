import apiClient from "@/helpers/api-client";
import { StateCreator } from "zustand";
import { IHome } from "./interface";

export const createHomeSlice: StateCreator<IHome> = (set) => ({
  // state
  isLoading: false,
  isSuccess: false,
  isLoadingBanner: false,
  movieRecomendation: [],
  dataBanner: [],
  dataAnime: {
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
  topPeople: {
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
  topCharacters: {
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
  topReviews: {
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
  dataAnimeByID: [],

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
  getMovieRecomendation: async () => {
    try {
      set({ isLoading: true });
      const res = await apiClient.get(`/v4/recommendations/anime`);
      if (res?.data?.code === "SUCCESS") {
        set({
          movieRecomendation: res?.data?.data,
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
  getAnimeByID: async () => {
    try {
      const res = await apiClient.get(`/v4/anime/${21}`);
      if (res?.data?.code === "SUCCESS") {
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
  getAnimelist: async (limit?: number) => {
    try {
      const res = await apiClient.get(`/v4/anime?limit=${limit}`);
      set({
        dataAnime: res?.data,
      });
    } catch (error) {
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
  getTopPeople: async () => {
    try {
      const res = await apiClient.get(`/v4/top/people?limit=10`);
      if (res?.status === 200) {
        set({
          topPeople: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  getTopCharacters: async () => {
    try {
      const res = await apiClient.get(`/v4/top/characters?limit=10`);
      if (res?.status === 200) {
        set({
          topCharacters: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
  getTopReviews: async () => {
    try {
      const res = await apiClient.get(`/v4/top/reviews?limit=10`);
      if (res?.status === 200) {
        set({
          topReviews: res?.data,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
});
