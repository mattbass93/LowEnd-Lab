import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = product!.images || [product!.image];
  const mainImage = images[currentIndex];

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Galerie d'images */}
        <div className="w-full">
          {/* Image principale + flèches */}
          <div className="relative">
            {/* Flèche gauche */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-yellow-400 transition z-10"
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Image */}
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-96 object-contain bg-white p-4 rounded shadow"
            />

            {/* Flèche droite */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
              }
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-yellow-400 transition z-10"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Miniatures */}
          <div className="flex gap-2 mt-4 overflow-x-auto max-w-full scrollbar-hide">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`${product.name} ${i + 1}`}
      onClick={() => setCurrentIndex(i)}
      className={`w-20 h-20 flex-shrink-0 object-contain cursor-pointer border rounded transition ${
        i === currentIndex ? "ring-2 ring-yellow-400" : ""
      }`}
    />
  ))}
</div>

        </div>

        {/* Détails produit */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-yellow-600 text-xl font-semibold mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300 transition">
            Add to Cart
          </button>

          {/* Spécifications techniques */}
          {product.specs && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-700">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="uppercase text-xs text-gray-500 tracking-wide">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="font-medium text-base text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lien retour */}
          <div className="mt-10">
            <Link to="/" className="text-sm text-gray-500 hover:underline">← Back to shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
