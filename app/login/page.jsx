import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[380px] px-10 py-12 text-center shadow-md rounded-md">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <Image src={"/logo.png"} width={120} height={120} alt="Logo" />

          <p className="text-xs text-gray-500">WELCOME BACK</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="text-left">
            <label className="text-xs text-gray-600 uppercase mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-sm"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="text-xs text-gray-600 uppercase mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none p-2 bg-transparent text-sm"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 text-sm tracking-widest hover:bg-gray-800 transition rounded"
          >
            LOG IN
          </button>
        </form>

        {/* Register */}
        <Link href="/register">
          <div className="mt-6 text-sm">
            <p>
              Not a member?{" "}
              <a href="#" className="font-bold text-black hover:underline">
                Create an Account
              </a>
            </p>
          </div>
        </Link>

        {/* Footer */}
        <footer className="mt-8 text-[10px] text-gray-400">
          <p>© {new Date().getFullYear()} LUXE. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
