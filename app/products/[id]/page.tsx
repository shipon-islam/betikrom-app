import { getAllProduct, getProductById } from "@/action/product";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsStar } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import AddBuyFunction from "../../../components/AddBuyFunction";
export async function generateStaticParams() {
  const products: TProduct[] = await getAllProduct();
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function ProductById({
  params,
}: {
  params: { id: string };
}) {
  const product: TProduct = await getProductById(params.id);
  // const blurUrl = await getBase64(product.image);
  const getRating = (rating: number) => {
    const star = Array.from({ length: 5 }, (v, i) => {
      let index = i + 0.5;
      return (
        <span key={i} className="text-yellow-400 ">
          {rating >= i + 1 ? (
            <FaStar className="" />
          ) : rating >= index ? (
            <FaStarHalfAlt className="" />
          ) : (
            <BsStar className="" />
          )}
        </span>
      );
    });
    return star;
  };

  return (
    <main className="container py-8 ">
      <section className="flex gap-10">
        <aside className="">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="product"
            className="rounded-lg"
          />
        </aside>
        <aside className="basis-full">
          <p className="">Product Id: #{product.id}</p>
          <hr />
          <h4 className="mt-5 capitalize text-xl">p{product.title}</h4>
          <p className="my-2">
            <span>Category:</span>{" "}
            <Link
              href={`/products?category=${product.category}`}
              className="text-yellow-500"
            >
              {product.category}
            </Link>
          </p>
          <div className="flex gap-x-8">
            <p>
              Rating:{" "}
              <span className="text-yellow-500">
                {product.rating.rate}/{product.rating.count}
              </span>
            </p>
            <div className="flex">{getRating(product.rating.rate)}</div>
          </div>

          <AddBuyFunction product={product} />
          <p className="mt-8">Description </p>
          <hr />
          <p className="pt-3">{product.description}</p>
        </aside>
      </section>
    </main>
  );
}
