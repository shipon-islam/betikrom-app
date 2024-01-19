import { getBase64Many } from "@/lib/imageblur";
import { TsearchQuery } from "@/types";

export const getAllProduct = async (query?: TsearchQuery) => {
  if (!query?.category) {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return getBase64Many(products);
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${query.category}`
  );
  const products = await res.json();
  return getBase64Many(products);
};
export const getProductById = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
