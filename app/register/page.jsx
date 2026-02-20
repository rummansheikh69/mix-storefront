"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "../store/useAuthStore";

export default function Register() {
  const { isSigningUp, signUp } = useAuthStore();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="w-[420px] text-center bg-white px-10 py-6 rounded-md shadow-md">
        {/* Logo */}
        <div className="mb-12 flex flex-col items-center">
          <Image src={"/logo.png"} width={120} height={120} alt="Logo" />
          <p className="text-xs tracking-wider text-gray-500">
            CREATE YOUR ACCOUNT
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Name */}
          <div className="text-left">
            <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              required
              className="w-full border-b border-gray-400 focus:border-black outline-none p-2 text-sm bg-transparent"
            />
          </div>
          {/* Email */}
          <div className="text-left">
            <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="w-full border-b border-gray-400 focus:border-black outline-none p-2 text-sm bg-transparent"
            />
          </div>

          {/* Create Password */}
          <div className="text-left">
            <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
              Create Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full border-b border-gray-400 focus:border-black outline-none p-2 text-sm bg-transparent"
            />
          </div>

          {/* Confirm Password */}
          <div className="text-left">
            <label className="text-xs uppercase tracking-wide text-gray-600 mb-2 block">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full border-b border-gray-400 focus:border-black outline-none p-2 text-sm bg-transparent"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required className="w-4 h-4 accent-black" />
            <span>
              I agree to the{" "}
              <Link href="tos" className="underline text-gray-900">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="policy" className="underline text-gray-900">
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 text-xs tracking-widest hover:bg-gray-800 transition rounded"
          >
            REGISTER
          </button>
        </form>

        {/* Login Link */}
        <Link href="/login">
          <div className="mt-8 text-sm text-gray-600">
            Already a member?{" "}
            <a className="underline font-bold text-gray-900">Log In</a>
          </div>
        </Link>

        {/* Footer */}
        <footer className="mt-10 text-[11px] text-gray-400 tracking-wider">
          © {new Date().getFullYear()} LUXE. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}
