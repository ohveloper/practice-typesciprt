import React from "react";

import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

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
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
