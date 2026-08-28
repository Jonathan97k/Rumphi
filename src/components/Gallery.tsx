"use client";

const galleryItems = [
  {
    title: "Honey Jar",
    description: "Our premium honey product",
    color: "from-amber-200 to-amber-300",
  },
  {
    title: "Honeycomb",
    description: "Natural honeycomb from the hive",
    color: "from-amber-300 to-orange-300",
  },
  {
    title: "Pure Honey",
    description: "Golden honey being poured",
    color: "from-amber-400 to-yellow-300",
  },
  {
    title: "Honey Dipper",
    description: "Traditional honey dipper",
    color: "from-amber-200 to-amber-400",
  },
  {
    title: "Bees at Work",
    description: "Our busy pollinators",
    color: "from-yellow-200 to-amber-300",
  },
  {
    title: "Natural Landscape",
    description: "Rumphi, Malawi",
    color: "from-green-200 to-amber-200",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            GALLERY
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            A glimpse into the world of Rumphi Honey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/30 rounded-full" />
                  <p className="text-amber-900 font-medium text-sm">
                    {item.title}
                  </p>
                  <p className="text-amber-700 text-xs">{item.description}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/20 transition-colors flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-amber-600 text-sm mt-6">
          Replace placeholders with actual photography
        </p>
      </div>
    </section>
  );
}