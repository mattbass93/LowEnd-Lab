import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function Confirmation() {
  return (
    <PageTransition>
    <div className="max-w-2xl mx-auto py-24 text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Merci pour votre commande 🎉</h1>
      <p className="text-gray-700 mb-6">Vous recevrez une confirmation par e-mail sous peu.</p>
      <Link
        to="/"
        className="inline-block bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
      >
        Retour à la boutique
      </Link>
    </div>
    </PageTransition>
  );
}
