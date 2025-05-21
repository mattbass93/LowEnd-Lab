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
  },
  {
    id: 2,
    name: "Ampeg Bass Head",
    description: "A powerful, road-tested bass head delivering punch, depth and clarity for any gig.",
    price: "799 €",
    image: "/products/ampeg_head/1.jpeg",
    images: [
      "/products/ampeg_head/1.jpeg",
      "/products/ampeg_head/2.jpg",
      "/products/ampeg_head/3.jpg",
    ],
    specs: {
      power: "500W RMS",
      tubes: "No",
      inputs: "2",
      EQ: "3-band with Ultra Lo/Hi",
      DI: "Yes",
      weight: "8 kg",
      dimensions: "48 x 26 x 10 cm"
    },
    category: "Amplis",
    isNew: false,
    reviews: [
    {
      user: "Julien R.",
      rating: 5,
      comment: "Ampeg reste une valeur sûre. Son puissant, très clair en live.",
      date: "2024-06-30"
    },
    {
      user: "Chloé S.",
      rating: 4,
      comment: "Un peu encombrant mais rien à redire sur le son.",
      date: "2024-05-12"
    }
  ]
  },
  {
    id: 3,
    name: "Dingwall NG-3",
    description: "A high-end multiscale bass made for modern tone and aggressive playability.",
    price: "1890 €",
    image: "/products/dingwall_ng-3/1.jpg",
    images: [
      "/products/dingwall_ng-3/1.jpg",
      "/products/dingwall_ng-3/2.jpg",
      "/products/dingwall_ng-3/3.jpg",
      "/products/dingwall_ng-3/4.jpg",
    ],
    specs: {
      strings: "5",
      body: "Alder",
      neck: "Maple",
      fretboard: "Maple",
      pickups: "3x FD3-N",
      scale: "34–37” Multiscale",
      finish: "Matte Blackburst",
      electronics: "Darkglass Tone Capsule"
    },
    category: "Basses électriques",
    isNew: true,
    reviews: [
    {
      user: "Nico D.",
      rating: 5,
      comment: "Un monstre de précision. Les graves sont énormes.",
      date: "2024-03-02"
    },
    {
      user: "Sarah M.",
      rating: 4,
      comment: "Très moderne. J’aurais aimé un manche un peu plus fin.",
      date: "2024-04-10"
    }
  ]
  },
  {
    id: 4,
    name: "Boss TU-3 Tuner",
    description: "Reliable, road-tough pedal tuner with bright LED display and true bypass.",
    price: "89 €",
    image: "/products/boss_tuner/1.jpg",
    images: [
      "/products/boss_tuner/1.jpg",
      "/products/boss_tuner/2.jpg",
      "/products/boss_tuner/3.jpg",
      "/products/boss_tuner/4.jpg", 
    ],
    specs: {
      type: "Chromatic",
      bypass: "True Bypass",
      display: "21-segment LED",
      input: "Mono",
      power: "9V DC or Battery"
    },
    category: "Pédales & Effets",
    isNew: false,
    reviews: [
    {
      user: "Marc V.",
      rating: 5,
      comment: "Indispensable sur mon pedalboard. Précis et fiable.",
      date: "2024-01-15"
    }
  ]
  },
  {
    id: 5,
    name: "ESP LTD B-205",
    description: "Affordable 5-string bass with active electronics and sleek modern design.",
    price: "549 €",
    image: "/products/esp_ltd/1.jpg",
    images: [
      "/products/esp_ltd/1.jpg",
      "/products/esp_ltd/2.jpg",
      "/products/esp_ltd/3.jpg",
    ],
    specs: {
      strings: "5",
      body: "Ash",
      neck: "Maple/Rosewood",
      fretboard: "Rosewood",
      pickups: "ESP Designed SB-5",
      electronics: "Active 3-Band EQ",
      finish: "Natural Satin"
    },
    category: "Basses électriques",
    reviews: [
    {
      user: "Fred G.",
      rating: 4,
      comment: "Bon rapport qualité-prix. L’électronique active est un plus.",
      date: "2024-02-20"
    },
    {
      user: "Isabelle F.",
      rating: 3,
      comment: "Bonne basse pour débuter à 5 cordes.",
      date: "2023-12-10"
    }
  ]
  },
  {
    id: 6,
    name: "Ibanez BTB746",
    description: "Modern 6-string bass with extended range and premium hardware for technical players.",
    price: "999 €",
    image: "/products/ibanez_btb/1.avif",
    images: [
      "/products/ibanez_btb/1.avif",
      "/products/ibanez_btb/2.avif",
      "/products/ibanez_btb/3.avif",
      "/products/ibanez_btb/4.avif",
      "/products/ibanez_btb/5.avif",
    ],
    specs: {
      strings: "6",
      body: "Mahogany with Ash top",
      neck: "5-piece Maple/Walnut",
      fretboard: "Rosewood",
      pickups: "Bartolini BH2",
      electronics: "Active 3-band EQ",
      finish: "Deep Twilight Low Gloss"
    },
    category: "Basses électriques",
    reviews: [
    {
      user: "Kevin L.",
      rating: 5,
      comment: "Polyvalente et ultra confortable. Manche large mais fluide.",
      date: "2024-03-25"
    }
  ]
  },
  {
    id: 7,
    name: "Mesa Boogie Subway D-800",
    description: "Compact yet powerful class D bass amp head from Mesa, perfect for studio and stage.",
    price: "1190 €",
    image: "/products/mesa_boogie_head/1.png",
    images: [
      "/products/mesa_boogie_head/1.png",
    ],
    specs: {
      power: "800W",
      weight: "2.3 kg",
      inputs: "1",
      impedance: "4/8 Ohm",
      DI: "Balanced XLR",
      EQ: "4-band with Voicing filter"
    },
    category: "Amplis",
    isNew: true,
    reviews: [
    {
      user: "Jean E.",
      rating: 5,
      comment: "Incroyablement léger pour autant de puissance.",
      date: "2024-04-02"
    },
    {
      user: "Camille D.",
      rating: 5,
      comment: "Parfait en studio, son très précis.",
      date: "2024-02-28"
    }
  ]
  },
  {
    id: 8,
    name: "Fender Precision Bass",
    description: "Classic tone, solid build and endless vibe. The foundation of bass since the '50s.",
    price: "1099 €",
    image: "/products/p_bass/1.png",
    images: [
      "/products/p_bass/1.png",
      "/products/p_bass/2.png",
      "/products/p_bass/3.png",
      "/products/p_bass/4.png",
      "/products/p_bass/5.png",
      "/products/p_bass/6.png",
      "/products/p_bass/7.png",
    ],
    specs: {
      strings: "4",
      body: "Alder",
      neck: "Maple",
      fretboard: "Maple",
      pickups: "Split Single Coil",
      finish: "Olympic White",
      scale: '34"',
      caseIncluded: "Yes"
    },
    category: "Basses électriques",
      reviews: [
    {
      user: "Thomas A.",
      rating: 5,
      comment: "Le son Fender classique. Aucun autre instrument ne remplace une P-Bass.",
      date: "2024-03-10"
    }
  ]
  }
];
