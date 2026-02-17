"use client";

import { Shield } from "lucide-react";
import { useState } from "react";

export default function page() {
  /* ==========================
     IMAGE GALLERY STATE
  =========================== */
  const images = [
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ==========================
     REVIEW STATE
  =========================== */
  const [reviews, setReviews] = useState([
    {
      name: "Jessica S.",
      rating: 5,
      title: "Game changer for my workflow",
      text: "The editing guide was a huge bonus I didn't know I needed!",
      time: "2 days ago",
    },
    {
      name: "Marcus R.",
      rating: 5,
      title: "Best value for money",
      text: "For $39 this is a steal. High quality presets.",
      time: "1 week ago",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  /* ==========================
     HANDLE REVIEW SUBMIT
  =========================== */
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newReview = {
      name: form.name.value,
      title: form.title.value,
      text: form.text.value,
      rating,
      time: "Just now",
    };

    setReviews([newReview, ...reviews]);
    form.reset();
    setRating(5);
    setShowModal(false);
  };

  return (
    <div className="bg-main text-gray-900">
      {/* ================= PRODUCT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <div className="relative rounded-xl overflow-hidden bg-gray-100 h-[350px] md:h-[420px]">
            <img
              src={mainImage}
              className="w-full h-full object-cover"
              alt="Product"
            />

            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow text-sm">
              🔍 Preview Content
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setMainImage(img);
                  setActiveIndex(i);
                }}
                className={`w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  activeIndex === i ? "border-green-500" : "border-transparent"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-bangla-regular">
            পূজা স্পেশাল: আটপৌরে পূজা স্পেশাল: আটপৌরে
          </h1>

          <p className="text-gray-600 mb-6 font-bangla-regular text-lg">
            জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ
            হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন
            নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয়
            দুই শূন্য হাতে মুঠো বেঁধে। মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে
            প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে। বিপুল মাংস, কঠিন বর্ম,
            প্রকাণ্ড লেজ নিয়ে জলে স্থলে পৃথুল দেহের যে অমিতাচার প্রবল হয়ে
            উঠেছিল তাতে ধরিত্রীকে দিলে ক্লান্ত করে। প্রমাণ হল আতিশয্যের পরাভব
            অনিবার্য। পরীক্ষায় এটাও স্থির হয়ে গেল যে, প্রশ্রয়ের পরিমাণ যত
            বেশি হয় দুর্বলতার বোঝাও তত দুর্বহ হয়ে ওঠে। নূতন পর্বে প্রকৃতি
            যথাসম্ভব মানুষের বরাদ্দ কম করে দিয়ে নিজে রইল নেপথ্যে। মানুষকে দেখতে
            হল খুব ছোটো, কিন্তু সেটা একটা কৌশল মাত্র। এবারকার জীবযাত্রার পালায়
            বিপুলতাকে করা হল বহুলতায় পরিণত। মহাকায় জন্তু ছিল প্রকাণ্ড একলা,
            মানুষ হল দূরপ্রসারিত অনেক
          </p>

          <div className="border border-border rounded-xl p-6  bg-subMain">
            <div className="flex justify-between text-sm text-gray-500">
              <span className="line-through">$89.00 USD</span>
              <span className="text-yellow-500">
                {"★".repeat(Math.round(averageRating))}
                <span className="text-gray-500 ml-2">
                  ({reviews.length} reviews)
                </span>
              </span>
            </div>

            <div className="text-4xl font-black my-4">
              $39.00{" "}
              <span className="text-sm font-semibold text-gray-500">USD</span>
            </div>

            <button className="w-full bg-contrast hover:bg-contrast/95 duration-200 text-white py-3 rounded-lg font-semibold transition">
              Buy Now →
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center gap-1">
              <span>
                <Shield size={16} />
              </span>{" "}
              Secure checkout • 100% Money-back Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="border-t border-zinc-300 py-16 bg-main">
        <div className="max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-[300px_1fr] gap-12">
          {/* LEFT SUMMARY */}
          <div className="bg-subMain p-6 rounded-xl shadow-sm h-max">
            <div className="text-center">
              <div className="text-5xl font-black">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-yellow-500 text-lg">
                {"★".repeat(Math.round(averageRating))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Based on {reviews.length} reviews
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-6 w-full bg-gray-700 text-white py-2 rounded-lg"
            >
              Write a Review
            </button>
          </div>

          {/* RIGHT REVIEWS */}
          <div className="flex flex-col gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between mb-2 text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">{r.name}</span>
                  <span>{r.time}</span>
                </div>

                <div className="text-yellow-500 text-sm mb-2">
                  {"★".repeat(r.rating)}
                </div>

                <h3 className="font-bold mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Write a Review</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="border p-2 rounded"
              />
              <input
                name="title"
                required
                placeholder="Review Title"
                className="border p-2 rounded"
              />
              <textarea
                name="text"
                required
                placeholder="Your Review"
                className="border p-2 rounded h-24"
              />

              <div className="flex gap-2 text-2xl cursor-pointer">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => setRating(num)}
                    className={
                      num <= rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-2 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
