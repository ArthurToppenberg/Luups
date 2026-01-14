import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    category: "Trays",
    items: [
      { name: "Luups Tray Original", description: "The iconic award-winning serving tray" },
      { name: "Luups Tray Small", description: "Perfect for appetizers and small portions" },
    ],
  },
  {
    category: "Plates",
    items: [
      { name: "Serving Plate Ø39", description: "Large serving plate for sharing" },
      { name: "Plates Ø25", description: "Standard dinner plate size" },
      { name: "Plates Ø18", description: "Ideal for salads and appetizers" },
    ],
  },
  {
    category: "Bowls",
    items: [
      { name: "Bowl 400 mL", description: "Perfect for soups and salads" },
      { name: "High Bowl 4800 mL", description: "Large serving bowl" },
      { name: "Poke Bowl 1300 mL", description: "Trendy poke bowl size" },
      { name: "Tiny Bowl 40 mL", description: "For sauces and condiments" },
    ],
  },
  {
    category: "Gastronorm",
    items: [
      { name: "Gastro Trays 1/1 – 6,5", description: "Full-size gastronorm" },
      { name: "Gastro Trays 1/1 – 2,0", description: "Shallow gastronorm" },
      { name: "Oval Gastronorm", description: "Elegant oval design" },
    ],
  },
];

const colors = [
  { name: "Natural", hex: "#C4B8A5" },
  { name: "Grey", hex: "#8B8B8B" },
  { name: "Sage", hex: "#7A8B72" },
  { name: "Black", hex: "#2D2D2D" },
  { name: "Sand", hex: "#D4C5B0" },
  { name: "Light Grey", hex: "#B8B8B8" },
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
                src="/products-tray.jpg"
                alt="Luups trays stacked"
                className="w-full rounded-3xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Colors */}
      <section className="py-16 bg-background">
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
              Products for Sale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact our retailers to purchase Luups products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 pb-4 border-b border-border">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="group">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
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
