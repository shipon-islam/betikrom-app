"use client";
import { useCardContext } from "@/context/CardContextProvider";
import betikrom from "@/public/betikrom_logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
const links = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "products", path: "/products" },
  { id: 3, name: "about", path: "/about" },
];
export default function Headers() {
  const { state } = useCardContext();
  return (
    <header className="bg-gray-800 border-b border-gray-600 sticky top-0 z-50">
      <nav className="flex justify-between container items-center py-2">
        <div>
          <Image priority className="w-32" src={betikrom} alt="logo" />
        </div>

        <ul className="flex gap-x-10 items-center">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className={`text-gray-400 hover:text-gray-50 transition-colors duration-300 capitalize`}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/products/card" className="relative">
              <FaCartShopping className="text-xl text-gray-200" />
              <small className="absolute bg-yellow-400 text-[8px] inline-block px-1 rounded-full -top-1.5 -right-1 text-gray-800">
                {state.product_card?.length}
              </small>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <Button title="signup" className="px-5" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
