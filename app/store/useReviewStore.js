import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useReviewStore = create((set, get) => ({
  reviews: [],
  isLoading: false,

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

  submitReview: async (productId, { name, comment, rating }) => {
    try {
      set({ isSubmitting: true });
      const res = await axiosInstance.post(`/user/review/${productId}`, {
        name,
        comment,
        rating,
      });
      // add new review to state
      set((state) => ({ reviews: [res.data, ...state.reviews] }));
    } catch (err) {
      console.error("Error submitting review", err);
    } finally {
      set({ isSubmitting: false });
    }
  },
}));
