"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="py-24 bg-sage-light/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="h-12 w-12 text-primary/30 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic">
            "I established Luups with the purpose of supporting a smoother,
            smarter way of serving and transporting food in canteens, food
            service sectors, hotels and cruise ships"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-display text-primary font-semibold">MT</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Maj Toppenberg</p>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
