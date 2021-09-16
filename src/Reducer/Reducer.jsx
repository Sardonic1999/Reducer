import React, { useReducer } from "react";
import { reduser } from "./Reduce_Logic";

const Reducer = () => {
  const [state, dispatch] = useReducer(reduser, { counter: 0, name: "" });

  return (
    <div>
      <h1>Counter in reducer</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
    </div>
  );
};

export default Reducer;
