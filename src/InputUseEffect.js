import { useState, useEffect } from "react";

export function InputUseEffect() {
  const [message, setMensaje] = useState("");
  const [counter, setCounter] = useState(0)

  useEffect(function () {
    console.log("change view");
  }, [counter]); // if [] is empty only execute only one, but if into other hooks, change because the other change
  // in react use un hooks for change other hooks It is known as dependencies 

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("the message:" + message);
        }}
      >
        Save
      </button>
        <hr/>
        <br/>

        <h1> Counter: {counter}</h1>
        <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
        </button>


    </div>
  );
}
