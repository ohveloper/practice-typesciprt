import React from "react";

import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import CounterUseReducer from "./CounterUseReducer";
import ReducerSample from "./ReducerSample";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  const onSubmit = (form: { name: string; nickname: string }) => {
    console.log(form);
  };

  return (
    <div>
      <Greetings name="타입스크립트" onClick={onClick} />
      <div>------------------------</div>
      <Counter />
      <div>------------------------</div>
      <CounterUseReducer />
      <div>------------------------</div>
      <MyForm onSubmit={onSubmit} />
      <div>------------------------</div>
      <ReducerSample />
      <div>------------------------</div>
    </div>
  );
}

export default App;
