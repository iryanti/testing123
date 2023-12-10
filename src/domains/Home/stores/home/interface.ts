import { IProduct, Char, IPagination } from "@/@type/home";

export interface IHome {
  isLoading: boolean;
  isSuccess: boolean;
  isLoadingBanner: boolean;
  characters: {
    data: Char[];
    pagination: Pagination;
  };
  topAnime: {
    data: IProduct[];
    pagination: IPagination;
  };
  topManga: {
    data: [];
    pagination: IPagination;
  };
  dataBanner: [];
  getCharacters: Function;
  getTopAnime: Function;
  getBanner: Function;
  getTopManga: Function;
}
