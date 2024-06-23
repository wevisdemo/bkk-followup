import React, { useState, useEffect } from "react";
import numeral from "numeral";
import _ from "lodash";
import { isMobileOnly, isMobile, isTablet } from "react-device-detect";

export default function BudgetPageThree(props) {
  const { active_index } = props;
  const [show_legend, setShowLegend] = useState(false);
  const [hover_legend, setHoverLegend] = useState({});
  const chart_legends = [
    {
      title: "การศึกษา",
      color: "#F4B8CA",
    },
    {
      title: "สาธารณสุข",
      color: "#B22E56",
    },
    {
      title: "พัฒนาสังคมและชุมชนเมือง",
      color: "#DF3A6B",
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
    {
      title: "เศรษฐกิจและการพาณิชย์",
      color: "#825BF0",
    },
  ];
  let chart_data = [
    {
      year: 2555,
      values: [
        {
          title: "การศึกษา",
          value: 63771290800,
        },
        {
          title: "สาธารณสุข",
          value: 49540410000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 88179960000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 74905643000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 117453000000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 94078000000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 212071000000,
        },
      ],
    },
    {
      year: 2556,
      values: [
        {
          title: "การศึกษา",
          value: 91138395000,
        },
        {
          title: "สาธารณสุข",
          value: 51702999000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 72282007000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 56970535000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 115117540000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 137886704000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 173901820000,
        },
      ],
    },
    {
      year: 2557,
      values: [
        {
          title: "การศึกษา",
          value: 56902073000,
        },
        {
          title: "สาธารณสุข",
          value: 55223286000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 69517544000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 58683123000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 116049000000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 147430387000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 196194596000,
        },
      ],
    },
    {
      year: 2558,
      values: [
        {
          title: "การศึกษา",
          value: 53276122600,
        },
        {
          title: "สาธารณสุข",
          value: 54362312000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 75018962000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 68752396000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 107210850000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 133958957000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 157420400400,
        },
      ],
    },
    {
      year: 2559,
      values: [
        {
          title: "การศึกษา",
          value: 5339825700,
        },
        {
          title: "สาธารณสุข",
          value: 51991250000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 71099407000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 91353347620,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 124150620000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 130895344000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 177111774380,
        },
      ],
    },
    {
      year: 2560,
      values: [
        {
          title: "การศึกษา",
          value: 41423554000,
        },
        {
          title: "สาธารณสุข",
          value: 61415822000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 74599224170,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 68270921000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 147433567000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 116494156830,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 267491920000,
        },
      ],
    },
    {
      year: 2561,
      values: [
        {
          title: "การศึกษา",
          value: 50777645000,
        },
        {
          title: "สาธารณสุข",
          value: 60866518000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 65590042000,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 59361774000,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 159340894000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 130292893000,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 258770234000,
        },
      ],
    },
    {
      year: 2562,
      values: [
        {
          title: "การศึกษา",
          value: 45298080000,
        },
        {
          title: "สาธารณสุข",
          value: 64901478500,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 62073295980,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 62817793010,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 157744019800,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 129785875520,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 277379457190,
        },
      ],
    },
    {
      year: 2563,
      values: [
        {
          title: "การศึกษา",
          value: 80533500000,
        },
        {
          title: "สาธารณสุข",
          value: 46798326400,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 62552073700,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 92648509420,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 163012125800,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 136044263300,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 259844112530,
        },
      ],
    },
    {
      year: 2564,
      values: [
        {
          title: "การศึกษา",
          value: 48375989200,
        },
        {
          title: "สาธารณสุข",
          value: 67841598300,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 61461234900,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 71640965300,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 125430578150,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 136479507700,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 243770126450,
        },
      ],
    },
    {
      year: 2565,
      values: [
        {
          title: "เศรษฐกิจและการพาณิชย์",
          value: 2351442520,
        },
        {
          title: "การศึกษา",
          value: 7114462210,
        },
        {
          title: "สาธารณสุข",
          value: 60929000000,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 13034606110,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 126209343610,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 102121922000,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 1904314250,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 73902164910,
        },
      ],
    },
    {
      year: 2566,
      values: [
        {
          title: "เศรษฐกิจและการพาณิชย์",
          value: 2942783300,
        },
        {
          title: "การศึกษา",
          value: 12654788760,
        },
        {
          title: "สาธารณสุข",
          value: 16770347450,
        },
        {
          title: "พัฒนาสังคมและชุมชนเมือง",
          value: 15827422590,
        },
        {
          title: "ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          value: 93486730810,
        },
        {
          title: "เมืองและการพัฒนาเมือง",
          value: 89437595020,
        },
        {
          title: "ความปลอดภัยและความเป็นระเบียบเรียบร้อย",
          value: 3598069600,
        },
        {
          title: "การบริหารจัดการและบริหารราชการ",
          value: 147881257850,
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
            <h3 className="d3 mt-3">12 ปีที่ผ่านมา กทม. ใช้งบประมาณไป</h3>
            <h2 className="d2">900,162,424,601 บาท</h2>
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
            <div className=" mt-2 p3">
              หมายเหตุ: ตั้งแต่ปีงบประมาณ 2565 เป็นต้นไป
              มีการปรับชื่อด้านและแผนงานบางข้อ และเพิ่มจาก 7 ด้าน เป็น 8 ด้าน
              ข้อมูลที่แสดงในหน้านี้ <b>จะยึดตามชื่อแผนงานใหม่</b>
              และจัดกลุ่มแผนงานเก่าเข้ากับแผนงานใหม่
              <b>ตามความสอดคล้องกันของแผนงานย่อย</b>
            </div>
          </div>

          {!isMobileOnly || active_index === 6 ? (
            <div className="flex items-center right">
              <div className="grid w-full grid-cols-12 gap-2 text-center chart lg:gap-2 lg:w-auto">
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
