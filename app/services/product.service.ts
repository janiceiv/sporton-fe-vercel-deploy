import { fetchAPI } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> =>{
  return await fetchAPI<Product[]>("/products",{cache: "no-store"})
};

export const getProductDetails =  async (id:string): Promise<Product> => {
  return await fetchAPI<Product>(`/products/${id}`,{cache: "no-store"})

}