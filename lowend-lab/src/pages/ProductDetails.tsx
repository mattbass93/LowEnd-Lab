import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { products } from "../data/products";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from "../hooks/useCart";
import { toast } from "react-hot-toast";




export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();


  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const images = product!.images || [product!.image];
  const mainImage = images[currentIndex];

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className=" py-16 px-4">
      <div className="mb-6">
  <Link
    to="/"
    className="inline-flex items-center text-sm text-gray-500 hover:text-yellow-500 transition"
  >
    ← Back to Shop
  </Link>
</div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Galerie d'images */}
        <div className="w-full">
          <div className="relative">
            <div className="relative group overflow-hidden rounded shadow bg-white p-4 h-96 cursor-zoom-in">
  <img
    src={mainImage}
    alt={product.name}
    onClick={() => setShowModal(true)}
    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
  />
</div>

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
          <p className="text-yellow-600 text-5xl font-semibold mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

<button
  onClick={() => {
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`);
  }}
  className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300 transition"
>
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
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-medium text-base text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {product.reviews && (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4">Avis clients</h2>

    {/* Note moyenne */}
    <div className="flex items-center gap-2 mb-4">
      <span className="text-yellow-500 text-xl">
        {"⭐".repeat(
          Math.round(
            product.reviews.reduce((acc, r) => acc + r.rating, 0) /
              product.reviews.length
          )
        )}
      </span>
      <span className="text-sm text-gray-600">
        ({product.reviews.length} avis)
      </span>
    </div>

    {/* Liste des commentaires */}
    <div className="space-y-4">
      {product.reviews.map((review, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <div className="flex justify-between mb-1">
            <span className="font-semibold">{review.user}</span>
            <span className="text-xs text-gray-400">{review.date}</span>
          </div>
          <div className="text-yellow-400 text-sm mb-1">
            {"⭐".repeat(review.rating)}{" "}
            {"☆".repeat(5 - review.rating)}
          </div>
          <p className="text-gray-700 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
)}

      {/* Modale */}
      {showModal && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50 px-4 py-8">
          <div className="relative w-screen max-w-full px-4">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-yellow-400 transition z-50"

              aria-label="Close"
            >
              ×
            </button>

            {/* Flèche gauche (desktop uniquement) */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }
              className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-yellow-400 transition z-40"
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Image principale */}
            <img
              src={mainImage}
              alt="Zoomed product"
              className="w-full h-[80vh] object-contain rounded shadow-lg"
            />

            {/* Flèche droite (desktop uniquement) */}
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
              }
              className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-yellow-400 transition z-40"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Flèches de scroll pour mobile */}
{/* Miniatures avec flèches en mobile */}
{/* Miniatures avec flèches en mobile */}
{/* Miniatures visibles partout */}
<div className="w-full mt-4 flex justify-center">
  <div className="flex items-center gap-2 max-w-5xl w-full px-2 md:px-0">
    {/* Flèche gauche mobile */}
    <button
      onClick={() => thumbnailsRef.current?.scrollBy({ left: -100, behavior: "smooth" })}
      className="w-10 h-20 flex items-center justify-center bg-white text-black rounded border shadow hover:bg-yellow-400 transition flex-shrink-0 md:hidden"
      aria-label="Scroll left"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>

    {/* Miniatures scrollables */}
    <div
      ref={thumbnailsRef}
      className="flex gap-2 overflow-x-auto scrollbar-hide w-full justify-start md:justify-center"
    >
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

    {/* Flèche droite mobile */}
    <button
      onClick={() => thumbnailsRef.current?.scrollBy({ left: 100, behavior: "smooth" })}
      className="w-10 h-20 flex items-center justify-center bg-white text-black rounded border shadow hover:bg-yellow-400 transition flex-shrink-0 md:hidden"
      aria-label="Scroll right"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
</div>




        </div>
      )}
    </div>
  );
}
