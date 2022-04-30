import { useState, useEffect } from "react";

export const Timer = ({ initial, end }) => {
  const [timer, setTimer] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevValue) => {
        if (prevValue === end) {
          clearInterval(id);
          return end;
        }
        return prevValue + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <p>Initial time 30 and ending time is 60</p>
      <h1>{timer}</h1>
    </div>
  );
};
