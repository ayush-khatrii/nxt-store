export type Cart = {
  userId: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
  }>;
}
export type ProductCategory = {
  id: string;
  name: string;
  description: string | null;
}
