"use client";
import { useReviewStore } from "@/app/store/useReviewStore";
import { useState } from "react";

const ReviewForm = ({ productId }) => {
  const { submitReview } = useReviewStore();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReview(productId, { name, comment, rating });
    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your Review"
        className="border p-2 rounded"
        required
      />
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            onClick={() => setRating(num)}
            className={
              num <= rating
                ? "text-yellow-500 cursor-pointer text-xl "
                : "text-gray-300 cursor-pointer text-xl "
            }
          >
            ★
          </span>
        ))}
      </div>
      <button className="bg-green-500 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default ReviewForm;
