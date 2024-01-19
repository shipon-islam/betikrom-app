import { getAllProduct } from "@/action/product";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { TProduct, TsearchQuery } from "@/types";

export default async function page({
  searchParams,
}: {
  searchParams: TsearchQuery;
}) {
  const products: TProduct[] = await getAllProduct(searchParams);

  return (
    <main>
      <section className="flex">
        <Sidebar />
        <div className="grid grid-cols-5 gap-8 justify-center mx-auto mt-8 items-start">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
