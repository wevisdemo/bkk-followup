import React, { useRef } from "react";
import check from "assets/images/check.svg";
import { isMobileOnly } from "react-device-detect";
import useScrollOnDrag from "react-scroll-ondrag";

export default function ResponsibilityPageTwo(props) {
  const { active_index } = props;
  const cards = [
    {
      title: "ด้านการคมนาคมและการขนส่ง",
      list: [
        "การดูแลรักษาทางบกทางน้ำ",
        "การขนส่ง",
        "การจัดการและวิศวกรรมจราจร",
      ],
    },
    {
      title: "ด้านการจัดบริการสาธารณะ",
      list: [
        "การจัดหาสถานที่พักผ่อน",
        "การจัดหาสาธารณูปโภค",
        "การจัดการสาธารณสุข",
        "การควบคุมฌาปณสถาน",
        "การควบคุมการเลี้ยงสัตว์",
        "การจัดให้มีและควบคุมการฆ่าสัตว์",
        "การจัดการศึกษา",
        "การสาธารณูปการ",
      ],
    },
    {
      title: "ด้านการพัฒนาสังคม",
      list: [
        "การบำรุงรักษาศิลปะและประเพณี",
        "การสังคมสงเคราะห์",
        "การส่งเสริมการกีฬา",
        "การส่งเสริมการประกอบอาชีพ",
      ],
    },
    {
      title: "ด้านการโยธาและผังเมือง",
      list: [
        "การผังเมือง",
        "การจัดพื้นที่ค้าขายและเดินทาง",
        "การควบคุมอาคาร",
        "การปรับปรุงชุมชนแออัด",
      ],
    },
    {
      title: "ด้านการรักษาความสงบเรียบร้อย",
      list: [
        "การรักษาความสงบเรียบร้อย",
        "การส่งเสริมสนับสนุนงานตำรวจ",
        "การป้องกันสาธารณภัย",
        "การควบคุมความปลอดภัยสาธารณะ",
      ],
    },
    {
      title: "ด้านการรักษาสิ่งแวดล้อม",
      list: [
        "การรักษาความสะอาด",
        "การดูแลรักษาที่สาธารณะ",
        "การอนุรักษ์สิ่งแวดล้อม",
      ],
    },
    {
      title: "ด้านอื่นๆ",
      list: ["การทะเบียน", "การพาณิชย์ของกรุงเทพมหานคร"],
    },
  ];
  const containerRef = useRef(null);
  const { events } = useScrollOnDrag(containerRef);

  return (
    <div
      className="fixed inset-0 z-10 flex py-4 text-center  responsibility-page-two md:items-center text-white-default"
      style={{ top: "60px" }}
    >
      <div className="w-full">
        <div className="container mx-auto">
          <h2 className="mt-4 d2 md:mt-0">กทม. มีหน้าที่ทำอะไร?</h2>

          {!isMobileOnly || active_index === 10 ? (
            <>
              <h4 className="mt-4 text-xl md:mt-6 lg:mt-4 d4 lg:text-2xl">
                กทม. ไม่ใช่จังหวัด แต่เป็นองค์กรปกครองท้องถิ่นรูปแบบพิเศษ
              </h4>

              <p className="mt-4 text-xl md:mt-6 lg:mt-4 lg:text-2xl">
                กทม. มีกฎหมายการบริหารเป็นของตนเอง ซึ่งจังหวัดอื่นไม่มี
                (พรบ.ระเบียบริหาราชการกรุงเทพมหานคร พ.ศ. 2528)
                และตามกฎหมายนี้ระบุไว้ว่า กทม.&nbsp;
                <b>
                  มีหน้าที่ 28 ประการ
                  ซึ่งอาจแบ่งเป็นประเภทของหน้าที่พอสังเขปได้ดังนี้
                </b>
              </p>
            </>
          ) : null}
        </div>

        {!isMobileOnly || active_index === 11 ? (
          <div className="overflow-x-auto px-4" {...events} ref={containerRef}>
            <div className="  flex gap-2 w-max pb-5 pl-4 mt-10 lg:mt-20 cursor-pointer scroll-list">
              {cards.map((c, c_index) => (
                <div
                  key={c_index}
                  className="p-4 text-left rounded-md pointer-events-none  box bg-blue-lightest text-black-default responsiveSlide"
                  style={{ width: "300px" }}
                >
                  <h5 className="d5">{c.title}</h5>

                  <hr className="my-4" />

                  <ul className="list">
                    {c.list.map((l, l_index) => (
                      <li
                        key={l_index}
                        className="flex items-center mt-2 2xl:mt-3"
                      >
                        <img width={25} src={check} alt={check} />

                        <h4 className="flex-1 ml-3 text-lg">{l}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
