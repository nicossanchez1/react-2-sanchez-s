import { useState, createContext } from "react";
export const ItemsContext = createContext();

const initialState = () => [

];


export const ItemsProvider = ({ children }) => {

  
  const [items, setItems] = useState(initialState);
  console.log(items);
  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {children}
    </ItemsContext.Provider>
  );
};

