import { redirect } from "@/helpers/redirect";
import {
  Card,
  CardContent,
  CardMedia,
  SxProps,
  Typography,
} from "@mui/material";

interface IProfileCard {
  id: number;
  image: string | undefined;
  name: string;
  follower?: number;
  handleRedirect?: Function;
  sx?: SxProps;
}

export default function SimpleCard({
  id = 0,
  image = "",
  name = "",
  handleRedirect = () => {},
  sx = {
    width: 150,
    height: 200,
  },
}: IProfileCard) {
  return (
    <Card sx={sx} onClick={() => handleRedirect}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
}
