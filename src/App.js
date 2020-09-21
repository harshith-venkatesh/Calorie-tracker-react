import React from "react";
import "./styles.css";
import calorieData from "./data/food-data";
import DisplayFoodTable from "./DisplayFoodData";

// function AddInternalNum(props) {
//   const internal = 54;
//   return <div> Your sum is : {internal + props.num}</div>;
// }

function GetHeaderElement(props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>(Click on the products to check for calorie intake)</p>
    </>
  );
}

function FoodClicked({ foodClicked }) {
  if (foodClicked > 0) {
    return <h4>Calories consumed for today would be : {foodClicked} 🔥</h4>;
  } else {
    return <h4>No Calories Burnt</h4>;
  }
}
export default class App extends React.Component {
  state = {
    calories: 0,
    foodClicked: 0
  };
  foodClickHandler = calories => {
    console.log("Food is clicked", calories);
    this.setState({ calories: this.state.calories + calories });
  };
  upDateCalorie = () => {
    this.setState({ calories: 0 });
  };
  render() {
    const myStyle = {
      color: "white",
      backgroundColor: "green",
      margin: "5px",
      padding: "5px 5px 5px 5px",
      fontSize: "16px"
    };
    return (
      <div className="App">
        <GetHeaderElement heading={"🔥 Calorie Tracker🔥"} />
        <FoodClicked foodClicked={this.state.calories} />
        <button style={myStyle} onClick={this.upDateCalorie}>
          Reset
        </button>
        <DisplayFoodTable
          calorieData={calorieData}
          foodClickHandler={this.foodClickHandler}
        />
      </div>
    );
  }
}

// function addNum(num1) {
//   return num1 + 30;
// }
