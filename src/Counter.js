import React, { useState } from "react";

export function Counter() {
  // save variables
  // counter is save value
  // setCounter is that function which change this value in counter
  const [counter, setCounter] = useState(10); // useState asignate 10 for inicializate

  return (
    <div>
      <h1> Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sum</button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Subtract</button>

      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        Restart</button>
    </div>
  );
}
