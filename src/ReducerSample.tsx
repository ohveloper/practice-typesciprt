import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow" | "green";

type State = {
  color: Color;
  count: number;
  text: string;
  isGood: boolean;
};

type Action = { type: "SET_COUNT"; count: number } | { type: "SET_TEXT"; text: string } | { type: "SET_COLOR"; color: Color } | { type: "TOGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "TOGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };

    default:
      throw new Error("Unhandled action type");
  }
}

export default function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: "red",
    text: "hello",
    isGood: true,
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 10 });

  const setText = () => dispatch({ type: "SET_TEXT", text: "world" });

  const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" });

  const isTogle = () => dispatch({ type: "TOGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: {state.count}</code> {state.count}
      </p>
      <p>
        <code>text: {state.text}</code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={isTogle}>TOGLE_GOOD</button>
      </div>
    </div>
  );
}
