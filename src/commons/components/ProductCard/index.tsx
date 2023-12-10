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
import { useState } from "react";

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
  id: number;
  image: string;
  title: string;
  desc: string;
  category: "anime" | "manga";
  score?: number;
}

export default function ProductCard({
  id,
  image = "",
  title = "",
  desc = "",
  category = "anime",
  score = 0,
}: IProductCard) {
  const [fav, setFav] = useState(false);

  const handleFavorite = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };

  const handleRedirectPage = () => {
    if (category === "anime") redirect(`/details/anime/${id}`);
    if (category === "manga") redirect(`/details/manga/${id}`);
  };

  return (
    <Card
      sx={{ maxWidth: 200, marginBottom: "10px" }}
      onClick={handleRedirectPage}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
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
          {title}
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
            value={score / 2}
            precision={0.5}
            readOnly
          />
          {!fav && (
            <FavoriteBorderIcon
              sx={{ color: `pink`, cursor: "pointer" }}
              titleAccess="Add To Favorite"
              onClick={(e) => {
                e.preventDefault();
                handleFavorite();
              }}
            />
          )}

          {fav && (
            <FavoriteIcon
              sx={{ color: `pink`, cursor: "pointer" }}
              titleAccess="Remove To Favorite"
              onClick={(e) => {
                e.preventDefault();
                handleFavorite();
              }}
            />
          )}
        </Stack>
        <StyleDesc>{desc}</StyleDesc>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleRedirectPage}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
