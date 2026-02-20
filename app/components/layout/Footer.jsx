"use client";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaSlack,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "About us", href: "/about-us" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Terms & Conditions", href: "/tos" },
    { label: "Privacy Policy", href: "/policy" },
  ];
  return (
    <footer className="bg-subMain">
      {/* ================= TOP CONTACT BAR ================= */}
      <div className="max-w-6xl mx-auto bg-subMain pt-8 px-3 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-border pb-10">
          {/* Visit Us */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-gray-600 text-lg" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Visit Us</h4>
              <p className="text-sm text-gray-600">New Orlean, USA</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-gray-600 text-lg" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Call Us</h4>
              <p className="text-sm text-gray-600">+12 958 648 597</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-4">
            <FaClock className="text-gray-600 text-lg" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Working Hours
              </h4>
              <p className="text-sm text-gray-600">
                Mon - Sat: 10:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-600 text-lg" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Email Us</h4>
              <p className="text-sm text-gray-600">Shopcart@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className=" pt-10 pb-10 max-w-6xl mx-auto px-3 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              LABIB<span className="text-green-600">CART</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </p>

            <div className="flex items-center gap-4">
              {[FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaSlack].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-300 rounded-full cursor-pointer transition hover:bg-black hover:text-white"
                  >
                    <Icon size={16} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Categories</h3>
            <ul className="space-y-3">
              {["Saree", "Telecom Offers", "Digital Products"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black transition"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />

            <button
              onClick={() => getElementById("cart-drawer").open()}
              className="w-full p-3 bg-slate-900 text-white rounded-lg transition hover:bg-slate-800"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 mb-3 border-t border-gray-300"></div>
        <div className=" w-full">
          <h2 className=" text-center text-zinc-400">
            &copy; {new Date().getFullYear()} Ekatan All rights reserved
          </h2>
        </div>
      </div>
    </footer>
  );
}
