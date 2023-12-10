import { IProduct } from "@/@type/home";
import Header from "@/commons/components/Header";
import ProductCard from "@/commons/components/ProductCard";
import Layout from "@/commons/containers/Layouts";
import isEmpty from "@/helpers/is-empty";
import { getLocalStorage } from "@/helpers/local-storage";
import { Box, Stack, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Container = styled(Stack)({
  margin: "75px 32px",
});

const StyledContent = styled(Box)({
  display: "flex",
  justifyContent: `flex-start`,
  alignItems: `center`,
  flexFlow: "wrap",
  gap: "16px",
});

export default function Favorite() {
  const { isReady } = useRouter();
  const [data, setData] = useState<IProduct[]>();

  useEffect(() => {
    if (isReady) {
      if (!isEmpty(getLocalStorage("favorite"))) {
        let dataLocal = getLocalStorage("favorite");
        setData(dataLocal);
      }
    }
  }, [isReady]);

  return (
    <Layout
      header={
        <Header
          onBack={() => {
            window.history.back();
          }}
          isActiveID={2}
        />
      }
    >
      <Container direction={`column`} spacing={2} gap={8}>
        <h1>Favorite</h1>
        <StyledContent>
          {data?.map((item, i) => {
            return <ProductCard key={`favorite-item-${i}`} data={item} />;
          })}
        </StyledContent>
      </Container>
    </Layout>
  );
}
