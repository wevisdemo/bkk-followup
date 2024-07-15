import React, { useEffect } from "react";
import * as d3 from "d3";
import numeral from "numeral";
import { isMobileOnly } from "react-device-detect";

export default function BudgetPageTwo() {
  useEffect(() => {
    const data = [
      { year: 2555, value: 12338 },
      { year: 2556, value: 12295 },
      { year: 2557, value: 12297 },
      { year: 2558, value: 11411 },
      { year: 2559, value: 12310 },
      { year: 2560, value: 13676 },
      { year: 2561, value: 13829 },
      { year: 2562, value: 14119 },
      { year: 2563, value: 15313 },
      { year: 2564, value: 13658 },
      { year: 2565, value: 14373 },
      { year: 2566, value: 14438 },
    ];

    const parent_width = d3.select(".line-chart").node().clientWidth;

    let height = 200;
    let width = parent_width;

    const margin = {
      top: 5,
      right: isMobileOnly ? 40 : 35,
      bottom: 5,
      left: isMobileOnly ? 40 : 30,
    };

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    const x_scale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.year))
      .range([0, width]);

    const y_scale = d3
      .scaleLinear()
      .domain([10000, d3.max(data, (d) => d.value * 1.2)])
      .range([height, 0]);

    const valueLine = d3
      .line()
      .x((d) => x_scale(d.year))
      .y((d) => y_scale(d.value));

    const x_axis = d3.axisBottom(x_scale).ticks(6).tickSize(0).tickValues("");

    let chart = d3
      .select(".line-chart")
      .select("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueLine)
      .style("fill", "none")
      .style("stroke", "white")
      .style("stroke-width", 4);

    chart
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(x_axis)
      .select("path")
      .style("color", "#00C853")
      .style("stroke-dasharray", "4, 4")
      .style("stroke-width", 2);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-year")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-50")
      .style("font-size", "24px")
      .style("fill", "white")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((d) => d.year);

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-value")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-28")
      .style("font-size", "16px")
      .style("font-family", "KondolarThai")
      .style("fill", "#7AE2A6")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((d) => numeral(d.value).format("0,0"));

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label-unit")
      .attr("x", (d) => x_scale(d.year))
      .attr("y", (d) => y_scale(d.value))
      .attr("dy", "-12")
      .style("font-size", "16px")
      .style("fill", "#7AE2A6")
      .style("text-anchor", "middle")
      .style("opacity", "0")
      .text((_) => "บาท/คน");

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x_scale(d.year))
      .attr("cy", (d) => y_scale(d.value))
      .attr("r", 6)
      .style("fill", "white");

    showValue();
  }, []);

  const showValue = () => {
    d3.select(".line").style("stroke", "white");
    d3.select(".x-axis").select("path").style("color", "#00C853");
    d3.selectAll(".label-year").style("opacity", "0");
    d3.selectAll(".label-value").style("opacity", "0");
    d3.selectAll(".label-unit").style("opacity", "0");
    d3.selectAll(".label-year").style("transition", "0.4s");
    d3.selectAll(".label-value").style("transition", "0.4s");
    d3.selectAll(".label-unit").style("transition", "0.4s");
    setTimeout(() => {
      d3.select(".line").style("stroke", "#00C853");
      d3.select(".x-axis").select("path").style("color", "white");
      d3.selectAll(".label-year").style("opacity", "1");
      d3.selectAll(".label-value").style("opacity", "1");
      d3.selectAll(".label-unit").style("opacity", "1");
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none budget-page-two bg-black-default"
      style={{ top: "60px" }}
    >
      <div className="w-full">
        <div className="container mx-auto">
          <h3 className="mt-5 text-left lg:w-9/12 d3 text-white-default lg:mt-14 md:text-center lg:text-left">
            12 ปีที่ผ่านมา (2555-2566) กทม. ใช้งบประมาณ
            ดูแลประชากรที่มีทะเบียนบ้านใน กทม. ไม่เคยต่ำกว่า
          </h3>

          <h2 className="mt-3 text-left d2 text-green-default md:text-center lg:text-left">
            10,000 บาท/คน/ปี
          </h2>
        </div>

        <div className="pb-5 mt-16 overflow-x-auto pointer-events-auto lg:pointer-events-none lg:mt-10 2xl:mt-20">
          <div
            className="relative mx-auto line-chart mt-14"
            style={{ width: isMobileOnly ? "200%" : "80%" }}
          >
            <svg></svg>

            <h4 className="absolute hidden text-base start-at text-green-default -bottom-1 -right-24 lg:block">
              10,000 บาท
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
