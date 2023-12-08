import { redirect } from "@/helpers/redirect";
import { styled } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";

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
}

export default function ProductCard({
  id,
  image = "",
  title = "",
  desc = "",
  category = "anime",
}: IProductCard) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography
          fontSize={"16px"}
          fontWeight={"700"}
          sx={{
            height: "50px",
          }}
        >
          {title}
        </Typography>
        <StyleDesc>{desc}</StyleDesc>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            if (category === "anime") redirect(`/details/anime/${id}`);
            if (category === "manga") redirect(`/details/manga/${id}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
