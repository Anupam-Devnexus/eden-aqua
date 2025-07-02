import { create } from "zustand";

  const getProductStore = create((set) => ({
  products: [], 
    error: null,
    loading: false,
    fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
        const response = await fetch('https://edenaqua-production.up.railway.app/product/getallproducts');
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        set({ products: data, loading: false });
        } catch (error) {
        set({ error: error.message, loading: false });
        }
    }
}));

export default getProductStore;