import { IProduct } from "@/@type/home";

export interface IManga {
  isLoading: boolean;
  isSuccess: boolean;
  dataMangaByID: IProduct;
  getMangaByID: Function;
}
