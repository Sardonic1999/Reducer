import React, { useReducer } from "react";
import { reduser } from "./Reduce_Logic";

const Reducer = () => {
  const [state, dispatch] = useReducer(reduser, { counter: 0, name: "" });

  return (
    <div>
      <h1>Counter in reducer</h1>
      <div
        style={{ margin: "100px", display: "flex", justifyContent: "center" }}
      >
        <button
          style={{ width: "100px", height: "100px", fontSize: "40px" }}
          onClick={() => dispatch({ type: "minus" })}
        >
          -
        </button>
        <h1
          style={{
            margin: "0px",
            fontSize: "70px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {state.counter}
        </h1>
        <button
          style={{ width: "100px", height: "100px", fontSize: "40px" }}
          onClick={() => dispatch({ type: "plus" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Reducer;
