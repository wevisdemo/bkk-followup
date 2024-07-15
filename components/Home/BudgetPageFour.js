import React, { useState } from "react";
import _ from "lodash";
import numeral from "numeral";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export default function BudgetPageFour(props) {
  const { active_index } = props;
  const [hover_legend, setHoverLegend] = useState(null);
  const chart_legends = [
    {
      title: "การบริหารจัดการและบริหารราชการ",
      color: "#00C853",
      value: "244,573",
      percent: 29.94,
    },
    {
      title: "เมืองและการพัฒนาเมือง",
      color: "#9FB2C3",
      value: "152,450",
      percent: 18.66,
    },
    {
      title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
      color: "#CCF4DD",
      value: "129,884",
      percent: 15.9,
    },
    {
      title: "อื่นๆ",
      color: "black",
      value: "289,720",
      percent: 35.5,
    },
  ];
  let chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "อื่นๆ",
          value: 27639.7,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 9407.8,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 11745.3,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 21207.1,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "อื่นๆ",
          value: 27209.4,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13788.7,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 11511.8,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 17390.2,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "อื่นๆ",
          value: 24032.6,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 14743,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 11604.9,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 19619.5,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "อื่นๆ",
          value: 25140.9,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13395.9,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 10721.1,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 15742,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "อื่นๆ",
          value: 26784.1,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13089.5,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 12415.1,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 17711.2,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "อื่นๆ",
          value: 24571.0,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 11649.4,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 14743.4,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 26749.2,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "อื่นๆ",
          value: 23659.7,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13029.3,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 15934.1,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 25877,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "อื่นๆ",
          value: 23509.0,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 12978.6,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 15774.4,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 27737.9,
        },
      ],
    },
    {
      year: 2563,
      values: [
        {
          title: "อื่นๆ",
          value: 27109.9,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13604.42633,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 16301.21258,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 25984.411253,
        },
      ],
    },
    {
      year: 2564,
      values: [
        {
          title: "อื่นๆ",
          value: 24932.0,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 13647.95077,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 12543.057815,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 24377.012645,
        },
      ],
    },
    {
      year: 2565,
      values: [
        {
          title: "อื่นๆ",
          value: 20963.9,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 190.431425,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 10212.1922,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 7390.216491,
        },
      ],
    },
    {
      year: 2566,
      values: [
        {
          title: "อื่นๆ",
          value: 14168.2,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 359.80696,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 8943.759502,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 14788.125785,
        },
      ],
    },
  ];
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
                      background: l.color,
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
                <div className="grid w-full grid-cols-12 gap-2 text-center chart lg:gap-3 lg:w-auto">
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
                              background: getColor(v.title),
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
                          background: l.color,
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
