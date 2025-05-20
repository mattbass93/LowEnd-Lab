import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default App;
