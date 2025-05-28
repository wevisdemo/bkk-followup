import React, { useState } from "react";
import _ from "lodash";
import numeral from "numeral";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";
import landing_data from "public/data/landing.json";
import {
  formatTop3WithOthers,
  matchingBGColor,
  formatTop3WithOthersGroupByYear,
} from "components/Dashboard/util/formatTop3WithOthers";

export default function BudgetPageFour(props) {
  const { active_index } = props;
  const [hover_legend, setHoverLegend] = useState(null);

  const chart_legends = formatTop3WithOthers(
    landing_data.yearlyBudgetSummaries
  );
  let chart_data = formatTop3WithOthersGroupByYear(
    landing_data.yearlyBudgetSummaries
  );

  const chartLegend = chart_legends.map((d) => d.title);

  chart_data.map((yearData) => {
    const sortedValues = yearData.values.sort(
      (a, b) => chartLegend.indexOf(b.title) - chartLegend.indexOf(a.title)
    );
    return {
      ...yearData,
      values: sortedValues,
    };
  });

  chart_data = _.map(chart_data, (d) => {
    const sum = _.sumBy(d.values, "value");
    return {
      year: d.year,
      values: _.map(d.values, (v) => {
        return {
          ...v,
          percent: (v.value * 100) / sum,
        };
      }),
    };
  });

  const getColor = (title) => {
    const legend = chart_legends.find((l) => l.title === title);
    return _.get(legend, "color");
  };

  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none budget-page-four bg-black-default text-white-default"
      style={{ top: "60px" }}
    >
      <div className="container h-full py-5 mx-auto md:py-14">
        <div className="grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="left lg:w-4/5">
            <h2 className="text-left d2 md:text-center lg:text-left">
              3 ประเด็นที่งบ กทม. ถูกใชัมากที่สุด
            </h2>

            {!isMobile || active_index === 7 ? (
              <ul className="mt-6 legends lg:mt-9">
                {chart_legends.map((l) => (
                  <li
                    key={l.title}
                    className="flex items-center py-4 lg:py-5 px-4 lg:px-9 mb-0.5 rounded-md cursor-pointer pointer-events-none lg:pointer-events-auto"
                    style={{
                      background: matchingBGColor(l.title),
                      color: l.title === "อื่นๆ" ? "white" : "black",
                      border:
                        l.title === "อื่นๆ"
                          ? "2px solid rgba(255, 255, 255, 0.9)"
                          : "none",
                    }}
                    onMouseOver={() => setHoverLegend(l.title)}
                    onMouseLeave={() => setHoverLegend(null)}
                  >
                    <div className="flex-1 title d5">{l.title}</div>

                    <h3 className="flex-none ml-3 text-right value">
                      {l.value} ล้านบาท
                      <br />({l.percent}%)
                    </h3>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {!isMobileOnly || active_index === 8 ? (
            <>
              <div className="flex items-center right">
                <div
                  className="grid w-full gap-2 text-center chart lg:gap-3 lg:w-auto"
                  style={{
                    gridTemplateColumns: `repeat(
                    ${landing_data.yearCount},
                    minmax(0, 1fr)
                  )`,
                  }}
                >
                  {chart_data.map((d) => (
                    <div key={d.year} className="bar">
                      <div
                        className="flex flex-col box-wrap"
                        style={{
                          height: isTablet
                            ? "calc(100vh - 500px)"
                            : isMobileOnly
                            ? "calc(100vh - 455px)"
                            : "560px",
                        }}
                      >
                        {d.values.map((v, index) => (
                          <div
                            key={index}
                            className={`box rounded-md mb-0.5 pt-1 ${
                              hover_legend === v.title ? "is-hover" : ""
                            }`}
                            style={{
                              width: isMobile ? "100%" : "35px",
                              height: `${v.percent}%`,
                              border:
                                v.title === "อื่นๆ"
                                  ? "2px solid rgba(255, 255, 255, 0.9)"
                                  : "none",
                              background: matchingBGColor(v.title),
                            }}
                          >
                            <h5 className="text-xs value text-black-default">
                              {numeral(v.percent).format("0.00")}%
                            </h5>
                          </div>
                        ))}
                      </div>

                      <div className="year d5">
                        '{d.year.toString().split("25")[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {isMobile ? (
                <ul className="legends md:mx-auto">
                  {chart_legends.map((l) => (
                    <li key={l.title} className="flex items-center mt-1 d5">
                      <div
                        className="flex-none w-5 h-5 mr-3 rounded"
                        style={{
                          background: matchingBGColor(l.title),
                          border:
                            l.title === "อื่นๆ"
                              ? "2px solid rgba(255, 255, 255, 0.9)"
                              : "none",
                        }}
                      ></div>
                      {l.title}
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
