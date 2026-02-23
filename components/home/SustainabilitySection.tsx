"use client";

import { motion } from "framer-motion";
import { Leaf, TreeDeciduous, RefreshCw } from "lucide-react";
import { Img } from "@/components/ui/img";

export function SustainabilitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Img
          src="/sustainability-forest.jpg"
          alt="Sustainable forest"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(140, 110, 90, 0.7) 0%, rgba(140, 110, 90, 0.6) 50%, rgba(140, 110, 90, 0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(140, 110, 90, 0.3) 0%, transparent 50%, rgba(140, 110, 90, 0.4) 100%)",
          }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6" style={{ color: "white" }}>
              We Have a Circular
              <br />
              <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>Mindset</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              The Luups products are designed for a circular economy, as it is
              made from wood and plastic composite, that is both extremely
              durable as well as recyclable.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
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
                className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-sm border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
              >
                <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(122, 139, 114, 0.3)", color: "rgba(255, 255, 255, 0.9)" }}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "white" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
