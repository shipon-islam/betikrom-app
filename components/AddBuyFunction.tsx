"use client";
import Button from "@/components/Button";
import { useCardContext } from "@/context/CardContextProvider";
import { ADD_CARD, REMOVE_CARD } from "@/context/actions/carAction";
import { TProduct } from "@/types";

export default function AddBuyFunction({ product }: { product: TProduct }) {
  const { dispatch, state } = useCardContext();
  const cardProduct = {
    quantity: 1,
    userId: "101",
    id: product.id.toString(),
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
  };
  const isExistCard = state.product_card.find(
    (card) => card.id === product.id.toString()
  );

  return (
    <div className="mt-8 space-y-4">
      {isExistCard ? (
        <Button
          className="bg-yellow-200 block"
          onClick={() =>
            dispatch({ type: REMOVE_CARD, payload: product.id.toString() })
          }
          title="remove from card"
        />
      ) : (
        <Button
          className="block"
          onClick={() => dispatch({ type: ADD_CARD, payload: cardProduct })}
          title="add to card"
        />
      )}
      <Button title="buy now" />
    </div>
  );
}
