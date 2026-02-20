import Image from "next/image";

export default function page() {
  return (
    <section className="bg-[#f6f4f0] text-black py-16">
      <div className=" max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Our Story</h1>
          <span className="block w-16 h-[3px] bg-[#7b8b6d] mx-auto mt-3 rounded-full"></span>
        </div>

        {/* Philosophy + Craft */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Philosophy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#e9efe3] p-2 rounded-full text-lg">🌱</div>
              <h2 className="font-extrabold text-lg">The Philosophy</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              PixelMastery began with a simple idea: digital tools should be as
              beautifully crafted as physical objects. We believe that the right
              digital environment fosters creativity. Our presets, guides, and
              templates are designed not just to edit, but to inspire. We focus
              on clean lines, intuitive workflows, and a minimalist aesthetic
              that clears the clutter from your creative process.
            </p>
          </div>

          {/* Craft */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#e9efe3] p-2 rounded-full text-lg">📦</div>
              <h2 className="font-extrabold text-lg">The Craft</h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Beyond the screen, we value the tangible. Our foray into physical
              goods reflects our obsession with quality materials and
              sustainable practices. Whether it's a sketchbook or apparel, every
              item is sourced responsibly and designed to last. We bridge the
              gap between the digital creator's lifestyle and the physical world
              they inhabit, ensuring quality in every touchpoint.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-20 bg-white rounded-2xl shadow-md py-12 px-6 sm:px-10 text-center">
          <h2 className="text-2xl font-extrabold mb-12">Our Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div>
              <div className="w-14 h-14 mx-auto bg-[#edf2e7] rounded-full flex items-center justify-center text-xl text-[#6c7b60] mb-4">
                👁
              </div>
              <h3 className="font-extrabold text-sm mb-3">Transparency</h3>
              <p className="text-sm text-gray-600 leading-6">
                We believe in open processes. From how we build our presets to
                where we source our fabrics, we share the journey with you.
              </p>
            </div>

            {/* Value 2 */}
            <div>
              <div className="w-14 h-14 mx-auto bg-[#edf2e7] rounded-full flex items-center justify-center text-xl text-[#6c7b60] mb-4">
                💎
              </div>
              <h3 className="font-extrabold text-sm mb-3">Quality</h3>
              <p className="text-sm text-gray-600 leading-6">
                Good enough isn't in our vocabulary. We iterate relentlessly to
                ensure every pixel and every stitch meets our exacting
                standards.
              </p>
            </div>

            {/* Value 3 */}
            <div>
              <div className="w-14 h-14 mx-auto bg-[#edf2e7] rounded-full flex items-center justify-center text-xl text-[#6c7b60] mb-4">
                🚀
              </div>
              <h3 className="font-extrabold text-sm mb-3">Innovation</h3>
              <p className="text-sm text-gray-600 leading-6">
                We don’t follow trends; we look for better ways to solve
                problems. Our products evolve constantly based on real creator
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
