import React, { useState, useEffect } from "react";
import intro_bg from "assets/images/intro-bg.png";
import fb_share from "assets/images/fb_share.svg";
import twitter_share from "assets/images/twitter_share.svg";
import line_share from "assets/images/line_share.svg";
import { FacebookShareButton, TwitterShareButton, LineShareButton } from "react-share";
import config from "jsconfig.json";

export default function Intro() {
  const [hide_intro, hideIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      hideIntro(true);
    }, 3000);
  }, []);

  return (
    <div
      className={`intro-page fixed z-30 inset-0 bg-black-default flex items-center ${hide_intro ? "hide-intro" : ""}`}
      onClick={() => hideIntro(true)}
    >
      <img className="fixed inset-0 object-cover h-full mx-auto opacity-60" src={intro_bg} alt={intro_bg} />

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row text-green-default lg:text-left">
          <h1 className="mb-5 mr-0 leading-tight d1 lg:mr-20 lg:mb-0">
            BKK
            <br />
            <span className=" text-white-default" style={{ fontFamily: "KondolarThai" }}>
              Follow Up
            </span>
          </h1>

          <div className="right text-white-default">
            <h3 className="leading-tight d3">
              สำรวจย้อนหลัง 10 ปีกับ
              <br />
              ปัญหาที่กวนใจชาวกทม.
            </h3>

            <div className="flex items-center justify-center mt-8 space-x-3 lg:justify-start lg:mt-4 social-wrap opacity-80">
              <h4 className="p1">Share</h4>

              <FacebookShareButton url={config.web_url} className="cursor-pointer social">
                <img width={30} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton url={config.web_url} className="cursor-pointer social">
                <img width={30} src={twitter_share} alt={twitter_share} />
              </TwitterShareButton>

              <LineShareButton url={config.web_url} className="cursor-pointer social">
                <img width={30} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
