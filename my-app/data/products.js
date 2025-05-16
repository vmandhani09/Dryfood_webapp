  const products = [
    {
      id: "ajneer-figs",
      name: "Ajneer (Figs)",
      image: "/products/anjeer.png",
      description: "Premium quality dried figs for daily health and energy.",
      weights: [
        { label: "250g", price: 180 },
        { label: "500g", price: 350 },
        { label: "1kg", price: 680 }
      ],
      isFeatured: true,
      category: "Figs",
      sku: "FIGS_AJNEER",
      tags: ["figs", "dried fruit", "health snack"],
      additionalInfo: "100% naturally dried and free from preservatives. Store in a cool, dry place.",
      reviews: [],
      relatedProducts: ["kaju-cashew", "badam-almond", "pista-pistachio"]
    },
    {
      id: "kaju-cashew",
      name: "Kaju (Cashew)",
      image: "/products/kaju.png",
      description: "Whole cashews packed with taste and nutrition.",
      weights: [
        { label: "250g", price: 240 },
        { label: "500g", price: 450 },
        { label: "1kg", price: 880 }
      ],
      isFeatured: true,
      category: "Cashew",
      sku: "CASHEW_KAJU",
      tags: ["cashew", "nuts", "healthy snack"],
      additionalInfo: "Vacuum packed for freshness. Store in an airtight container.",
      reviews: [],
      relatedProducts: ["ajneer-figs", "badam-almond"]
    },
    {
      id: "badam-almond",
      name: "Badam (Almonds)",
      image: "/products/badam.png",
      description: "Rich, crunchy almonds perfect for snacks or gifts.",
      weights: [
        { label: "250g", price: 220 },
        { label: "500g", price: 400 },
        { label: "1kg", price: 770 }
      ],
      isFeatured: false,
      category: "Almond",
      sku: "ALMOND_BADAM",
      tags: ["almonds", "nuts", "gifting"],
      additionalInfo: "Rich in nutrients. Store in a cool, dry place away from sunlight.",
      reviews: [],
      relatedProducts: ["kaju-cashew", "pista-pistachio"]
    },
    {
      id: "pista-pistachio",
      name: "Pista (Pistachios)",
      image: "/products/pista.png",
      description: "Premium roasted pistachios with a rich taste.",
      weights: [
        { label: "250g", price: 260 },
        { label: "500g", price: 490 },
        { label: "1kg", price: 940 }
      ],
      isFeatured: false,
      category: "Pistachio",
      sku: "PISTACHIO_PISTA",
      tags: ["pistachio", "roasted nuts", "snack"],
      additionalInfo: "Salted and roasted. Store in an airtight container after opening.",
      reviews: [],
      relatedProducts: ["badam-almond", "ajneer-figs"]
    }
  ];

  export default products;
