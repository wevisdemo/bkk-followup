import React from "react";

const standard = ({ selected_theme }) => {
  return (
    <div id="AVG" className="flex flex-col mt-3 md:flex-row">
      <div className="flex-1 md:mr-3 card_cat_detail" id="AVG-left" style={{ backgroundColor: selected_theme.color50 }}>
        <div
          className="flex justify-center py-2 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          ค่ามาตรฐาน
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">พื้นที่สีเขียวควรมากกว่า</p>
          <p style={{ color: selected_theme.text_color }} className="font-bold h2">
            9
          </p>
          <p style={{ color: selected_theme.text_color }} className="font-bold h3">
            ตร.ม./คน
          </p>
          <p id="footer" className="p1">
            ตามมาตรฐานของ WHO
          </p>
        </div>
      </div>
      <div
        className="flex flex-col flex-1 mt-3 card_cat_detail md:mt-0"
        id="AVG-right"
        style={{ backgroundColor: selected_theme.color50 }}
      >
        <div
          className="flex justify-center py-2 rounded-t text-white-default p2"
          style={{ backgroundColor: selected_theme.color }}
        >
          พื้นที่สีเขียวใช้ได้จริง
        </div>
        <div className="px-2 py-3">
          <p className="font-bold leading-tight h4">สัดส่วนพื้นที่สีเขียวเข้าถึงได้จริง (accessible green space)</p>
          <p style={{ color: selected_theme.text_color }} className="font-bold h3">
            1.22
          </p>
          <p style={{ color: selected_theme.text_color }} className="font-bold h4">
            ตร.ม./คน
          </p>
          <span className="flex p1 ">
            <p className="font-bold">หมายเหตุ</p>
            <p className="pl-2">ข้อมูลอัปเดท 2564</p>
          </span>
          <p className="p3">ที่มา: สำนักสิ่งแวดล้อม กรุงเทพมหานคร</p>
        </div>
      </div>
    </div>
  );
};

export default standard;
