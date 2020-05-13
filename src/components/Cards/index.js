import React from "react";
import "./styles.css";
import * as formatter from "../../utils/formatter";

export default props => {

  let cars = props.data;

  if (props.search) {
    cars = cars.filter(car => {
      const name = car.name;
      const brand = car.brand;
      const overview = car.overview;
      const price = car.price;
      const compare = new RegExp(props.search, "i");

      if (
        compare.test(name) ||
        compare.test(brand) ||
        compare.test(overview) ||
        compare.test(price)
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
  return (

    <div className="cards">
      <ul className="list">
        {cars.map((car, key) => (
          <li key={key} className="item">
            <div className="photo">
              <img src={car.photo} alt="" />
            </div>

            <div className="content">
              <div className="title">
                <h1>{car.name}</h1>
              </div>

              <div className="price">
                <span>{formatter.dollar.format(car.price)}</span>
              </div>

              <div className="book-now">
                <span>Book Now</span>
                <div className="dash" />
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
