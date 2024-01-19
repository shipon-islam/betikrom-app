export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const REMOVE_ALL_CARD = "REMOVE_ALL_CARD";
export const QUANTITY_INC = "QUANTITY_INC";
export const QUANTITY_DEC = "QUANTITY_DEC";
export const TOTAL_AMOUNT = "TOTAL_AMOUNT";
export type ActionT =
  | typeof ADD_CARD
  | typeof REMOVE_CARD
  | typeof REMOVE_ALL_CARD
  | typeof QUANTITY_INC
  | typeof QUANTITY_DEC
  | typeof TOTAL_AMOUNT;

export type PayloadT = {
  quantity: number;
  userId: string;
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
};
