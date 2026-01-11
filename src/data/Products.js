export const allProducts = [
  // --- Category: Women ---
  { 
    id: 1, 
    name: "Stylish Designer Women Sweaters", 
    price: 355, 
    rating: "4.2", 
    reviews: "5880", 
    img: "/sweater.png", 
    category: "Women",
    desc: "Premium quality wool blend sweater, perfect for winter outings.", 
    details: { neck: "Round Crew Neck", sleeves: "Full Sleeves", fabric: "Fleece Cotton", fit: "Relaxed Fit" }
  },
  { 
    id: 3, 
    name: "Traditional Wedding Lehanga", 
    price: 4500, 
    rating: "4.8", 
    reviews: "1200", 
    img: "/weddingleh.png", 
    category: "Women",
    desc: "Heavy embroidery work designer lehanga for weddings.",
    details: { neck: "Choli Cut", sleeves: "Sleeveless", fabric: "Net & Shantoon", fit: "Custom Tailored" }
  },
  { 
    id: 6, 
    name: "Designer Formal Wear Dress", 
    price: 2899, 
    rating: "4.6", 
    reviews: "1560", 
    img: "/formal.png", 
    category: "Women",
    desc: "Elegant designer dress made with premium silk fabric.",
    details: { neck: "Lapel Collar", sleeves: "Full Sleeves", fabric: "Premium Suiting", fit: "Structured Fit" }
  },
  { 
    id: 7, 
    name: "Casual Top", 
    price: 280, 
    rating: "4.6", 
    reviews: "1430", 
    img: "/tanktop.png", 
    category: "Women",
    desc: "Trendy and lightweight casual top, perfect for summer.",
    details: { neck: "Halter", sleeves: "Sleeveless", fabric: "Stretchable Ribbed", fit: "Bodycon Fit" }
  },
  { 
    id: 8, 
    name: "Classic Cotton Kurti", 
    price: 700, 
    rating: "4.5", 
    reviews: "940", 
    img: "/kurti.png", 
    category: "Women",
    desc: "Comfortable ethnic cotton kurti featuring breathable fabric.",
    details: { neck: "Sweetheart Neck", sleeves: "Sleeveless", fabric: "Georgette", fit: "Straight Cut" }
  },
  { 
    id: 205, 
    name: "Traditional Wedding Wear", 
    price: 8999, 
    rating: "4.7", 
    reviews: "250", 
    img: "/wedding.png", 
    category: "Women",
    desc: "Exclusive wedding collection for a royal look.", 
    details: { fit: "Tailored Fit", fabric: "Silk & Zari", neck: "Mandarin Collar", sleeves: "Full Sleeves" } 
  },

  // --- Category: Men ---
   { 
    id: 103, 
    name: "Black T-shirt", 
    price: 450, 
    rating: "4.2", 
    reviews: "890", 
    img: "/blackshirt.png", 
    category: "Men",
    desc: "Classic black crew neck tee.",
    details: { neck: "Round", sleeves: "Half", fabric: "Cotton", fit: "Regular" }
  },
  { 
    id: 2, 
    name: "Premium Men's Casual Shirt", 
    price: 799, 
    rating: "4.5", 
    reviews: "2140", 
    img: "/casualshirt.png", 
    category: "Men",
    desc: "100% Cotton casual shirt with a modern slim fit.",
    details: { neck: "Spread Collar", sleeves: "Full Roll-up Sleeves", fabric: "Linen Blend", fit: "Regular Fit" }
  },
  { 
    id: 4, 
    name: "Urban Streetwear Hoodie", 
    price: 1299, 
    rating: "4.3", 
    reviews: "3400", 
    img: "/streethoodie.png", 
    category: "Men",
    desc: "Oversized comfortable hoodie with premium fleece fabric.",
    details: { neck: "Hooded", sleeves: "Full Sleeves", fabric: "Heavyweight Fleece", fit: "Standard Fit" }
  },
  { 
    id: 5, 
    name: "Classic Cotton T-Shirt", 
    price: 550, 
    rating: "4.1", 
    reviews: "980", 
    img: "/casualtshirt.png", 
    category: "Men",
    desc: "Breathable cotton t-shirt for daily wear.",
    details: { neck: "Ribbed Round Neck", sleeves: "Short Sleeves", fabric: "100% Organic Cotton", fit: "Regular Fit" }
  },
  { 
    id: 101, 
    name: "Snapback Cap", 
    price: 150, 
    rating: "4.0", 
    reviews: "150", 
    img: "/cap.png", 
    category: "Men",
    desc: "Stylish snapback cap for a cool urban look.",
    details: { neck: "N/A", sleeves: "N/A", fabric: "Cotton Canvas", fit: "Adjustable" }
  },
  { 
    id: 102, 
    name: "White Shoes", 
    price: 750, 
    rating: "4.7", 
    reviews: "2100", 
    img: "/shoes.png", 
    category: ["Men","Women"],
    desc: "Premium white sneakers for every occasion.",
    details: { neck: "N/A", sleeves: "N/A", fabric: "Faux Leather", fit: "Comfort" }
  },
  { 
    id: 202, 
    name: "Premium Running Shoes", 
    price: 1599, 
    rating: "4.8", 
    reviews: "5k", 
    img: "/shoes2.png", 
    category: "Men",
    desc: "Lightweight running shoes for professional athletes.", 
    details: { fabric: "Breathable Mesh", fit: "Comfort Fit", neck: "N/A", sleeves: "N/A" } 
  },
 
  // --- Category: Electronics ---
  { 
    id: 104, 
    name: "Retro Sunglasses", 
    price: 120, 
    rating: "4.4", 
    reviews: "450", 
    img: "/sunglasses.png", 
    category: ["Men" ,"Women"],
    desc: "Vintage style sunglasses with UV protection.",
    details: { neck: "N/A", sleeves: "N/A", fabric: "Polycarbonate", fit: "Standard" }
  },
  { 
    id: 201, 
    name: "Smart Watch", 
    price: 2999, 
    rating: "4.5", 
    reviews: "12k", 
    img: "/smart1.png", 
    category: "Electronics",
    desc: "Feature-packed smart watch with heart rate monitoring.", 
    details: { fit: "Adjustable Strap", fabric: "Silicon", neck: "N/A", sleeves: "N/A" } 
  },
  { 
    id: 203, 
    name: "Luxury Laptop", 
    price: 55000, 
    rating: "4.9", 
    reviews: "300", 
    img: "/LAPtop.png", 
    category: "Electronics",
    desc: "High performance workstation for creators and gamers.", 
    details: { fit: "Ultra Thin", fabric: "Aluminum Body", neck: "N/A", sleeves: "N/A" } 
  },
  { 
    id: 204, 
    name: "Smart Refrigerator", 
    price: 25000, 
    rating: "4.3", 
    reviews: "1k", 
    img: "/fridge.png", 
    category: "Electronics",
    desc: "Energy efficient cooling with smart touch controls.", 
    details: { fit: "Double Door", fabric: "Stainless Steel", neck: "N/A", sleeves: "N/A" } 
  },
  { 
    id: 207, 
    name: "Bajaj Induction Cooktop", 
    price: 2899, 
    rating: "4.6", 
    reviews: "2.1k", 
    img: "/stock.png", 
    category: "Electronics",
    subImages: [
    "/stock.png",
    "/stock2.png", 
    "/stock3.png",
    "/stock1.png"
  ],
    desc: "Fast and energy-efficient induction cooktop with 8 preset menus.", 
    details: { fit: "Compact Design", fabric: "Polished Glass", neck: "N/A", sleeves: "N/A" } 
  },
  { 
    id: 208, 
    name: "4K Ultra HD Smart LED TV", 
    price: 32000, 
    rating: "4.8", 
    reviews: "5k", 
    img: "/tv.png", 
    category: "Electronics",
    desc: "Vibrant 4K display with built-in streaming apps and voice control.", 
    details: { fit: "Wall Mountable", fabric: "Slim Bezel Metal", neck: "N/A", sleeves: "N/A" } 
  },
  { 
    id: 209, 
    name: "Fully Automatic Washing Machine", 
    price: 18500, 
    rating: "4.4", 
    reviews: "900", 
    img: "/washingmachine.png", 
    category: "Electronics",
    desc: "Top load washing machine with smart soak technology and digital display.", 
    details: { fit: "7kg Capacity", fabric: "Stainless Steel Drum", neck: "N/A", sleeves: "N/A" } 
  },
   { 
    id: 206, 
    name: "Daily Comfort Shirt", 
    price: 450, 
    rating: "4.2", 
    reviews: "1500", 
    img: "/blackshirt.png", 
    desc: "Soft cotton black t-shirt for daily casual wear.", 
    details: { fit: "Regular Fit", fabric: "100% Cotton", neck: "Round Neck", sleeves: "Half Sleeves" } 
  }

];