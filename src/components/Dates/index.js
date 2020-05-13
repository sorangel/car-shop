import React from "react";
import _ from "lodash";
import cars from "../../assets/fake/cars";
import "./styles.css";

const years = _.uniqBy(cars, "year").map(car => car.year);

export default () => (
  <div className=" dates">
    <ul className="list">
      {years.map((year, key) => (
        <li key={key} className="item active">
          <span>{year}</span>
        </li>
      ))}
    </ul>
  </div>
);
