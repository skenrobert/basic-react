import { useState } from "react";

export function Form() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={ () => {
        alert('el mensaje:' + mensaje);
      }}>
        Save</button>
    </div>
  );
}
