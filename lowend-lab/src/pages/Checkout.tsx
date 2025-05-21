import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTransition from "../components/PageTransition";


export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  note: "",
});

  const [loading, setLoading] = useState(false);


  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + price * item.quantity;
  }, 0).toFixed(2);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};


  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    clearCart();
    navigate("/confirmation");
  }, 1500); // délai simulé
};


  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide 🛒</h1>
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Finaliser la commande</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        {/* Formulaire client */}
        <div className="space-y-4">
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Nom complet"
    className="w-full px-4 py-2 border rounded"
    required
  />
  <input
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Adresse email"
    type="email"
    className="w-full px-4 py-2 border rounded"
    required
  />
  <input
    name="phone"
    onChange={handleChange}
    placeholder="Téléphone"
    type="tel"
    className="w-full px-4 py-2 border rounded"
    required
  />
  <input
    name="address"
    value={form.address}
    onChange={handleChange}
    placeholder="Adresse de livraison"
    className="w-full px-4 py-2 border rounded"
    required
  />
  <div className="grid grid-cols-2 gap-4">
    <input
      name="zip"
      onChange={handleChange}
      placeholder="Code postal"
      className="w-full px-4 py-2 border rounded"
      required
    />
    <input
      name="city"
      onChange={handleChange}
      placeholder="Ville"
      className="w-full px-4 py-2 border rounded"
      required
    />
  </div>
  <select
    name="country"
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded"
    required
  >
    <option value="">Pays</option>
    <option value="France">France</option>
    <option value="Belgique">Belgique</option>
    <option value="Suisse">Suisse</option>
    <option value="Suisse">USA</option>
  </select>
  <textarea
    name="note"
    onChange={handleChange}
    placeholder="Message au livreur (facultatif)"
    className="w-full px-4 py-2 border rounded h-20"
  />
</div>


        {/* Résumé panier */}
        <div className="bg-white shadow rounded p-4 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">Résumé de la commande</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-sm">
              <span>{item.name} x{item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="border-t pt-2 font-bold text-right">Total : {total} €</div>
          <button
  type="submit"
  disabled={loading}
  className={`mt-4 w-full py-2 rounded transition font-semibold ${
    loading
      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
      : "bg-yellow-400 text-black hover:bg-yellow-300"
  }`}
>
  {loading ? "Traitement..." : "Passer commande"}
</button>

        </div>
      </form>
    </div>
    </PageTransition>
  );
}
