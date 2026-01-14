import { motion } from "framer-motion";
import { Leaf, TreeDeciduous, RefreshCw } from "lucide-react";

export function SustainabilitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/sustainability-forest.jpg"
          alt="Sustainable forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
              We Have a Circular
              <br />
              <span className="text-sage-light">Mindset</span>
            </h2>
            <p className="text-lg text-cream/80 leading-relaxed mb-8">
              The Luups products are designed for a circular economy, as it is
              made from wood and plastic composite, that is both extremely
              durable as well as recyclable.
            </p>
            <p className="text-cream/80 leading-relaxed mb-8">
              The robust, reusable material is made from 50% PEFC-certified wood
              from sustainably managed forests and 50% PP plastic. All Luups
              products can be melted and re-shaped into a wide range of new
              products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {[
              {
                icon: TreeDeciduous,
                title: "PEFC Certified",
                description: "Wood from sustainably managed forests",
              },
              {
                icon: RefreshCw,
                title: "100% Recyclable",
                description: "Can be melted and re-shaped into new products",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Fewer disposable products, lower CO2 footprint",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/20"
              >
                <div className="p-3 rounded-xl bg-sage/20 text-sage-light">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-cream mb-1">{item.title}</h3>
                  <p className="text-cream/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
