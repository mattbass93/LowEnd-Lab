import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function MiniCart() {
  const { cart, totalItems } = useCart();

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return acc + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="relative group">
      {/* Icône Panier + Compteur */}
      <Link to="/cart" className="relative text-xl">
        🛒
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Mini-panier (popover) */}
      {cart.length > 0 && (
        <div className="absolute right-0 mt-3 w-80 bg-white text-black shadow-xl rounded-lg z-50 hidden group-hover:block">
          <div className="p-4 max-h-64 overflow-y-auto divide-y">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 py-2 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain bg-gray-100 rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    x{item.quantity} — {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t px-4 py-3 flex justify-between items-center text-sm">
            <span className="font-medium">Total :</span>
            <span className="font-bold">{getTotal()} €</span>
          </div>

          <div className="px-4 pb-4 text-center">
            <Link
              to="/cart"
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition text-sm font-semibold"
            >
              Voir le panier →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
