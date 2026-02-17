export default function page() {
  return (
    <div className="bg-main text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs tracking-widest text-gray-400">
            LEGAL CLARITY
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold mt-3">
            Terms of Service
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 w-full">
            <div className="bg-white rounded-xl p-6 shadow-sm lg:sticky lg:top-24">
              <h4 className="font-semibold mb-6">Quick Links</h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#general"
                    className="text-gray-600 hover:text-black transition"
                  >
                    General Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#digital"
                    className="text-gray-600 hover:text-black transition"
                  >
                    Digital Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="#shipping"
                    className="text-gray-600 hover:text-black transition"
                  >
                    Clothing Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#refund"
                    className="text-gray-600 hover:text-black transition"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#usage"
                    className="text-gray-600 hover:text-black transition"
                  >
                    Usage Rights
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-600 hover:text-black transition"
                  >
                    Privacy & Data
                  </a>
                </li>
              </ul>

              <div className="mt-10 text-sm">
                <p className="text-gray-500 mb-2">Need more help?</p>
                <a href="#" className="font-medium hover:underline">
                  Contact Support →
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Section 1 */}
            <section id="general" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  01
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  General Conditions
                </h2>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                By agreeing to these Terms, you confirm that you meet the legal
                requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to refuse service at any time.
              </p>
            </section>

            {/* Section 2 */}
            <section id="digital" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  02
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Digital Product Licensing
                </h2>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h4 className="font-semibold mb-2">Grant of License</h4>
                <p className="text-gray-600">
                  Digital products come with a non-transferable license.
                </p>
              </div>

              <p className="text-gray-600 mb-3">
                <strong>Permitted Use:</strong> Personal & commercial editing
                allowed.
              </p>
              <p className="text-gray-600">
                <strong>Prohibited Use:</strong> Reselling files is prohibited.
              </p>
            </section>

            {/* Section 3 */}
            <section id="shipping" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  03
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Clothing Shipping & Handling
                </h2>
              </div>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Domestic: 1–3 days</li>
                <li>International: 10–20 days</li>
                <li>Lost packages not our responsibility after shipment</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="refund" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  04
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Refund Policy
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-2">Digital Products</h4>
                  <p className="text-gray-600">No refunds after purchase.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-2">Physical Clothing</h4>
                  <p className="text-gray-600">
                    Returns accepted within 3 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="usage" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  05
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Usage Rights
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                All website content is protected by copyright law.
              </p>
            </section>

            {/* Section 6 */}
            <section id="privacy" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                  06
                </span>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Privacy & Data
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Your personal information is protected under our Privacy Policy.
              </p>
            </section>

            <div className="border-t pt-8 text-sm text-gray-500">
              By continuing to use this website, you agree to these Terms.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
