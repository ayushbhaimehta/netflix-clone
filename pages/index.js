import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

import { getPopularVideos, getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("Avengers");
  const productivityVideos = await getVideos("takeuforward");

  const travelVideos = await getVideos("Europe Travel");
  const popularVideos = await getVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos }, // will be passed to the page component as props
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos
}) {
  console.log({ disneyVideos });
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="ankita@ank.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Avengers" videos={disneyVideos} size="small" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Coding"
          videos={productivityVideos}
          size="small"
        />
        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div>
    </div>
  );
}