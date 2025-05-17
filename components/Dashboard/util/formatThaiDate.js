export function formatThaiDate(dateStr) {
  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const [year, month, day] = dateStr.split("-");
  const thaiYear = parseInt(year) + 543;
  const thaiMonth = monthNames[parseInt(month, 10) - 1];

  return `${thaiMonth} ${thaiYear}`;
}
