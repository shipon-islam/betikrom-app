import { getAllProduct } from "@/action/product";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { TProductWithBlur, TsearchQuery } from "@/types";

export default async function page({
  searchParams,
}: {
  searchParams: TsearchQuery;
}) {
  const products: TProductWithBlur[] = await getAllProduct(searchParams);

  return (
    <main>
      <section className="grid grid-cols-[1fr_3fr]">
        <Sidebar />
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 mt-8 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
