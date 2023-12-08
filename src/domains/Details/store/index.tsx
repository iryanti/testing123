import { create } from "zustand";
import { IManga } from "./manga/interface";
import { createMangaSlice } from "./manga/index";
import { IAnime } from "./anime/interface";
import { createAnimeSlice } from "./anime/index";

export const useBoundCategoryStore = create<IManga & IAnime>()((...a) => ({
  ...createMangaSlice(...a),
  ...createAnimeSlice(...a),
}));
