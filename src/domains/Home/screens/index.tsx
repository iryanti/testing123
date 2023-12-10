import Header from "@/commons/components/Header";

import SimpleCard from "@/commons/components/SimpleCard";
import Layout from "@/commons/containers/Layouts";
import { Pagination, styled } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Banner from "../containers/Banner";
import ContentSection from "../containers/ContentSection";
import { useBoundHomeStore } from "../stores";

const StyledContent = styled(Stack)({
  maxWidth: "85%",
  margin: "0px auto",
});

const RecomendationSection = styled(Stack)({});
const RecomendationContent = styled("div")({
  width: "90%",
  position: "relative",
  display: "flex",
  flexFlow: "wrap",
  gap: 32,
  justifyContent: "space-between",
});

export default function Home() {
  const { isReady } = useRouter();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const { topAnime, dataBanner, topManga, characters } = useBoundHomeStore(
    (state) => ({
      topAnime: state.topAnime,
      dataBanner: state.dataBanner,
      topManga: state.topManga,
      characters: state.characters,
    })
  );

  const { getTopAnime, getBanner, getTopManga, getCharacters } =
    useBoundHomeStore((action) => ({
      getBanner: action.getBanner,
      getTopAnime: action.getTopAnime,
      getTopManga: action.getTopManga,
      getCharacters: action.getCharacters,
    }));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    getCharacters(limit, value);
  };

  useEffect(() => {
    if (isReady) {
      getBanner(5);
      getTopAnime();
      getTopManga();
      getCharacters(limit, page);
    }
  }, [isReady]);

  return (
    <Layout header={<Header isActiveID={1} />}>
      <Banner data={dataBanner} />
      <StyledContent direction={"column"} gap={2}>
        {topAnime?.data?.length !== 0 && (
          <ContentSection
            title={`Top Anime`}
            data={topAnime?.data}
            category="anime"
          />
        )}
        {topManga?.data?.length !== 0 && (
          <ContentSection
            title={`Top Manga`}
            data={topManga?.data}
            category="manga"
          />
        )}
        {characters?.data?.length !== 0 && (
          <RecomendationSection direction={"column"} spacing={2}>
            <h3>Character</h3>
            <RecomendationContent>
              {characters?.data?.map((item, _index) => {
                return (
                  <SimpleCard
                    key={`profile-item-${item?.mal_id}`}
                    image={item?.images?.webp?.image_url}
                    follower={item?.favorites}
                    id={item?.mal_id}
                    name={item?.name}
                  />
                );
              })}
            </RecomendationContent>
            <Pagination
              count={limit}
              page={characters?.pagination?.current_page}
              onChange={handleChange}
            />
          </RecomendationSection>
        )}
      </StyledContent>
    </Layout>
  );
}
