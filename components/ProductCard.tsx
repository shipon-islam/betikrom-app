import { TProductWithBlur } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
}: {
  product: TProductWithBlur;
}) {
  return (
    <div className="bg-white rounded-md">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt="card"
          width={150}
          height={150}
          className="w-auto h-[10rem] mx-auto px-2"
          priority
          placeholder="blur"
          blurDataURL={product.blurUrl}
        />

        <div className="flex justify-between py-4 px-4 border-t">
          <p className="text-gray-900">${product.price}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
