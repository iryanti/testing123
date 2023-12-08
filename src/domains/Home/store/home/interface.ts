import { Anime } from "@/@type/home";

export interface IHome {
  isLoading: boolean;
  isSuccess: boolean;
  isLoadingBanner: boolean;
  movieRecomendation: [];
  dataAnimeByID: [];
  dataAnime: {
    data: Anime[];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  topAnime: {
    data: Anime[];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  topManga: {
    data: [];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  topPeople: {
    data: [];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  topCharacters: {
    data: [];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  topReviews: {
    data: [];
    pagination: {
      current_page: number;
      has_next_page: boolean;
      items: { count: number; total: number; per_page: number };
      count: number;
      per_page: number;
      total: number;
      last_visible_page: number;
    };
  };
  dataBanner: [];
  getMovieRecomendation: Function;
  getAnimeByID: Function;
  getAnimelist: Function;
  getTopAnime: Function;
  getBanner: Function;
  getTopManga: Function;
  getTopPeople: Function;
  getTopCharacters: Function;
  getTopReviews: Function;
}
