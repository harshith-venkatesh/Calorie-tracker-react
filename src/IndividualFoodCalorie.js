import React from "react";

function FoodPill({ name, measure, calories, foodClickHandler }) {
  return (
    <div onClick={() => foodClickHandler(calories)}>
      <span> {name} </span>
      <span> {measure} </span>
      <span> {calories} calories</span>
    </div>
  );
}

export default FoodPill;
