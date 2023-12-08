import Footer from "@/commons/components/Footer";
import Header from "@/commons/components/Header";

import ProductCard from "@/commons/components/ProductCard";
import ContentSlider from "@/commons/containers/ContentSlider";
import Layout from "@/commons/containers/Layouts";
import { styled } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Banner from "../containers/Banner";
import ContentSection from "../containers/ContentSection";
import { useBoundHomeStore } from "../store";

const StyledContent = styled(Stack)({
  maxWidth: "85%",
  margin: "0px auto",
});

export default function Home() {
  const { isReady } = useRouter();

  const {
    topAnime,
    dataBanner,
    topManga,
    topCharacters,
    topPeople,
    topReviews,
  } = useBoundHomeStore((state) => ({
    topAnime: state.topAnime,
    dataBanner: state.dataBanner,
    topManga: state.topManga,
    topCharacters: state.topCharacters,
    topPeople: state.topPeople,
    topReviews: state.topReviews,
  }));

  const {
    getTopAnime,
    getBanner,
    getTopManga,
    getTopPeople,
    getTopCharacters,
    getTopReviews,
  } = useBoundHomeStore((action) => ({
    getBanner: action.getBanner,
    getTopAnime: action.getTopAnime,
    getTopManga: action.getTopManga,
    getTopPeople: action.getTopPeople,
    getTopCharacters: action.getTopCharacters,
    getTopReviews: action.getTopReviews,
  }));

  useEffect(() => {
    if (isReady) {
      getBanner(5);
      getTopAnime();
      getTopManga();
    }
  }, [isReady]);

  return (
    <Layout header={<Header isActiveID={1} />} footer={<Footer />}>
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
        {/* {topPeople?.data?.length !== 0 && (
          <ContentSection title={`Top People`} data={topPeople?.data} />
        )} */}
      </StyledContent>
    </Layout>
  );
}
