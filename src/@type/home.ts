type ImageType = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

type ImageVariant = {
  jpg: ImageType;
  webp: ImageType;
};

export type Anime = {
  mal_id: number;
  title: string;
  background: string;
  synopsis: string;
  images: ImageVariant;
};
