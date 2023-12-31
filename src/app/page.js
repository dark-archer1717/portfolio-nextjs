"use client";

import { useState } from "react";
import Script from "next/script";
import PageBox from "@/components/common/PageBox";
import NavBar from "@/components/navbar/NavBar";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
// import HomeSection3 from "@/components/home/Section3";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";

import Head from "next/head";

export default function Home() {
  const [current, setCurrent] = useState("");

  return (
    <PageBox>
      <Head>
        <title>Kazi Efazul Karim</title>
        <meta name="description" content="Fullstack software engineer based in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar current={current} />
      <HomeSection1 current={current} setCurrent={setCurrent} />
      <HomeSection2 current={current} setCurrent={setCurrent} />
      {/* <HomeSection3 current={current} setCurrent={setCurrent} /> */}
      <HomeSection4 current={current} setCurrent={setCurrent} />
      <HomeSection5 current={current} setCurrent={setCurrent} />
      <HomeSection6 current={current} setCurrent={setCurrent} />
    </PageBox>
  );
}
