import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const timeLine = ({ selected_year, SET_SELECTED_YEAR }) => {
  const years = [55, 56, 57, 58, 59, 60, 61, 62];
  const [selected_index, SET_SELECTED_INDEX] = useState(0);
  // const [selected_year, SET_SELECTED_YEAR] = useState(55);
  const [interval, SET_INTERVAL] = useState();
  const selectedYear = (year, index) => {
    SET_SELECTED_INDEX(index);
    SET_SELECTED_YEAR(year);
    clearInterval(interval);
  };
  let year = selected_year + 1;
  let index = selected_index + 1;

  const play = () => {
    if (index != years.length) {
      SET_INTERVAL(
        setInterval(() => {
          SET_SELECTED_INDEX(index++);
          SET_SELECTED_YEAR(year++);
        }, 1000)
      );
    }
  };
  const resume = () => {
    clearInterval(interval);
  };
  useEffect(() => {
    if (index === years.length) {
      clearInterval(interval);
    }
  }, [index]);

  return (
    <div
      className="flex items-center text-white-default"
      id="tile-line-wrapper"
    >
      <div className="flex justify-end flex-1 d2" id="time-line-text">
        <div onClick={play} className="cursor-pointer">
          {'>'}
        </div>
        <div onClick={resume} className="cursor-pointer">
          {'='}
        </div>
        25{selected_year}
      </div>
      <div id="time-line" style={{ flex: 2 }}>
        <ul className="timeline">
          {years.map((y, index) => (
            <li
              key={index}
              className={
                index <= selected_index
                  ? 'active-tl timeline-li'
                  : 'unselected timeline-li'
              }
            >
              <div
                className={
                  index <= selected_index ? 'text-selected text h4' : 'text h4'
                }
                onClick={() => selectedYear(y, index)}
              >
                {y}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default timeLine;
