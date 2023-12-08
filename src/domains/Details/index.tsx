import Footer from "@/commons/components/Footer";
import Header from "@/commons/components/Header";
import Layout from "@/commons/containers/Layouts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useBoundCategoryStore } from "./store";

export default function Details() {
  const { isReady, query, pathname } = useRouter();
  const { dataMangaByID, dataAnimeByID } = useBoundCategoryStore((state) => ({
    dataMangaByID: state.dataMangaByID,
    dataAnimeByID: state.dataAnimeByID,
  }));
  const { getMangaByID, getAnimeByID } = useBoundCategoryStore((action) => ({
    getMangaByID: action.getMangaByID,
    getAnimeByID: action.getAnimeByID,
  }));

  useEffect(() => {
    if (isReady && query?.category !== "" && query?.id !== "") {
      if (query?.category === "manga") getMangaByID(query?.id);
      if (query?.category === "anime") getAnimeByID(query?.id);
    }
  }, [isReady, query]);

  return (
    <Layout header={<Header isActiveID={2} />} footer={<Footer />}>
      <h1>asdasd</h1>
    </Layout>
  );
}
