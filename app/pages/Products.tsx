import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ColorVariant {
  name: string;
  itemNumber: string;
}

interface Product {
  name: string;
  colorVariants: ColorVariant[];
  dimensions: string;
  weight: string;
  pkgUnit: string;
}

interface ProductCategory {
  category: string;
  products: Product[];
}

const productCategories: ProductCategory[] = [
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
      },
    ],
  },
];

const colors = [
  { name: "Brown", hex: "#8B6F47" },
  { name: "Black", hex: "#2D2D2D" },
  { name: "Sand", hex: "#D4C5B0" },
  { name: "Green", hex: "#7A8B72" },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-sage-light/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
                Our Products
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Award-winning tableware designed for canteens, food service
                sectors, hotels, cruise ships, and homes. Every piece combines
                form and function.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <a
                    href="http://luups.dk/wp-content/uploads/2025/11/Luups-Product-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Product Catalogue (EN)
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="http://luups.dk/wp-content/uploads/2025/11/Produktkatalog-2025-11-swe-FINAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Produktkatalog (SV)
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/productsDisplay.jpeg"
                alt="Luups trays stacked"
                className="w-full rounded-3xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* General Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-8 text-center">
              General Specifications
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-card space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Material</h3>
                <p className="text-muted-foreground">
                  50% PEFC-certified wood / 50% PP plastic
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Temperature Resistance
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 70°C (2 hrs)</li>
                  <li>• 80°C (1 hr)</li>
                  <li>• 135°C (35 mins)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <p className="text-muted-foreground">
                  Dishwasher-safe, stackable, transportable, recyclable
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Design</h3>
                <p className="text-muted-foreground">
                  Danish design, Red Dot Winner 2022
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Colors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Available Colors
            </h2>
            <p className="text-muted-foreground">
              Choose from our carefully curated color palette
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-16 h-16 rounded-full shadow-card border-4 border-background"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm text-muted-foreground">{color.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
              Product Catalog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications for all Luups products
            </p>
          </motion.div>

          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[200px]">
                            Product Name
                          </TableHead>
                          <TableHead className="min-w-[250px]">
                            Color Variants & Item Numbers
                          </TableHead>
                          <TableHead className="min-w-[150px]">
                            Dimensions
                          </TableHead>
                          <TableHead>Weight</TableHead>
                          <TableHead>Pkg Unit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.products.map((product) => (
                          <TableRow key={product.name}>
                            <TableCell className="font-medium">
                              {product.name}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                {product.colorVariants.map((variant) => (
                                  <div
                                    key={variant.itemNumber}
                                    className="text-sm text-muted-foreground"
                                  >
                                    {variant.name} ({variant.itemNumber})
                                  </div>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {product.dimensions}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {product.weight}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {product.pkgUnit}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
                The Material
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All Luups products are crafted with a focus on the circular
                economy, utilizing a wood and plastic composite that is both
                highly durable and recyclable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The wood is leftovers and comes from sustainable forestry
                (PEFC).
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  Temperature Resistance:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 70°C for 2 hours</li>
                  <li>• 80°C for 1 hour</li>
                  <li>• 135°C for 35 minutes</li>
                </ul>
                <p className="text-primary font-medium">
                  ✓ Microwave safe · ✓ Dishwasher safe
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Efficient Cleaning", desc: "Dishwasher safe, dries quickly" },
                { title: "Cost Reduction", desc: "Fewer disposables, lower CO2" },
                { title: "Noise Reduction", desc: "Quieter kitchen environment" },
                { title: "Ergonomic", desc: "Lightweight, easy handling" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-sage-light/50 border border-sage/20"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
