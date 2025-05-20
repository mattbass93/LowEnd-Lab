export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fender Jazz Bass",
    description: "A legendary 4-string bass with smooth playability and punchy tone.",
    price: "999 €",
    image: "/products/fender_jazz_bass.jpg",
    category: "bass",
    isNew: true,
  },
  {
    id: 2,
    name: "Ampeg BA-210 Amp",
    description: "Powerful 2x10'' bass amp with classic Ampeg tone.",
    price: "549 €",
    image: "/products/ampegba210.jpg",
    category: "amp",
  },
  {
    id: 3,
    name: "Darkglass Anagram",
    description: "Premium preamp and distortion pedal for modern bassists.",
    price: "1090 €",
    image: "/products/darkglassanagram.png",
    category: "pedal",
  },
];
