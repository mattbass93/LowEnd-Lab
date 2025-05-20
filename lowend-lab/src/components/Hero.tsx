import HeroPicture from '../assets/logos/hero.png'

export default function Hero() {
  return (
    <section className="bg-white text-black pl-4 flex flex-col md:flex-row items-center justify-between">
      
      {/* Texte */}
      <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Gear up your groove.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover premium gear crafted for bassists. From thumping tones to silky lows — we’ve got you covered.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={HeroPicture}
          alt="Bass Hero"
          className="object-cover"
        />
      </div>
    </section>
  );
}
