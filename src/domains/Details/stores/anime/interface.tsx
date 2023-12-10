import { IProduct } from "@/@type/home";

export interface IAnime {
  isLoading: boolean;
  isSuccess: boolean;
  dataAnimeByID?: IProduct;
  getAnimeByID: Function;
}
