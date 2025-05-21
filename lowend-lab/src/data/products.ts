export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string
  images: string[];
  specs?: { [key: string]: string }
  category?: string;
  isNew?: boolean;
}

export const products: Product[] = [
   {
    id: 1,
    name: "Fender Jazz Bass",
    description: "A legendary 4-string bass with smooth playability.",
    price: "999 €",
    image: "/products/jazz_bass/jazz_bass_1.png",
    images: [
      "/products/jazz_bass/jazz_bass_1.png", 
      "/products/jazz_bass/jazz_bass_2.png",
      "/products/jazz_bass/jazz_bass_3.png",
      "/products/jazz_bass/jazz_bass_4.png",
      "/products/jazz_bass/jazz_bass_5.png",
      "/products/jazz_bass/jazz_bass_6.png",
      "/products/jazz_bass/jazz_bass_7.png",
    ],
    specs: {
      strings: "4",
      body: "Alder",
      neck: "Maple",
      fretboard: "Rosewood",
      scale: '34"',
      stringSpacing: "19 mm",
      pickups: "2x Single Coil",
      finish: "Gloss Sunburst",
      weight: "4.2 kg"
    }
   },
];
