"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full shadow-inner" />
                  <p className="text-amber-700 font-medium">
                    Rumphi Natural Landscape
                  </p>
                  <p className="text-amber-600 text-sm">
                    Replace with actual image
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full opacity-50 blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              FROM RUMPHI,
              <br />
              WITH NATURE&apos;S GOODNESS
            </h2>

            <div className="space-y-4 text-amber-800">
              <p className="text-lg">
                Rumphi Honey brings the natural goodness of honey from Rumphi,
                Malawi, to customers who value quality and simplicity.
              </p>

              <p className="text-lg">
                Our focus is simple: natural honey, carefully packed and made
                available to households, businesses and honey lovers.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  Natural Source
                </span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  Quality Packed
                </span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-900 font-semibold">
                  From Malawi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}