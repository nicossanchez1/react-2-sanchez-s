import useCount from "./useCount";
import "./Count.css"

const Counter = () => {
  const { counter, increment, decrement, reset, agregar } = useCount();

  return (
    <div className="botonCantidad">
      <h2 className="titleCant">Cantidad: {counter}</h2>
      <div className="botonIncrement">
        <button className="botonMas" onClick={increment}>
          +
        </button>
        <button className="botonMenos" onClick={decrement}>
          -
        </button>
        <button className="botonReset" onClick={agregar}>
          agregar
        </button>
        <button className="botonReset" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
