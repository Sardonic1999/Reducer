import React, { useState, useReducer } from "react";
import Counter from "./Counter";
import Todo from "./Todos";

const UseReduce = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "toggle":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
      case "delete":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    dispatch({ type: "add", payload: { name: name } });
    setName("");
  };
  return (
    <div>
      <h1>Reducer Web brain</h1>
      <Counter />
      <hr />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      {todos.map((value) => {
        return <Todo value={value} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default UseReduce;
