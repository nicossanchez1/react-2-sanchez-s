import useCount from "./useCount";

const Counter = () => {
  const { counter, increment, decrement, reset } = useCount();

  return (
    <div className="botonCantidad">
      <h2 className="titleCant">Cantidad: {counter}</h2>
      <div className="botonIncrement">
        <button className="botonMas" onClick={increment}>+</button>
        <button className="botonMenos" onClick={decrement}>-</button>
        <button className="botonReset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
