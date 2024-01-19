export type TButton = {
  title: string;
  className?: string;
  rest?: any;
};
interface Rating {
  rate: number;
  count: number;
}
export interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface TProductWithBlur extends TProduct {
  blurUrl: string | undefined;
}
export type TsearchQuery = {
  category: string;
};
