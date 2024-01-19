"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  ADD_CARD,
  ActionT,
  PayloadT,
  QUANTITY_DEC,
  QUANTITY_INC,
  REMOVE_ALL_CARD,
  REMOVE_CARD,
  TOTAL_AMOUNT,
} from "./actions/carAction";

const getLocalCard = () => {
  if (typeof window !== "undefined") {
    const localCard = localStorage.getItem("card");
    const cardItems = localCard ? JSON.parse(localCard) : [];
    return cardItems;
  }
  return [];
};

export const cardInitialState = {
  total_amount: 0,
  deliver_charge: 50,
  product_card: getLocalCard() as PayloadT[],
};

export const cardReducer = (
  state: typeof cardInitialState,
  action: { type: ActionT; payload?: any }
) => {
  switch (action.type) {
    case ADD_CARD:
      const existProduct = state.product_card.find(
        (card) => card.id === action.payload.id
      );
      if (existProduct) return { ...state };
      return {
        ...state,
        product_card: [...state.product_card, action.payload],
      };
    case QUANTITY_INC:
      let newIncCard = state.product_card.map((card) => {
        if (card.id === action.payload) {
          if (card.quantity === 6) {
            return card;
          }
          return { ...card, quantity: Number(card.quantity) + 1 };
        }
        return card;
      });

      return {
        ...state,
        product_card: newIncCard,
      };
    case QUANTITY_DEC:
      let newDecCard = state.product_card.map((card) => {
        if (card.id === action.payload) {
          if (card.quantity === 1) {
            return card;
          }
          return { ...card, quantity: Number(card.quantity) - 1 };
        }
        return card;
      });
      return {
        ...state,
        product_card: newDecCard,
      };
    case REMOVE_CARD:
      const newCards = state.product_card.filter(
        (card) => card.id !== action.payload
      );
      return {
        ...state,
        product_card: newCards,
      };
    case REMOVE_ALL_CARD:
      return {
        ...state,
        product_card: [],
      };
    case TOTAL_AMOUNT:
      const totalCardAmount = state.product_card.reduce(
        (preValue, curValue) => {
          return preValue + curValue.price * curValue.quantity;
        },
        0
      );

      return {
        ...state,
        total_amount: parseFloat(totalCardAmount.toFixed(2)),
      };
    default:
      throw new Error();
  }
};

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
