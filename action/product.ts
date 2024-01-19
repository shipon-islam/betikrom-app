import { TsearchQuery } from "@/types";

export const getAllProduct = async (query?: TsearchQuery) => {
  if (!query?.category) {
    const res = await fetch("https://fakestoreapi.com/products");

    return res.json();
  }
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${query.category}`
  );

  return res.json();
};
export const getProductById = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
