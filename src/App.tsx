import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "Increment"; payload: { count: number } }
  | { type: "Decrement"; payload: { count: number } }
  | { type: "Reset"; payload: { count: number } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload.count };
    case "Decrement":
      return { count: state.count - action.payload.count };
    case "Reset":
      return { count: action.payload.count };
    default:
      return state;
  }
};

const Counter = () => {
  const initialState: State = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "Increment", payload: { count: 1 } })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "Decrement", payload: { count: 1 } })}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "Reset", payload: { count: 0 } })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
