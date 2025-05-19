export const formatTop3WithOthers = (data) => {
  const color = "#00C853";

  // รวม value ตาม title
  const summed = {};
  data.forEach((entry) => {
    entry.values.forEach((item) => {
      if (!summed[item.title]) summed[item.title] = 0;
      summed[item.title] += item.value;
    });
  });

  // เรียงลำดับจากมากไปน้อย
  const sorted = Object.entries(summed).sort((a, b) => b[1] - a[1]);

  // คำนวณยอดรวมทั้งหมด
  const total = sorted.reduce((acc, [, val]) => acc + val, 0);

  // ตัด Top 3 และรวมที่เหลือ
  const top3 = sorted.slice(0, 3);
  const others = sorted.slice(3);
  const othersSum = others.reduce((sum, [, value]) => sum + value, 0);

  // รวมทั้งหมดเข้า array
  const finalArray = top3.map(([title, value]) => ({
    title,
    color,
    value: (value / 1000000).toLocaleString("en-US"),
    percent: parseFloat(((value / total) * 100).toFixed(2)),
  }));

  if (others.length > 0) {
    finalArray.push({
      title: "อื่นๆ",
      color,
      value: (othersSum / 1000000).toLocaleString("en-US"),
      percent: parseFloat(((othersSum / total) * 100).toFixed(2)),
    });
  }

  return finalArray;
};

export const matchingBGColor = (title) => {
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
  return chart_legends.find((l) => l.title === title)?.color;
};

export const groupByTop3Titles = (data) => {
  const summed = {};
  data.forEach((entry) => {
    entry.values.forEach((item) => {
      if (!summed[item.title]) summed[item.title] = 0;
      summed[item.title] += item.value;
    });
  });

  const sorted = Object.entries(summed).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3).map(([title]) => title);
};

function formatTop3(data) {
  const summed = {};
  data.forEach((entry) => {
    entry.values.forEach((item) => {
      if (!summed[item.title]) summed[item.title] = 0;
      summed[item.title] += item.value;
    });
  });

  const sorted = Object.entries(summed).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 3).map(([title]) => title);
}

export const formatTop3WithOthersGroupByYear = (data) => {
  const top3Titles = formatTop3(data);

  // รวม value ทั้งหมดของแต่ละ title สำหรับการเรียงลำดับภายใน values
  const totalByTitle = {};
  data.forEach((entry) => {
    entry.values.forEach(({ title, value }) => {
      if (!totalByTitle[title]) totalByTitle[title] = 0;
      totalByTitle[title] += value;
    });
  });

  return data.map(({ year, values }) => {
    const grouped = {};

    values.forEach(({ title, value }) => {
      if (top3Titles.includes(title)) {
        grouped[title] = (grouped[title] || 0) + value;
      } else {
        grouped["อื่นๆ"] = (grouped["อื่นๆ"] || 0) + value;
      }
    });

    const valuesArray = Object.entries(grouped).map(([title, value]) => ({
      title,
      value,
    }));

    return {
      year,
      values: valuesArray,
    };
  });
};
