import React from "react";
import children from "assets/images/children.gif";
import p_icon from "assets/images/p_icon.svg";
import { isMobileOnly, isMobile } from "react-device-detect";
import landing_data from "public/data/landing.json";

export default function BudgetPageOne(props) {
  const { active_index } = props;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center pointer-events-none budget-page-one bg-green-default"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {!isMobile || active_index === 1 ? (
            <div className="left">
              <h2 className="hidden leading-tight d2 lg:block">
                <span className="d2 text-white-default">
                  สิ้นปี {landing_data.latestYear.year}
                  <br />
                  กรุงเทพมีประชากร
                </span>
                <br />
                {landing_data.latestYear.population.toLocaleString()} คน
              </h2>

              <h3 className="block leading-tight text-center d3 lg:hidden">
                <span className="d3 text-white-default">
                  สิ้นปี 2566
                  <br />
                  กรุงเทพมีประชากร
                </span>
                <br />
                {landing_data.latestYear.population.toLocaleString()} คน
              </h3>

              <h2 className="hidden leading-tight d2 mt-14 lg:block">
                <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
                <br />
                {(landing_data.latestYear.budget / 1000000).toLocaleString(
                  "en-US",
                  {
                    maximumFractionDigits: 0,
                  }
                )}{" "}
                ล้านบาท
              </h2>

              <h3 className="block mt-8 leading-tight text-center d3 lg:hidden">
                <span className="d2 text-white-default">ใช้งบประมาณมากถึง</span>
                <br />
                {(landing_data.latestYear.budget / 1000000).toLocaleString(
                  "en-US",
                  {
                    maximumFractionDigits: 0,
                  }
                )}{" "}
                ล้านบาท
              </h3>

              <h3 className="mt-8 text-center h2 lg:text-left">
                แต่เราก็ยังเห็นหลายปัญหากวนใจ ที่เกิดขึ้นซ้ำๆ และยังไม่ถูกแก้
              </h3>
            </div>
          ) : null}

          {!isMobile || active_index > 1 ? (
            <div className="relative right">
              <img
                src={children}
                alt={children}
                className="absolute w-3/4 transform children-image lg:w-2/4 top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4"
              />

              {(!isMobileOnly && active_index > 1) ||
              (isMobileOnly && active_index > 2) ? (
                <div className="relative flex flex-col items-center justify-center h-full text-center lg:flex-row">
                  <div
                    className="p-5 rounded-md shadow-xl bg-opacity-90 content bg-white-default"
                    style={{
                      minWidth: isMobile ? "100%" : "387px",
                    }}
                  >
                    <h5 className="text-lg">
                      ในปี {landing_data.latestYear.year} กทม.
                      ได้รับเงินดูแลเฉลี่ย
                    </h5>

                    <div className="px-4 py-2 my-2 rounded-md budget bg-green-light">
                      <h4 className="d4">
                        {landing_data.latestYear.budgetPerCapita.toLocaleString(
                          "en-US",
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}{" "}
                        บาท / คน / ปี
                      </h4>
                    </div>
                  </div>

                  {/* <a
                    href="https://elect.in.th/bkk-budget/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inset-x-0 bottom-0 flex items-center justify-center w-full p-2 mx-auto mt-3 rounded-md shadow-xl pointer-events-auto lg:absolute content bg-white-default md:w-max md:mt-10"
                  >
                    <img width={30} src={p_icon} alt={p_icon} />

                    <h3 className="ml-2">อ่านบทความเกี่ยวกับงบกทม.</h3>
                  </a> */}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
