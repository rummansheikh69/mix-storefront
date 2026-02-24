import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useReviewStore = create((set, get) => ({
  reviews: [],
  isLoading: false,
  isSubmitting: false,

  fetchReviews: async (productId) => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get(`/utils/reviews/${productId}`);
      set({ reviews: res.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching reviews", error);
      set({ isLoading: false });
    }
  },

  submitReview: async (productId, { comment, rating }) => {
    try {
      set({ isSubmitting: true });
<<<<<<< HEAD

      const res = await axiosInstance.post(`/user/reviews/${productId}`, {
=======
      const res = await axiosInstance.post(`/user/review/${productId}`, {
        name,
>>>>>>> f90eece20ce03dc7bc1baa3cec4ae1c0591727c2
        comment,
        rating,
      });

      set((state) => ({
        reviews: Array.isArray(state.reviews)
          ? [res.data, ...state.reviews]
          : [res.data],
      }));

      toast.success("Review submitted successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      set({ isSubmitting: false });
    }
  },
}));
