import { useState } from "react";

const useCount = () => {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };

  const decrement = () => {
    setCount(counter - 1);
  };

  const reset = () => {
    setCount(0);
  };
  const agregar = () => {
    setCount(counter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    agregar
  };
};

export default useCount;
