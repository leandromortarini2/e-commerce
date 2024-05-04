import { IProduct } from "@/types";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3001/products");
    const productsData: IProduct[] = await res.json();
    return productsData;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default getProducts;
