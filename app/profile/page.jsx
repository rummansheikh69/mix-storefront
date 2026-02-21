"use client"
import { Mail, Phone, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

export default function page() {
  const {authUser,isChangingPass,changePass,isChangingEmail,changeEmail} = useAuthStore()

  const [formData, setFormData] =useState({
    oldPass:"",
    newPass:""
  })

  const [emailData,setEmailData] = useState({
email:""
  })

  const handleSubmit =(e) =>{
    e.preventDefault()
    changePass(formData)
  }
  const handleEmailSubmit =(e) =>{
    e.preventDefault()
    changeEmail(emailData)
  }
  return (
    <div className="min-h-screen bg-main text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-12">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c9d3c6]">
              <Image
                src="https://i.pravatar.cc/300"
                alt="Profile"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-semibold">{authUser?.name}</h1>

              <div className="mt-3 space-y-1 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {authUser?.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right">
            <p className="text-sm tracking-wider text-gray-500">
              YOUR POSITION
            </p>
            <div className="mt-2 inline-block bg-[#7b8b6d] text-white px-6 py-3 rounded-md text-2xl font-semibold">
              20
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* ================= VERIFY PROFILE ================= */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-[#7b8b6d]" />
            <h2 className="text-2xl font-semibold">Verify Profile</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Enter NID"
              className="border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
            />
            <input
              type="text"
              placeholder="Confirm Phone"
              className="border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
            />
            <input
              type="text"
              placeholder="Full Address"
              className="border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
            />
          </div>

          <button className="mt-6 bg-[#7b8b6d] text-white px-8 py-3 rounded-md hover:bg-[#6c7b60] transition">
            Verify Identity →
          </button>
        </div>

        {/* ================= CHANGE EMAIL + PASSWORD ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Change Email */}
          <form onSubmit={handleEmailSubmit}>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-[#7b8b6d]" />
              <h2 className="text-xl font-semibold">Change Email</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <label className="block text-sm mb-2">New Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={emailData.email}
                onChange={(e)=> setEmailData({email:e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
              />

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                {isChangingEmail? "Changing...": "Change Email"}
              </button>
            </div>
          </form>

          {/* Change Password */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-[#7b8b6d]" />
              <h2 className="text-xl font-semibold">Change Password</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Old Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.oldPass}
                    onChange={(e)=>setFormData({...formData, oldPass:e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.newPass}
                    onChange={(e)=>setFormData({...formData, newPass:e.target.value})}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7b8b6d]"
                  />
                </div>
              </div>

              <button type="submit" className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                {isChangingPass ? "Changing": "Confirm Change"}
              </button>
            </div>
          </form>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-20 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Minimal Store. All rights reserved.
        </div>
      </div>
    </div>
  );
}
