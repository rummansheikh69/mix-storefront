"use client";

import { useRef } from "react";

export default function page() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 350;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f7f5f2] text-black">
      {/* ================= HEADER ================= */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Get in <br /> Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          We're here to help you find exactly what you need. Reach out to our
          dedicated support team.
        </p>
      </section>

      {/* ================= SLIDER ================= */}
      <section className=" flex items-center justify-center pb-20 relative max-w-6xl mx-auto">
        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">
          {[
            {
              icon: "✉",
              title: "Direct Email",
              text: "For general inquiries and sales questions.",
              link: "hello@storeminimal.com",
            },

            {
              icon: "💬",
              title: "Live Support",
              text: "Instant answers during business hours.",
              link: "Start a Chat",
            },
            {
              icon: "📞",
              title: "Call Support",
              text: "Talk with our support team directly.",
              link: "Call Now",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[320px] bg-[#a9b99c] rounded-2xl p-8 flex flex-col justify-center"
            >
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full mb-6 text-xl">
                {card.icon}
              </div>

              <h2 className="font-extrabold text-xl mb-2">{card.title}</h2>
              <p className="text-sm mb-4">{card.text}</p>

              {card.link && (
                <span className="font-bold border-b-2 border-black w-fit text-sm">
                  {card.link}
                </span>
              )}

              {card.address && (
                <span className="font-bold text-sm">{card.address}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-300 my-10" />

      {/* ================= GLOBAL TIMINGS ================= */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black mb-4">Global Timings</h2>
            <p className="text-gray-600">
              Our support team is available across multiple time zones to ensure
              you get the help you need, when you need it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                region: "NORTH AMERICA",
                days: "Mon - Fri",
                time: "9:00 AM - 6:00 PM EST",
              },
              {
                region: "EUROPE",
                days: "Mon - Fri",
                time: "9:00 AM - 5:00 PM GMT",
              },
              {
                region: "ASIA PACIFIC",
                days: "Mon - Fri",
                time: "10:00 AM - 7:00 PM JST",
              },
              {
                region: "WEEKEND SUPPORT",
                days: "Sat - Sun",
                time: "10:00 AM - 2:00 PM EST",
              },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-xs font-extrabold text-contrast mb-2 tracking-widest">
                  {item.region}
                </h4>
                <h3 className="font-black text-lg mb-1">{item.days}</h3>
                <p className="text-sm text-gray-600">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
