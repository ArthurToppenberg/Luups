import { motion } from "framer-motion";
import { Truck, Layers, Sparkles, Recycle } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Transportable",
    description:
      "Improved buffet flow, intuitive progression and smooth traffic. Simply a new buffet choreography.",
  },
  {
    icon: Layers,
    title: "Stackable",
    description:
      "Functional and designed to stack neatly to maximize storage space and fit perfectly in the dishwasher.",
  },
  {
    icon: Sparkles,
    title: "Dishwashable",
    description:
      "Suitable for industrial washing. They dry rapidly and maintain their beautiful appearance.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description:
      "Made from 50% PEFC-certified wood and 50% PP plastic. All products can be melted and re-shaped.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Made to Last
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solid and highly resistant to wear and tear. The lightweight, but
            extremely durable material means less replacement, cost and
            maintenance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-light text-sage-dark mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
