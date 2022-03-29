import React from "react";
import * as d3 from "d3";
import { isMobile, isMobileOnly } from "react-device-detect";

const rank62 = ({ selected_theme, data, SET_DISTRICT, SET_IS_RANK }) => {
  let title, sub, standard, avg, height_rank, low_rank, unit, note;
  let height_elem = d3.select("#group-dropdown").node().getBoundingClientRect().height;
  if (selected_theme.name === "น้ำท่วมถนน") {
    title = "อันดับน้ำท่วมในกรุงเทพมหานคร";
    sub = "จำนวนครั้งที่มีน้ำท่วมบนถนน (ครั้ง)";
    unit = "ครั้ง";
    note = "ที่มาข้อมูล: สำนักการระบายน้ำ กรุงเทพมหานคร สํานักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ กรุงเทพมหานคร";
  } else if (selected_theme.name === "พื้นที่สีเขียว") {
    title = "อันดับพื้นที่สีเขียวในกรุงเทพมหานคร";
    sub = "ปริมาณพื้นที่สีเขียวต่อคนต่อวัน (ตร.ม./คน)";
    standard = 9;
    avg = "ค่ามาตรฐานตาม WHO 9 ตร.ม./คน";
    unit = "ตร.ม./คน";
    note = "ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล สำนักงบประมาณ และสำนักสิ่งแวดล้อม กรุงเทพมหานคร ";
  } else if (selected_theme.name === "มลพิษในคลอง") {
    title = "อันดับค่ามลพิษในคลองกรุงเทพมหานคร";
    sub = "ปริมาณมลพิษในคลอง (มก./ลบ.ซม.)";
    standard = 4;
    avg = "ค่า BOD มาตรฐาน (ไม่เกิน 4 มก./ลิตร)";
    unit = "มก./ลิตร";
    note = "ที่มาข้อมูล: สำนักการระบายน้ำ สำนักยุทธศาสตร์และประเมินผล และสำนักงบประมาณ กรุงเทพมหานคร";
  } else if (selected_theme.name === "ขยะมูลฝอย") {
    title = "อันดับขยะมูลฝอยในกรุงเทพมหานคร";
    sub = "ปริมาณขยะต่อคนต่อวัน (กก./คน/วัน)";
    standard = 1.569;
    avg = "ปริมาณขยะมูลฝอยต่อคนต่อวันโดยทั้งประเทศ ปี 2564 คือ 1.569 กก.";
    unit = "กก./คน/วัน";
    note = "ที่มาข้อมูล: สํานักยุทธศาสตร์และประเมินผล สำนักสิ่งแวดล้อม และสำนักงบประมาณ กรุงเทพมหานคร ";
  } else if (selected_theme.name === "ฝุ่นควันเกินมาตรฐาน") {
    title = "อันดับค่าฝุ่นควันในกรุงเทพมหานคร";
    sub = "ค่าฝุ่นควันสูงสุด ( มคก./ลบ.ม.)";
    standard = 25;
    avg = "ค่าฝุ่นละออง PM2.5 (ไม่เกิน 25 มคก./ลบ.ม.)";
    unit = "มคก./ลบซม.";
    note = "ที่มาข้อมูล: กรมควบคุมมลพิษ กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม";
  }

  height_rank = _.filter(data, (d) => {
    if (selected_theme.name != "น้ำท่วมถนน") {
      return d.value > standard;
    } else {
      return data;
    }
  });
  low_rank = _.filter(data, (d) => d.value < standard);

  const selected_zone = (name) => {
    SET_DISTRICT(name);
    setTimeout(() => {
      d3.select(`.rect${name}`).style("stroke-width", 1).style("stroke", "white");
      d3.select(`.minimap${name}`).style("fill", "white");
      d3.select(`.tooltip${name}`).style("visibility", "visible");
    }, 100);
    SET_IS_RANK(false);
  };

  return (
    <div
      id="rank62"
      className="absolute z-30 w-full pb-16 bg-black-default xl:relative xl:pb-0"
      style={{
        top: isMobile ? height_elem + "px" : "",
      }}
    >
      <div id="rank62-header" className="flex flex-col justify-center mt-3 text-center text-white-default">
        <p className="font-bold d4">{title}</p>
        <p className="my-2 font-bold h4 lg:my-0">
          {selected_theme.name === "มลพิษในคลอง" || selected_theme.name === "ฝุ่นควันเกินมาตรฐาน"
            ? "ข้อมูลประจำปี 2563"
            : "ข้อมูลประจำปี 2564"}
        </p>
        <span className="flex flex-col m-auto p1 md:flex-row">
          <p className="mb-2 lg:mb-0">{sub}</p>
          <p className="mb-1 font-bold underline md:ml-1 lg:mb:0">เรียงลำดับมากไปน้อย</p>
        </span>
      </div>
      <div id="list-body" className="px-3 pt-2">
        {height_rank.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded cursor-pointer bg-white-default p2"
            onClick={() => selected_zone(rank.districtName)}
          >
            <div className="flex flex-row items-center flex-1">
              <div className="mr-2 circle_wrapper">{index + 1}</div>
              <p>{rank.districtName}</p>
            </div>
            <div className="flex flex-row items-center justify-end flex-1" style={{ color: selected_theme.text_color }}>
              <div>{rank.value}</div>
              <div className="ml-2 font-bold p2">{unit}</div>
            </div>
          </div>
        ))}
        <p className="flex justify-center p2 text-white-default">{avg}</p>
        {low_rank.map((rank, index) => (
          <div
            key={index}
            className="flex px-3 py-3 my-1 font-bold rounded cursor-pointer bg-white-default p2"
            onClick={() => selected_zone(rank.districtName)}
          >
            <div className="flex flex-row items-center flex-1">
              <div className="mr-2 circle_wrapper">{height_rank.length + 1 + index}</div>
              <p>{rank.districtName}</p>
            </div>
            <div className="flex flex-row items-center justify-end flex-1" style={{ color: selected_theme.text_color }}>
              <div>{rank.value}</div>
              <div className="ml-2 font-bold p2">{unit}</div>
            </div>
          </div>
        ))}
      </div>
      <div id="note" className="flex flex-col px-2 py-3 mx-3 my-1 font-bold rounded bg-white-default p2">
        <p className="font-bold h4">หมายเหตุ</p>
        <p className="p3">{note}</p>
      </div>
    </div>
  );
};

export default rank62;
