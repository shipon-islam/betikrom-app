import { TProduct } from "@/types";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error("failed to fetch image");
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log(error);
  }
}
export async function getBase64Many(products: TProduct[]) {
  const base64Promices = products.map((product) => getBase64(product.image));
  const base64Result = await Promise.all(base64Promices);
  const photosWithblur = products.map((product, i) => ({
    ...product,
    blurUrl: base64Result[i],
  }));
  return photosWithblur;
}
