type ImageType = {
  image_url?: string;
  large_image_url?: string;
  small_image_url?: string;
};

type ImageVariant = {
  jpg?: ImageType;
  webp?: ImageType;
};

type Entry = {
  mal_id: number;
  title: string;
  url: string;
  images: ImageVariant;
};

export type IProduct = {
  mal_id: number;
  title: string;
  background: string;
  synopsis: string;
  images: ImageVariant;
  score: number;
  year: number;
  scored_by: number;
  trailer?: {
    embed_url?: string;
  };
};

export type Char = {
  mal_id: number;
  about: string;
  favorites: number;
  images: ImageVariant;
  name: string;
  nicknames: [];
  url: string;
};

export type IProductRecomendation = {
  entry: Entry[];
};

export type IPagination = {
  current_page: number;
  has_next_page: boolean;
  items: { count: number; total: number; per_page: number };
  count: number;
  per_page: number;
  total: number;
  last_visible_page: number;
};
