import React from "react";

export const Todo = ({ value, dispatch }) => {
  return (
    <div>
      name:{" "}
      <span style={{ color: value.completed ? "red" : "black" }}>
        {value.name}
      </span>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "toggle", payload: { id: value.id } })
          }
        >
          toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: "delete", payload: { id: value.id } })
          }
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
