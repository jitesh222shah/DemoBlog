import React from "react";
import { useReducer } from "react";

const initialState = 0;

const reducers = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
        return 0
    default:
  }
};

const UseReducerHooks = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  
  return (
    <div>
      <button onClick={()=>dispatch("increment")}>+</button>
      <span>{state}</span>
      <button onClick={()=>dispatch("decrement")}>-</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducerHooks;
