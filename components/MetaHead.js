import React from "react";
import Head from "next/head";
import config from "jsconfig.json";
import { useRouter } from "next/router";

function MetaHead() {
  let og_image = config.og_main;
  const router = useRouter();
  const og_url = `${config.web_url}${router.query.title ? `/dashboard/${router.query.title}` : ""}`;

  if (router.query.title === "น้ำท่วมถนน") og_image = config.og_flood;
  if (router.query.title === "พื้นที่สีเขียว") og_image = config.og_green;
  if (router.query.title === "มลพิษในคลอง") og_image = config.og_water;
  if (router.query.title === "ขยะมูลฝอย") og_image = config.og_waste;
  if (router.query.title === "ฝุ่นควันเกินมาตรฐาน") og_image = config.og_air;
  if (router.query.slide === 15) og_image = config.og_overall;
  // if (router.query.slide == 8) og_image = config.og_responsibility;

  return (
    <Head>
      <title>{config.title}</title>
      <meta name="description" content={config.description}></meta>
      {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
      <link rel="icon" type="image/x-icon" href="/bkk-followup/favicon.ico" />
      <meta property="og:title" content={config.title} />

      <meta property="og:description" content={config.description} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={config.web_url + og_image} />

      <meta property="og:url" content={og_url} />

      <meta name="twitter:title" content={config.title} />

      <meta name="twitter:description" content={config.description} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:image:src" content={config.web_url + og_image} />

      <meta property="twitter:url" content={og_url} />
      <link rel="stylesheet" href="https://design-systems.wevis.info/typography.css" />
    </Head>
  );
}

export default MetaHead;
