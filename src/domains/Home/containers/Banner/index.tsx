import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";

const Container = styled("div")({
  height: "500px",
});

const BannerContainer = styled(Stack)({
  width: `100%`,
  height: `450px`,
  background: `black`,
  justifyContent: `space-between`,
});

const DescContainer = styled(`div`)({
  width: `40%`,
  margin: ` auto`,
  textAlign: `center`,
  p: {
    color: `white`,
  },
});

const StyleDesc = styled(`div`)({
  color: `white`,
  width: `100%`,
  height: `150px`,
  overflow: `hidden`,
  textOverflow: `ellipsis`,
  display: `-webkit-box`,
  WebkitLineClamp: `6`,
  WebkitBoxOrient: `vertical`,
});

interface IBannerItem {
  data: any;
}

export function BannerItems({ data }: IBannerItem) {
  return (
    <BannerContainer direction={`row`}>
      <DescContainer>
        <Typography
          variant="h3"
          color={`white`}
          sx={{
            mb: 2,
          }}
        >
          {data?.title}
        </Typography>
        <StyleDesc sx={{}}>{data?.synopsis}</StyleDesc>
      </DescContainer>
      <img src={data?.images?.webp?.image_url} />
    </BannerContainer>
  );
}

interface IBanner {
  data: [];
}

export default function Banner({ data }: IBanner) {
  return (
    <Carousel
      autoPlay={false}
      sx={{
        height: "500px",
      }}
    >
      {data?.map((item, i) => {
        return <BannerItems key={`banner-item-${i}`} data={item} />;
      })}
    </Carousel>
  );
}
