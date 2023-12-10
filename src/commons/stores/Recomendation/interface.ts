import { IProductRecomendation, IPagination } from "@/@type/home";

export interface IRecomendation {
  isLoading: boolean;
  isSuccess: boolean;
  dataRecomendation: {
    data: IProductRecomendation[];
    pagination: IPagination;
  };
  getRecomendation: Function;
}
