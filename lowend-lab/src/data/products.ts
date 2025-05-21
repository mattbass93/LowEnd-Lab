export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  images: string[];
  specs?: { [key: string]: string };
  category?: string;
  isNew?: boolean;
  reviews?: Review[];
}


export const products: Product[] = [
  {
    id: 1,
    name: "Fender Jazz Bass",
    description: "A legendary 4-string bass with smooth playability and iconic tone. Trusted by professional bassists worldwide.",
    price: "999 €",
    image: "/products/jazz_bass/1.png",
    images: [
      "/products/jazz_bass/1.png",
      "/products/jazz_bass/2.png",
      "/products/jazz_bass/3.png",
      "/products/jazz_bass/4.png",
      "/products/jazz_bass/5.png",
      "/products/jazz_bass/6.png",
      "/products/jazz_bass/7.png",
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
      weight: "4.2 kg",
      electronics: "Passive",
      frets: "20",
      bridge: "Standard Vintage Style",
      caseIncluded: "Yes",
    },
    category: "Basses électriques",
    isNew: true,
    reviews: [
      {
        user: "Alex B.",
        rating: 5,
        comment: "Son incroyable, très confortable à jouer. Je recommande à tous les amoureux du groove.",
        date: "2024-10-12",
      },
      {
        user: "Mila D.",
        rating: 4,
        comment: "Bonne qualité, finitions impeccables, un peu lourde pour les longues sessions.",
        date: "2024-08-22",
      },
      {
        user: "Theo G.",
        rating: 5,
        comment: "La meilleure basse que j’ai eue entre les mains !",
        date: "2024-07-15",
      }
    ]
  }
];
