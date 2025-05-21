import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalItems } = useCart();


  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide 🛒</h1>
        <Link
          to="/"
          className="text-yellow-500 hover:underline"
        >
          ← Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Votre panier ({totalItems} article{totalItems > 1 ? "s" : ""})</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-white rounded shadow"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.price}</p>
              <p className="text-sm text-gray-400">Quantité : {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <p className="text-xl font-bold mb-4">
          Total : {totalPrice.toFixed(2)} €
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Vider le panier
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}
