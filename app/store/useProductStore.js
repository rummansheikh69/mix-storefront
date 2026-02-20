import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useProductStore = create((set, get) => ({
  products: [],
  page: 1,
  hasMore: true,
  isLoading: false,

  filters: {
    minPrice: "",
    maxPrice: "",
    sort: "newest",
  },

  // 🔄 Set Filters
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  // 🔄 Reset Products (for new filter/sort)
  resetProducts: () =>
    set({
      products: [],
      page: 1,
      hasMore: true,
    }),

  // 🚀 Fetch Products
  fetchProducts: async (reset = false) => {
    const { page, filters, products } = get();

    try {
      set({ isLoading: true });

      const res = await axiosInstance.get("/utils/products", {
        params: {
          page: reset ? 1 : page,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
          sort: filters.sort,
        },
      });

      const newProducts = res.data.products;

      set({
        products: reset ? newProducts : [...products, ...newProducts],
        hasMore: res.data.pagination.hasMore,
        page: reset ? 2 : page + 1,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching products", error);
      set({ isLoading: false });
    }
  },
}));
