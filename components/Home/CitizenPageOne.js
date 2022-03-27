import React, { useState, useEffect } from "react";
import { isMobileOnly, isMobile } from "react-device-detect";
import citizen_hand from "assets/images/citizen_hand.png";

export default function CitizenPageOne() {
  const [show_hand, setShowHand] = useState(false);
  const [show_card, setShowCard] = useState(false);
  const data = [
    {
      title: "ไปลงคะแนนเสียงเลือกตั้งผู้ว่าฯ และสมาชิกสภา กทม. ทุก ๆ 4 ปี",
      bg_color: "#FFFFFF",
    },
    {
      title: "เข้าชื่อเสนอข้อบัญญัติ กทม. แล้วยื่นต่อสภา กทม.",
      description:
        "ประชาชนที่มีสิทธิเลือกตั้งใน กทม. จำนวน ไม่น้อยกว่ากึ่งหนึ่งของประชาชนผู้มีสิทธิ์เลือกตั้งทั้งหมด สามารถเข้าชื่อร้องขอต่อประธานสภา กทม. เพื่อดำเนินการให้สภาพิจารณาออกข้อบัญญัติท้องถิ่นได้",
      bg_color: "#FFE8F3",
    },
    {
      title: "ร่วมลงชื่อถอดถอนผู้ว่าฯ และสมาชิกสภา กทม.",
      description:
        "ประชาชนที่มีสิทธิเลือกตั้งใน กทม. จำนวนไม่น้อยกว่า 30,000 คน สามารถเข้าชื่อร้องขอต่อรัฐมนตรีว่าการกระทรวงมหาดไทยเพื่อเริ่มกระบวนการลงคะแนนเสียงถอดถอนต่อไป",
      bg_color: "#F4B8CA",
    },
  ];

  useEffect(() => {
    setTimeout(
      () => {
        setShowHand(true);
      },
      isMobileOnly ? 1200 : 0
    );
    setTimeout(
      () => {
        setShowCard(true);
      },
      isMobileOnly ? 2400 : 1200
    );
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 flex py-4 pointer-events-none citizen-page-one lg:items-center bg-pink-default md:py-14 lg:py-4"
      style={{ top: "60px" }}
    >
      <div className="container mx-auto">
        {!isMobileOnly ? (
          <h2 className="leading-tight text-center d2 text-white-default">
            ประชาชนสามารถมีส่วนร่วม กับกทม. อย่างไรได้บ้าง?
          </h2>
        ) : null}

        <div
          className="relative z-10 h-full mt-0 lg:mt-6 2xl:mt-14"
          style={{ opacity: show_card ? 1 : 0, transition: "0.4s" }}
        >
          <p className="hidden max-w-4xl mx-auto mt-6 text-xl text-center text-white-default md:block lg:hidden">
            <b>
              ที่มา: • พรบ.
              ว่าด้วยการลงคะแนนเสียงเพื่อถอดถอนสมาชิกหรือผู้บริหารท้องถิ่น พ.ศ.
              2542 <br />• พรบ. ว่าด้วยการเข้าชื่อเสนอข้อบัญญัติท้องถิ่น พ.ศ. 2542
            </b>
          </p>

          <div className="grid grid-cols-1 gap-0 p-4 pb-0 mt-0 rounded-md shadow-lg lg:grid-cols-3 lg:gap-5 bg-white-default bg-opacity-90 lg:bg-opacity-0 lg:p-0 md:mt-10 lg:mt-0">
            {data.map((d, d_index) => (
              <div
                key={d_index}
                className="p-0 rounded-md box lg:p-8"
                style={{
                  background: isMobile ? "none" : d.bg_color,
                }}
              >
                <h3 className="d3">{d_index + 1}.</h3>

                <h4 className="hidden mt-4 leading-tight d4 lg:block">
                  {d.title}
                </h4>

                <h5 className="block mt-4 leading-tight d5 lg:hidden">
                  {d.title}
                </h5>

                {d.description ? (
                  <p className="mt-5 text-sm leading-tight lg:text-lg">
                    {d.description}
                  </p>
                ) : null}

                <hr className="mt-3 mb-5 lg:mt-5" />
              </div>
            ))}
          </div>

          <p className="hidden max-w-4xl mx-auto mt-6 text-xl text-center 2xl:mt-20 text-white-default lg:block">
            <b>
              ที่มา: • พรบ.
              ว่าด้วยการลงคะแนนเสียงเพื่อถอดถอนสมาชิกหรือผู้บริหารท้องถิ่น พ.ศ.
              2542 <br />• พรบ. ว่าด้วยการเข้าชื่อเสนอข้อบัญญัติท้องถิ่น พ.ศ. 2542
            </b>
          </p>
        </div>

        {isMobile ? (
          <img
            src={citizen_hand}
            alt={citizen_hand}
            className="absolute inset-x-0 bottom-0 w-2/4 mx-auto md:w-1/4"
            style={{
              bottom: show_hand ? 0 : "-28%",
              transition: "0.4s",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
