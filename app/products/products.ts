export interface ColorVariant {
  name: string;
  itemNumber: string;
}

export interface Product {
  name: string;
  colorVariants: ColorVariant[];
  dimensions: string;
  weight: string;
  pkgUnit: string;
  defaultImage: string;
  images: string[];
}

export interface ProductCategory {
  category: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    category: "Trays",
    products: [
      {
        name: "Luups Tray Original",
        colorVariants: [
          { name: "Brown", itemNumber: "BN001" },
          { name: "Black", itemNumber: "BS002" },
          { name: "Sand", itemNumber: "BH003" },
          { name: "Green", itemNumber: "BG004" },
        ],
        dimensions: "40 x 46 cm",
        weight: "532 g",
        pkgUnit: "43 pcs",
        defaultImage: "/products/luups_tray_original_1.jpg",
        images: [
          "/products/luups_tray_original_1.jpg",
          "/products/luups_tray_original_2.jpg",
          "/products/luups_tray_original_3.jpg",
          "/products/luups_tray_original_4.jpg",
          "/products/luups_tray_original_5.jpg",
          "/products/luups_tray_original_6.jpg",
        ],
      },
      {
        name: "Luups Tray Small",
        colorVariants: [
          { name: "Brown", itemNumber: "LBN09" },
          { name: "Black", itemNumber: "LBS05" },
          { name: "Sand", itemNumber: "LBL07" },
          { name: "Green", itemNumber: "LBG08" },
        ],
        dimensions: "33 x 36 cm",
        weight: "308 g",
        pkgUnit: "27 pcs",
        defaultImage: "/products/luups_tray_small_1.jpg",
        images: [
          "/products/luups_tray_small_1.jpg",
          "/products/luups_tray_small_2.jpg",
          "/products/luups_tray_small_3.jpg",
          "/products/luups_tray_small_4.jpg",
          "/products/luups_tray_small_5.jpg",
          "/products/luups_tray_small_6.jpg",
        ],
      },
    ],
  },
  {
    category: "Plates",
    products: [
      {
        name: "Luups Plate Big",
        colorVariants: [
          { name: "Brown", itemNumber: "TN025" },
          { name: "Sand", itemNumber: "TL025" },
          { name: "Green", itemNumber: "TG025" },
          { name: "Black", itemNumber: "TS025" },
        ],
        dimensions: "Ø 25 cm",
        weight: "208 g",
        pkgUnit: "48 pcs",
        defaultImage: "/products/luups_plate_25_1.jpg",
        images: [
          "/products/luups_plate_25_1.jpg",
          "/products/luups_plate_25_2.jpg",
          "/products/luups_plate_25_3.jpg",
          "/products/luups_plate_25_4.jpg",
          "/products/luups_plate_25_5.jpg",
        ],
      },
      {
        name: "Luups Plate Small",
        colorVariants: [
          { name: "Brown", itemNumber: "TN018" },
          { name: "Sand", itemNumber: "TL018" },
          { name: "Green", itemNumber: "TG018" },
          { name: "Black", itemNumber: "TS018" },
        ],
        dimensions: "Ø 18 cm",
        weight: "102 g",
        pkgUnit: "112 pcs",
        defaultImage: "/products/luups_plate_18_1.jpg",
        images: [
          "/products/luups_plate_18_1.jpg",
          "/products/luups_plate_18_2.jpg",
          "/products/luups_plate_18_3.jpg",
          "/products/luups_plate_18_4.jpg",
          "/products/luups_plate_18_5.jpg",
        ],
      },
      {
        name: "Luups Serving Plate 35",
        colorVariants: [
          { name: "Brown", itemNumber: "LFN35" },
          { name: "Black", itemNumber: "LFS35" },
          { name: "Sand", itemNumber: "LFSA35" },
          { name: "Green", itemNumber: "LFG35" },
        ],
        dimensions: "Ø 35 cm",
        weight: "395 g",
        pkgUnit: "28 pcs",
        defaultImage: "",
        images: [],
      },
      {
        name: "Luups Serving Plate 39",
        colorVariants: [
          { name: "Brown", itemNumber: "LFB39" },
          { name: "Black", itemNumber: "LFS39" },
          { name: "Sand", itemNumber: "LFSA39" },
          { name: "Green", itemNumber: "LFG39" },
        ],
        dimensions: "Ø 39 cm",
        weight: "540 g",
        pkgUnit: "22 pcs",
        defaultImage: "/products/luups_serving_plate_39_1.jpg",
        images: [
          "/products/luups_serving_plate_39_1.jpg",
          "/products/luups_serving_plate_39_2.jpg",
          "/products/luups_serving_plate_39_3.jpg",
          "/products/luups_serving_plate_39_4.jpg",
          "/products/luups_serving_plate_39_5.jpg",
          "/products/luups_serving_plate_39_6.jpg",
          "/products/luups_serving_plate_39_7.jpg",
          "/products/luups_serving_plate_39_8.jpg",
        ],
      },
    ],
  },
  {
    category: "Bowls",
    products: [
      {
        name: "Luups Bowl",
        colorVariants: [
          { name: "Brown", itemNumber: "SN400" },
          { name: "Sand", itemNumber: "SSA400" },
          { name: "Green", itemNumber: "SG400" },
          { name: "Black", itemNumber: "SS400" },
        ],
        dimensions: "400 mL, Ø 14.8 cm",
        weight: "80 g",
        pkgUnit: "172 pcs",
        defaultImage: "/products/luups_bowl_400_1.jpg",
        images: [
          "/products/luups_bowl_400_1.jpg",
          "/products/luups_bowl_400_2.jpg",
          "/products/luups_bowl_400_3.jpg",
          "/products/luups_bowl_400_4.jpg",
        ],
      },
      {
        name: "Luups Tiny Bowl",
        colorVariants: [
          { name: "Brown", itemNumber: "BN040" },
          { name: "Black", itemNumber: "BS040" },
          { name: "Sand", itemNumber: "BSA040" },
          { name: "Green", itemNumber: "BG040" },
        ],
        dimensions: "40 mL, 7.6 x 8.3 cm",
        weight: "16 g",
        pkgUnit: "6/72 pcs",
        defaultImage: "/products/luups_tiny_bowl_40_1.jpg",
        images: [
          "/products/luups_tiny_bowl_40_1.jpg",
          "/products/luups_tiny_bowl_40_2.jpg",
          "/products/luups_tiny_bowl_40_3.jpg",
          "/products/luups_tiny_bowl_40_4.jpg",
          "/products/luups_tiny_bowl_40_5.jpg",
          "/products/luups_tiny_bowl_40_6.jpg",
          "/products/luups_tiny_bowl_40_7.jpg",
          "/products/luups_tiny_bowl_40_8.jpg",
        ],
      },
      {
        name: "Luups Poke Bowl",
        colorVariants: [
          { name: "Brown", itemNumber: "SN1300" },
          { name: "Black", itemNumber: "SS1300" },
          { name: "Sand", itemNumber: "SSA1300" },
          { name: "Green", itemNumber: "SG1300" },
        ],
        dimensions: "1300 mL, Ø 20 cm",
        weight: "165 g",
        pkgUnit: "30 pcs",
        defaultImage: "/products/luups_poke_bowl_1300_1.jpg",
        images: [
          "/products/luups_poke_bowl_1300_1.jpg",
          "/products/luups_poke_bowl_1300_2.jpg",
          "/products/luups_poke_bowl_1300_3.jpg",
          "/products/luups_poke_bowl_1300_4.jpg",
          "/products/luups_poke_bowl_1300_5.jpg",
          "/products/luups_poke_bowl_1300_6.jpg",
          "/products/luups_poke_bowl_1300_7.jpg",
        ],
      },
      {
        name: "Luups High Bowl",
        colorVariants: [
          { name: "Brown", itemNumber: "SN4800" },
          { name: "Black", itemNumber: "SS4800" },
          { name: "Sand", itemNumber: "SSA4800" },
          { name: "Green", itemNumber: "SG4800" },
        ],
        dimensions: "4800 mL, Ø 23.5 cm, H 14 cm",
        weight: "380 g",
        pkgUnit: "5 pcs",
        defaultImage: "/products/luups_high_bowl_4800_1.jpg",
        images: [
          "/products/luups_high_bowl_4800_1.jpg",
          "/products/luups_high_bowl_4800_2.jpg",
          "/products/luups_high_bowl_4800_3.jpg",
          "/products/luups_high_bowl_4800_4.jpg",
          "/products/luups_high_bowl_4800_5.jpg",
          "/products/luups_high_bowl_4800_6.jpg",
        ],
      },
      {
        name: "Luups Oval Dish",
        colorVariants: [
          { name: "Brown", itemNumber: "LON35X19" },
          { name: "Black", itemNumber: "LOS35X19" },
          { name: "Sand", itemNumber: "LOSA35X19" },
          { name: "Green", itemNumber: "LOG35X19" },
        ],
        dimensions: "4.5 x 19 x 7 cm (LxWxH)",
        weight: "288 g",
        pkgUnit: "40 pcs",
        defaultImage: "/products/luups_oval_dish_45_19_7_2.jpg",
        images: [
          "/products/luups_oval_dish_45_19_7_1.jpg",
          "/products/luups_oval_dish_45_19_7_2.jpg",
          "/products/luups_oval_dish_45_19_7_3.jpg",
          "/products/luups_oval_dish_45_19_7_4.jpg",
        ],
      },
    ],
  },
  {
    category: "Gastronorm (GN) Containers",
    products: [
      {
        name: "Luups GN 1/1 (Deep)",
        colorVariants: [
          { name: "Brown", itemNumber: "LNG65" },
          { name: "Black", itemNumber: "LSG65" },
          { name: "Sand", itemNumber: "LSA65" },
          { name: "Green", itemNumber: "LGG65" },
        ],
        dimensions: "Catalog Error: Lists 33x36 cm",
        weight: "Error: Lists 308 g",
        pkgUnit: "27 pcs",
        defaultImage: "/products/luups_gastro_tray_11_65_1.jpg",
        images: [
          "/products/luups_gastro_tray_11_65_1.jpg",
          "/products/luups_gastro_tray_11_65_2.jpg",
          "/products/luups_gastro_tray_11_65_3.jpg",
          "/products/luups_gastro_tray_11_65_4.jpg",
          "/products/luups_gastro_tray_11_65_5.jpg",
        ],
      },
      {
        name: "Luups GN 1/1 (Flat)",
        colorVariants: [
          { name: "Brown", itemNumber: "LNG20" },
          { name: "Black", itemNumber: "LSG20" },
          { name: "Sand", itemNumber: "LSAG20" },
          { name: "Green", itemNumber: "LLGG20" },
        ],
        dimensions: "530 x 325 x 23 mm",
        weight: "595 g",
        pkgUnit: "25 pcs",
        defaultImage: "/products/luups_gastro_tray_11_2_1.jpg",
        images: [
          "/products/luups_gastro_tray_11_2_1.jpg",
          "/products/luups_gastro_tray_11_2_2.jpg",
          "/products/luups_gastro_tray_11_2_3.jpg",
          "/products/luups_gastro_tray_11_2_4.jpg",
        ],
      },
      {
        name: "Luups GN 1/2 (Deep)",
        colorVariants: [
          { name: "Brown", itemNumber: "HNG65" },
          { name: "Black", itemNumber: "HSG65" },
          { name: "Sand", itemNumber: "HSAG65" },
          { name: "Green", itemNumber: "HGG65" },
        ],
        dimensions: "325 x 265 x 68 mm",
        weight: "425 g",
        pkgUnit: "20 pcs",
        defaultImage: "/products/luups_gastro_tray_11_65_1.jpg",
        images: [
          "/products/luups_gastro_tray_11_65_1.jpg",
          "/products/luups_gastro_tray_11_65_2.jpg",
          "/products/luups_gastro_tray_11_65_3.jpg",
          "/products/luups_gastro_tray_11_65_4.jpg",
          "/products/luups_gastro_tray_11_65_5.jpg",
        ],
      },
      {
        name: "Luups GN 1/2 (Flat)",
        colorVariants: [
          { name: "Brown", itemNumber: "HNG20" },
          { name: "Black", itemNumber: "HSG20" },
          { name: "Sand", itemNumber: "HSAG20" },
          { name: "Green", itemNumber: "HGG20" },
        ],
        dimensions: "325 x 265 x 23 mm",
        weight: "320 g",
        pkgUnit: "25 pcs",
        defaultImage: "/products/luups_gastro_tray_11_2_1.jpg",
        images: [
          "/products/luups_gastro_tray_11_2_1.jpg",
          "/products/luups_gastro_tray_11_2_2.jpg",
          "/products/luups_gastro_tray_11_2_3.jpg",
          "/products/luups_gastro_tray_11_2_4.jpg",
        ],
      },
    ],
  },
];

export const colors = [
  { name: "Brown", hex: "#8B6F47" },
  { name: "Black", hex: "#2D2D2D" },
  { name: "Sand", hex: "#D4C5B0" },
  { name: "Green", hex: "#7A8B72" },
];
