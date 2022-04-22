import { useState } from "react";


function Counter() {
  const [counter, setCounter] = useState(0);
  const handleChange = (value) => {
      if(value == 2){
        setCounter(counter * 2);
      }
      else{
        setCounter(counter + value);
      }
  };

  return (
    <div>
      <h1 style={{ color: counter % 2 == 0 ? "green" : "red" }}>{counter}</h1>
      <button onClick={() => handleChange(1)}>+</button>
      <button onClick={() => handleChange(-1)}>-</button>
      <button onClick={() => handleChange(2)}>DOUBLE</button>
    </div>
  );
}

export { Counter };