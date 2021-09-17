import React, { useState, useReducer } from "react";

const Counter = () => {
  // const [state, setState] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return state - 1;
      case "increment":
        return state + 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  // const decrement = () => {
  //   setState(state - 1);
  // };

  // const increment = () => {
  //   setState(state + 1);
  // };
  return (
    <div>
      <div
        style={{ margin: "100px", display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={() => dispatch({ type: "decrement" })}
          style={{ width: "100px", height: "100px", fontSize: "40px" }}
        >
          -
        </button>
        <span
          style={{
            fontSize: "70px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {count}
        </span>
        <button
          onClick={() => dispatch({ type: "increment" })}
          style={{ width: "100px", height: "100px", fontSize: "40px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
