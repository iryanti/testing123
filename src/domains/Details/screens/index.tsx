import { IProduct } from "@/@type/home";
import Header from "@/commons/components/Header";
import SimpleCard from "@/commons/components/SimpleCard";
import ContentSlider from "@/commons/containers/ContentSlider";
import Layout from "@/commons/containers/Layouts";
import { useBoundRecomenStore } from "@/commons/stores";
import { redirect } from "@/helpers/redirect";
import { Rating, Stack, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useBoundCategoryStore } from "../stores";

const Container = styled(Stack)({
  margin: "75px 32px",
});

const StyledTitlePage = styled(Typography)({
  fontWeight: 700,
  fontSize: 32,
});

const StyledSubTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: 24,
});

const StyledImageDetail = styled(Stack)({
  margin: "auto",
});

const StyledDesc = styled(Typography)({});
const StyledImg = styled(`div`)({
  maxWidth: "250px",
});

const StyledRating = styled(Stack)({});

export default function Details() {
  const { isReady, query } = useRouter();
  const [dataDetails, setDataDetails] = useState<IProduct>();
  const [category, setCategory] = useState("");

  const { dataMangaByID, dataAnimeByID } = useBoundCategoryStore((state) => ({
    dataMangaByID: state.dataMangaByID,
    dataAnimeByID: state.dataAnimeByID,
  }));
  const { getMangaByID, getAnimeByID } = useBoundCategoryStore((action) => ({
    getMangaByID: action.getMangaByID,
    getAnimeByID: action.getAnimeByID,
  }));

  const { dataRecomendation } = useBoundRecomenStore((state) => ({
    dataRecomendation: state.dataRecomendation,
  }));

  const { getRecomendation } = useBoundRecomenStore((action) => ({
    getRecomendation: action.getRecomendation,
  }));

  const handleRedirectPage = (id: number) => {
    if (category === "anime") redirect(`/details/anime/${id}`);
    if (category === "manga") redirect(`/details/manga/${id}`);
  };

  useEffect(() => {
    if (isReady && query?.category !== "" && query?.id !== "") {
      if (query?.category === "manga") getMangaByID(query?.id);
      if (query?.category === "anime") getAnimeByID(query?.id);
      setCategory("anime");
    }
  }, [isReady, query]);

  useEffect(() => {
    if (isReady && dataMangaByID !== undefined) {
      setDataDetails(dataMangaByID);
    }
  }, [isReady, dataMangaByID]);

  useEffect(() => {
    if (isReady && category !== "") {
      getRecomendation(category);
    }
  }, [isReady, category]);

  useEffect(() => {
    if (isReady && dataAnimeByID !== undefined) {
      setDataDetails(dataAnimeByID);
    }
  }, [isReady, dataAnimeByID]);

  return (
    <Layout
      header={
        <Header
          onBack={() => {
            window.history.back();
          }}
        />
      }
    >
      <Container direction={`column`} spacing={2} gap={8}>
        <Stack direction={`row`} spacing={4}>
          <StyledImageDetail direction={`column`}>
            <StyledImg>
              <img src={dataDetails?.images?.webp?.image_url} />
            </StyledImg>
          </StyledImageDetail>
          <Stack direction={"column"} spacing={2}>
            <StyledTitlePage>{dataDetails?.title}</StyledTitlePage>
            <Stack direction={"column"} gap={2}>
              <StyledRating direction={`row`} gap={2}>
                <Rating
                  name="size-medium"
                  value={dataDetails?.score ? dataDetails?.score / 2 : 0}
                  precision={0.5}
                  readOnly
                />
                <Typography>
                  ( {dataDetails?.score} / {dataDetails?.scored_by} )
                </Typography>
              </StyledRating>
              <div>
                <StyledSubTitle>Details</StyledSubTitle>
                <Typography>Year : {dataDetails?.year}</Typography>
              </div>
            </Stack>
            <div>
              <StyledSubTitle>Synopsis</StyledSubTitle>
              <StyledDesc>{dataDetails?.synopsis}</StyledDesc>
            </div>
          </Stack>
        </Stack>
        <Stack direction={"column"} gap={2}>
          {dataDetails?.trailer && dataDetails?.trailer !== null && (
            <Stack direction={"column"} gap={2}>
              <StyledSubTitle>Trailer</StyledSubTitle>
              <iframe
                width="420"
                height="345"
                src={dataDetails?.trailer?.embed_url}
              />
            </Stack>
          )}
          {dataRecomendation?.data?.length !== 0 && (
            <Stack direction={`column`} gap={2}>
              <StyledSubTitle>Recomendation {category}</StyledSubTitle>
              <ContentSlider itemsPerSlideDesk={8}>
                {dataRecomendation?.data?.map((item, i) => {
                  return (
                    <SimpleCard
                      key={`item-recomendation-${i}`}
                      id={item?.entry[0]?.mal_id}
                      name={item?.entry[0]?.title}
                      image={item?.entry[0]?.images?.webp?.image_url}
                      handleRedirect={() => {
                        handleRedirectPage(item?.entry[0]?.mal_id);
                      }}
                      sx={{
                        cursor: "pointer",
                        width: 150,
                        height: 200,
                        mb: "16px",
                      }}
                      isProfile={false}
                    />
                  );
                })}
              </ContentSlider>
            </Stack>
          )}
        </Stack>
      </Container>
    </Layout>
  );
}
