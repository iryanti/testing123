import { IProduct } from "@/@type/home";
import ProductCard from "@/commons/components/ProductCard";
import ContentSlider from "@/commons/containers/ContentSlider";
import { Stack, styled } from "@mui/material";

const Container = styled(Stack)({});

interface IContentSection {
  title: string;
  data: IProduct[];
  category: "anime" | "manga";
}

export default function ContentSection({
  title,
  data,
  category = "anime",
}: IContentSection) {
  return (
    <Container direction={"column"} gap={1}>
      <h3>{title}</h3>
      <ContentSlider>
        {data?.map((item, i) => {
          return (
            <ProductCard
              key={`content-item-${i}`}
              id={item?.mal_id}
              image={
                item?.images?.webp?.image_url
                  ? item?.images?.webp?.image_url
                  : ""
              }
              title={item?.title}
              desc={item?.synopsis}
              category={category}
              score={item?.score}
            />
          );
        })}
      </ContentSlider>
    </Container>
  );
}
