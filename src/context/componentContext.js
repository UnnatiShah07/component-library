import { createContext, useContext, useReducer } from "react";
import { componentReducer, componentStates } from "../reducers";

const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(componentReducer, componentStates);
  return <ComponentContext.Provider value={{ state, dispatch }}>{children}</ComponentContext.Provider>;
};

export const useComponentContext = () => useContext(ComponentContext);
