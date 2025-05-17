import React, { useEffect } from "react";
import { isMobileOnly } from "react-device-detect";
import * as d3 from "d3";
import dashboard from "public/data/dashboard.json";
export default function DashboardLineChart({
  selected_theme,
  data_line_chart,
  years,
}) {
  function convertYearsToAVG(years, avgValue) {
    return years.map((year) => ({
      year: year.slice(2), // เอาเฉพาะเลขสองตัวท้าย เช่น "2555" → "55"
      value: avgValue,
    }));
  }
  function convertYearObjectToArray(data) {
    return Object.entries(data).map(([year, value]) => ({
      year: year.slice(2), // ตัดปีให้เหลือ 2 หลักท้าย เช่น "2555" → "55"
      value: value,
    }));
  }
  const createChart = () => {
    let AVG;
    if (selected_theme.name === "น้ำท่วมถนน") {
      AVG = convertYearsToAVG(years, 22.53);
    } else if (selected_theme.name === "พื้นที่สีเขียว") {
      AVG = convertYearsToAVG(years, 9);
    } else if (selected_theme.name === "มลพิษในคลอง") {
      AVG = convertYearsToAVG(years, 4);
    } else if (selected_theme.name === "ขยะมูลฝอย") {
      AVG = convertYearObjectToArray(dashboard.waste.nationwidePerCapita);
    } else if (selected_theme.name === "ฝุ่นควันเกินมาตรฐาน") {
      AVG = convertYearsToAVG(years, 37.5);
    }

    let data = [];
    _.forIn(data_line_chart, (d, key) => {
      data.push({ year: key.substring(2, 4), value: d });
    });

    let height = isMobileOnly ? 150 : 200;
    let width = isMobileOnly ? 300 : 540;

    const margin = { top: 40, right: 25, bottom: 40, left: 25 };

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    const x_scale = d3.scaleTime().range([0, width]);

    x_scale.domain(
      d3.extent(data, function (d) {
        return d.year;
      })
    );

    const scale_data = [...data, ...AVG];

    const y_scale = d3
      .scaleLinear()
      .domain([0, d3.max(scale_data, (d) => d.value)])
      .range([height, 0]);

    const valueLine = d3
      .line()
      .x(function (d) {
        return x_scale(d.year || 0);
      })
      .y(function (d) {
        return y_scale(d.value || 0);
      });

    const lineBgArea = d3
      .area()
      .x(function (d) {
        return x_scale(d.year);
      })
      .y(function (d) {
        return y_scale(d.value || 0);
      })
      .y1(function () {
        return height;
      });

    const x_axis = d3
      .axisBottom(x_scale)
      .ticks(6)
      .tickSize(0)
      .tickFormat(d3.format(".0f"))
      .tickValues(data.map((d) => d.year));

    const chart = d3
      .select(".line-chart")
      .append("svg")
      .attr("class", "svg-line-chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(x_axis);

    chart
      .append("path")
      .data([data])
      .attr("class", "bg-line")
      .attr("d", lineBgArea)
      .style("fill", selected_theme.color50);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "value-line")
      .attr("x", function (d) {
        return x_scale(d.year);
      })
      .attr("y", function (d) {
        return y_scale(d.value);
      })
      .attr("height", function (d) {
        return height - y_scale(d.value);
      })
      .attr("width", 1)
      .style("fill", selected_theme.color);

    chart
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueLine)
      .style("fill", "none")
      .style("stroke", selected_theme.color)
      .style("stroke-width", 2);

    if (selected_theme.name != "น้ำท่วมถนน") {
      chart
        .append("path")
        .data([AVG])
        .attr("class", "dash-line")
        .attr("d", valueLine)
        .style("fill", "none")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("stroke-dasharray", 5);
    }

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", function (d) {
        return x_scale(d.year);
      })
      .attr("cy", function (d) {
        return y_scale(d.value || 0);
      })
      .attr("r", 3)
      .style("fill", selected_theme.color);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bg-label")
      .attr("width", function (d) {
        return 36;
      })
      .attr("height", function (d) {
        return 17;
      })
      .attr("x", function (d) {
        return x_scale(d.year) - 18;
      })
      .attr("y", function (d) {
        return y_scale(d.value || 0) - 23;
      })
      .attr("rx", 3)
      .style("fill", "white")
      .style("opacity", 0.8);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", function (d) {
        return x_scale(d.year);
      })
      .attr("y", function (d) {
        return y_scale(d.value || 0);
      })
      .attr("dy", "-10")
      .style("font-size", "12px")
      .style("text-anchor", "middle")
      .text(function (d) {
        return d.value ? d.value : 0;
      });

    chart
      .selectAll("g.tick")
      .select("text")
      .attr("y", 12)
      .style("font-size", "14px")
      .style("font-weight", "bold");
  };

  d3.select(".svg-line-chart").remove();
  createChart();

  useEffect(() => {
    createChart();
  }, []);

  return <div className="inline-block mx-auto border line-chart"></div>;
}
