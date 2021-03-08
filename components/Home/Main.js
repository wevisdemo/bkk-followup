import React from "react";
import fb_share from "assets/images/fb_share.svg";
import twitter_share from "assets/images/twitter_share.svg";
import line_share from "assets/images/line_share.svg";
import arrow_right_white from "assets/images/arrow_right_white.svg";
import arrow_down_black from "assets/images/arrow_down_black.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";
import config from "jsconfig.json";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export default function Main(props) {
  const { swiper_ref } = props;

  return (
    <div className="flex items-center h-full pb-16 main-page bg-white-default">
      <div className="container mx-auto">
        <div className="hidden grid-cols-1 gap-5 text-center lg:grid-cols-2 md:grid lg:text-left">
          <h1 className="leading-tight d1">
            BANGKOK
            <br />
            <span className="text-green-default" style={{fontFamily: 'TheMATTER'}}>FOLLOW-UP</span>
          </h1>

          <div className="right">
            <h3 className="leading-tight d3">
              สำรวจย้อนหลัง 8 ปีกับ
              <br />
              ปัญหาที่กวนใจชาวกทม.
            </h3>

            <div className="items-center hidden mt-4 lg:flex social-wrap">
              <h4 className="d4">Share:</h4>

              <FacebookShareButton
                url={config.web_url}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={fb_share} alt={fb_share} />
              </FacebookShareButton>

              <TwitterShareButton
                url={config.web_url}
                className="ml-4 cursor-pointer social"
              >
                <img
                  width={40}
                  height={40}
                  src={twitter_share}
                  alt={twitter_share}
                />
              </TwitterShareButton>

              <LineShareButton
                url={config.web_url}
                className="ml-4 cursor-pointer social"
              >
                <img width={40} height={40} src={line_share} alt={line_share} />
              </LineShareButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1 mt-0 lg:grid-cols-2 lg:gap-3 md:mt-10 2xl:mt-16">
          <div
            className="flex items-center justify-between p-3 rounded-md cursor-pointer explore-map bg-black-default lg:p-10 2xl:p-14"
            onClick={() =>
              swiper_ref.slideTo(isMobileOnly ? 18 : isTablet ? 15 : 14)
            }
          >
            <div className="hidden text-white-default lg:block">
              <h3 className="d3">EXPLORE MAP</h3>

              <h4 className="d4">สำรวจแผนที่ตามประเด็น ที่กวนใจชาว กทม.</h4>
            </div>

            <div className="block text-white-default lg:hidden">
              <h5 className="d5">EXPLORE MAP</h5>

              <h5 className="d5">สำรวจแผนที่ตามประเด็น</h5>
            </div>

            <img
              src={arrow_right_white}
              alt={arrow_right_white}
              className="w-16 lg:w-18 2xl:w-24"
            />
          </div>

          <div className="right">
            <div
              className="flex items-center justify-between p-3 rounded-md cursor-pointer lg:p-5 budget bg-green-default"
              onClick={() => swiper_ref.slideTo(1)}
            >
              <h5 className="d5 text-white-default">
                สำรวจดูงบประมาณกทม. ย้อนหลัง 8 ปี
              </h5>

              <img
                src={arrow_right_white}
                alt={arrow_right_white}
                className="w-16 lg:w-18 2xl:w-24"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 mt-1 rounded-md cursor-pointer lg:p-5 lg:mt-3 budget bg-blue-default"
              onClick={() => swiper_ref.slideTo(isMobile ? 9 : 8)}
            >
              <h5 className="d5 text-white-default">กทม. มีหน้าที่ทำอะไร ?</h5>

              <img
                src={arrow_right_white}
                alt={arrow_right_white}
                className="w-16 lg:w-18 2xl:w-24"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 mt-1 rounded-md cursor-pointer lg:p-5 lg:mt-3 budget bg-pink-default"
              onClick={() => swiper_ref.slideTo(isMobileOnly ? 15 : 13)}
            >
              <h5 className="d5 text-white-default">
                ชาวกทม. มีส่วนร่วม อย่างไรได้บ้าง
              </h5>

              <img
                src={arrow_right_white}
                alt={arrow_right_white}
                className="w-16 lg:w-18 2xl:w-24"
              />
            </div>
          </div>
        </div>

        <div className="items-center justify-center hidden mt-10 md:flex lg:hidden social-wrap">
          <h4 className="d4">Share:</h4>

          <FacebookShareButton
            url={config.web_url}
            className="ml-4 cursor-pointer social"
          >
            <img width={40} height={40} src={fb_share} alt={fb_share} />
          </FacebookShareButton>

          <TwitterShareButton
            url={config.web_url}
            className="ml-4 cursor-pointer social"
          >
            <img
              width={40}
              height={40}
              src={twitter_share}
              alt={twitter_share}
            />
          </TwitterShareButton>

          <LineShareButton
            url={config.web_url}
            className="ml-4 cursor-pointer social"
          >
            <img width={40} height={40} src={line_share} alt={line_share} />
          </LineShareButton>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-2 lg:p-3 scroll-down bg-green-default d5">
          Scroll Down
          <img src={arrow_down_black} alt={arrow_down_black} className="w-10" />
        </div>
      </div>
    </div>
  );
}
