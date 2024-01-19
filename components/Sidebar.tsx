import { TProduct } from "@/types";
import Link from "next/link";

export default async function Sidebar() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: TProduct[] = await res.json();
  const categoryArray = products.map((product) => product.category);
  const uniqueCategory = new Set(categoryArray);
  return (
    <aside className="bg-gray-800 max-w-[22rem] h-screen px-10 sticky top-20 ">
      <h5 className="capitalize pt-5 pb-2 text-lg border-b border-gray-600">
        category
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 inline-block relative left-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </h5>
      <ul className="space-y-4 mt-4">
        <li className="hover:bg-gray-400 w-fit px-4 py-1 rounded-md cursor-pointer capitalize">
          <Link href={`/products`}>all</Link>
        </li>
        {[...uniqueCategory].map((category, id) => (
          <li
            className="hover:bg-gray-400 w-fit px-4 py-1 rounded-md cursor-pointer capitalize"
            key={id}
          >
            <Link href={`/products?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
