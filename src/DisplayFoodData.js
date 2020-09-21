import React from "react";
import "./styles.css";

// function DisplayFoodTable({ calorieData, foodClickHandler }) {
//   const columns = [
//     {
//       Header: "Name",
//       accessor: "name"
//     },
//     {
//       Header: "Measure",
//       accessor: "measure"
//     },
//     {
//       Header: "Calories",
//       accessor: "calories"
//     }
//   ];
//   return (
//     <div>
//       <ReactTable
//         data={calorieData}
//         columns={columns}
//         defaultPageSize={2}
//         pageSizeOptions={[2, 4, 6]}
//       />
//     </div>
//   );
// }

function DisplayFoodTable({ calorieData, foodClickHandler }) {
  // return calorieData.map(({ name, measure, calories }) => (
  //   <FoodPill
  //     key={name}
  //     name={name}
  //     measure={measure}
  //     calories={calories}
  //     foodClickHandler={foodClickHandler}
  //   />
  // ));
  return (
    <div>
      <table className="tableCSS">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Measures</th>
            <th>Calories Intake</th>
          </tr>
        </thead>
        <tbody>
          {calorieData.map(({ name, measure, calories }, i) => (
            <tr key={i} onClick={() => foodClickHandler(calories)}>
              {
                <>
                  <td>{name}</td>
                  <td>{measure}</td>
                  <td>{calories}</td>
                </>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayFoodTable;
