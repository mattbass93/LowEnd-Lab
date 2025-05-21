import { products } from '../data/products';
import { Link } from 'react-router-dom';


export default function FeaturedProducts() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Gear</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105 flex flex-col"
          >
            <img src={product.image} alt={product.name} className="w-full h-72 object-contain pt-2" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-yellow-600 font-bold">{product.price}</p>
              <Link
                  to={`/product/${product.id}`}
                  className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
                >
                  View
               </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
