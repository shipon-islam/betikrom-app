"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { cardInitialState, cardReducer } from "./reducers/cardReducer";

const CardContext = createContext<{
  state: typeof cardInitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: cardInitialState,
  dispatch: () => null,
});
export const useCardContext = () => {
  return useContext(CardContext);
};
export default function CardContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(cardReducer, cardInitialState);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(state.product_card));
  }, [state]);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
}
