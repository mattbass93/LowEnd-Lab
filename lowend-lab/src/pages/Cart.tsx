import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart
    .reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return acc + price * item.quantity;
    }, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide 🛒</h1>
        <Link to="/" className="text-yellow-500 hover:underline">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white shadow p-4 rounded"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded hover:scale-105 transition"
              />
            </Link>

            <div className="flex-1">
              <Link
                to={`/product/${item.id}`}
                className="text-base font-semibold text-black hover:text-yellow-500 transition"
              >
                {item.name}
              </Link>

              {/* Gestion des quantités */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-7 h-7 rounded bg-gray-200 hover:bg-gray-300 text-black text-lg"
                >
                  –
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded bg-gray-200 hover:bg-gray-300 text-black text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="font-semibold">{item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white rounded shadow flex justify-between items-center">
        <span className="font-semibold text-lg">Total : {total} €</span>
        <Link
          to="/checkout"
          className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition font-semibold"
        >
          Finaliser la commande →
        </Link>
      </div>
    </div>
  );
}
