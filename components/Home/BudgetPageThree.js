import React, { useState, useEffect } from "react";
import numeral from "numeral";
import _ from "lodash";
import { isMobileOnly, isMobile, isTablet } from "react-device-detect";
import landing_data from "public/data/landing.json";
export default function BudgetPageThree(props) {
  const { active_index } = props;
  const [show_legend, setShowLegend] = useState(false);
  const [hover_legend, setHoverLegend] = useState({});
  const chart_legends = [
    {
      title: "เศรษฐกิจและการพาณิชย์",

      color: "#B22E56",
    },
    {
      title: "การศึกษา",
      color: "#F4B8CA",
    },
    {
      title: "สาธารณสุข",
      color: "#825BF0",
    },
    {
      title: "พัฒนาสังคมและชุมชนเมือง",
      color: "#DF3A0E",
    },
    {
      title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
      color: "#FF9E0D",
    },
    {
      title: "เมืองและการพัฒนาเมือง",
      color: "#9FB2C3",
    },
    {
      title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
      color: "#CCF4DD",
    },
    {
      title: "การบริหารจัดการและบริหารราชการ",
      color: "#00C853",
    },
  ];
  let chart_data = landing_data.yearlyBudgetSummaries;
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

  useEffect(() => {
    setTimeout(() => {
      setShowLegend(true);
    }, 1200);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-10 pointer-events-none budget-page-three bg-black-default text-white-default"
      style={{ top: "60px" }}
    >
      <div className="container h-full py-5 mx-auto">
        <div className="grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="text-left left lg:w-4/5 md:text-center lg:text-left">
            <h3 className="d3 mt-3">
              {landing_data.yearCount} ปีที่ผ่านมา กทม. ใช้งบประมาณไป
            </h3>
            <h2 className="d2">
              {landing_data.totalBudget.toLocaleString()} บาท
            </h2>
            <h4 className="hidden mt-6 d4 md:block">
              งบประมาณ กทม. ใช้ไปกับอะไรบ้าง?
            </h4>
            {(isMobileOnly && active_index === 5) ||
            (!isMobile && show_legend) ? (
              <>
                <h5 className="block d5 mt-7 lg:hidden">
                  งบประมาณ กทม. ใช้ไปกับอะไรบ้าง?
                </h5>

                <ul className="legends mt-7 md:mt-9">
                  {chart_legends.map((l) => (
                    <li key={l.title} className="flex items-center mt-1 d5">
                      <div
                        className="flex-none w-5 h-5 mr-3 rounded"
                        style={{ background: l.color }}
                      ></div>
                      {l.title}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className=" mt-2 p3 leading-3">
              หมายเหตุ: ตั้งแต่ปีงบประมาณ 2565 เป็นต้นไป
              มีการปรับชื่อด้านและแผนงานบางข้อ และเพิ่มจาก 7 ด้าน เป็น 8 ด้าน
              ข้อมูลที่แสดงในหน้านี้ <b>จะยึดตามชื่อแผนงานใหม่</b>
              และจัดกลุ่มแผนงานเก่าเข้ากับแผนงานใหม่
              <b>ตามความสอดคล้องกันของแผนงานย่อย</b>
            </div>
          </div>

          {!isMobileOnly || active_index === 6 ? (
            <div className="flex items-center right">
              <div
                className="grid w-full  gap-2 text-center chart lg:gap-2 lg:w-auto"
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
                      {d.values.map((v) => (
                        <div
                          key={v.title}
                          className="box rounded-md mb-0.5 relative pointer-events-auto cursor-pointer"
                          style={{
                            width: isMobile ? "100%" : "35px",
                            height: `${v.percent}%`,
                            background: getColor(v.title),
                          }}
                          onMouseOver={() =>
                            setHoverLegend({ year: d.year, ...v })
                          }
                          onMouseLeave={() => setHoverLegend({})}
                        >
                          {isMobileOnly ? null : (
                            <div
                              className="absolute z-10 px-4 py-2 mx-auto text-xs transform rounded-md shadow-md pointer-events-none tooltip bg-white-default -top-10 left-2/4 -translate-x-2/4 text-black-default"
                              style={{ minWidth: "176px" }}
                            >
                              ปี {d.year}
                              <br />
                              <b>{v.title}</b>
                              <br />
                              {(v.value / 1e7).toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}{" "}
                              ล้านบาท ({numeral(v.percent).format("0.00")}
                              %)
                            </div>
                          )}
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
          ) : null}

          {isMobileOnly ? (
            <div
              className="max-w-full p-2 mx-auto text-xs text-center rounded-md shadow-md pointer-events-none tooltip bg-white-default text-black-default w-max"
              style={{
                minWidth: "176px",
                height: "fit-content",
                opacity: hover_legend.title ? 1 : 0,
              }}
            >
              ปี {hover_legend.year}
              <br />
              <b>{hover_legend.title}</b>
              <br />
              {numeral(hover_legend.value / 1e7).format("0.00")} ล้านบาท (
              {numeral(hover_legend.percent).format("0.00")}
              %)
            </div>
          ) : null}

          {isTablet ? (
            <div className="grid grid-cols-2 gap-3">
              <ul className="legends">
                {chart_legends
                  .filter((l, index) => index < 4)
                  .map((l) => (
                    <li key={l.title} className="flex items-center mt-1 d5">
                      <div
                        className="flex-none w-5 h-5 mr-3 rounded"
                        style={{ background: l.color }}
                      ></div>
                      {l.title}
                    </li>
                  ))}
              </ul>

              <ul className="legends">
                {chart_legends
                  .filter((l, index) => index > 3)
                  .map((l) => (
                    <li key={l.title} className="flex items-center mt-1 d5">
                      <div
                        className="flex-none w-5 h-5 mr-3 rounded"
                        style={{ background: l.color }}
                      ></div>
                      {l.title}
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
