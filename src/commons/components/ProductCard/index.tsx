import { redirect } from "@/helpers/redirect";
import { Rating, Stack, styled } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/helpers/local-storage";
import { IProduct } from "@/@type/home";
import isEmpty from "@/helpers/is-empty";
import { useRouter } from "next/router";

const StyleDesc = styled(`div`)({
  width: `100%`,
  height: `150px`,
  overflow: `hidden`,
  textOverflow: `ellipsis`,
  display: `-webkit-box`,
  WebkitLineClamp: `6`,
  WebkitBoxOrient: `vertical`,
});

interface IProductCard {
  data: IProduct;
  category?: string;
}

export default function ProductCard({ data, category }: IProductCard) {
  const { isReady } = useRouter();

  const [fav, setFav] = useState(false);

  const handleFavorite = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();
    e.stopPropagation();
    let dataLocal = getLocalStorage(`favorite`);

    if (fav) {
      setFav(false);
      if (!isEmpty(dataLocal)) {
        const res = dataLocal.filter((obj: any) => obj.mal_id !== data?.mal_id);
        setLocalStorage("favorite", res);
      }
    } else {
      setFav(true);
      if (!isEmpty(dataLocal)) {
        dataLocal.push(data);
        setLocalStorage("favorite", dataLocal);
      } else {
        setLocalStorage("favorite", [data]);
      }
    }
  };

  const handleRedirectPage = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();
    e.stopPropagation();

    if (category === "anime") redirect(`/details/anime/${data?.mal_id}`);
    if (category === "manga") redirect(`/details/manga/${data?.mal_id}`);
  };

  useEffect(() => {
    if (isReady) {
      if (!isEmpty(getLocalStorage(`favorite`))) {
        const dataLocal = getLocalStorage(`favorite`);
        let product = dataLocal?.find(
          (item: any) => item?.mal_id === data?.mal_id
        );
        setFav(!isEmpty(product) ? true : false);
      }
    }
  }, [isReady]);

  return (
    <Card
      sx={{ maxWidth: 200, marginBottom: "10px" }}
      onClick={(e) => handleRedirectPage(e)}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={data?.images?.webp?.image_url}
        title={data?.title}
      />
      <CardContent
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        <Typography
          fontSize={"16px"}
          fontWeight={"700"}
          sx={{
            height: "50px",
          }}
        >
          {data?.title}
        </Typography>
        <Stack
          direction={`row`}
          sx={{
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          <Rating
            name="size-medium"
            value={data?.score && data?.score / 2}
            precision={0.5}
            readOnly
          />
          {!fav && (
            <FavoriteBorderIcon
              sx={{ color: `pink`, cursor: "pointer" }}
              titleAccess="Add To Favorite"
              onClick={(e) => {
                handleFavorite(e);
              }}
            />
          )}

          {fav && (
            <FavoriteIcon
              sx={{ color: `pink`, cursor: "pointer" }}
              titleAccess="Remove To Favorite"
              onClick={(e) => {
                handleFavorite(e);
              }}
            />
          )}
        </Stack>
        <StyleDesc>{data?.synopsis}</StyleDesc>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRedirectPage}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
