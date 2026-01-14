"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src="/muslinger.jpeg"
              alt="Luups products in use"
              className="w-full rounded-3xl shadow-elevated"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to Elevate Your
              <br />
              <span className="text-primary">Dining Experience?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our innovative, sustainable eating solutions offer a unique,
              eco-friendly experience tailored just for you. Contact us today
              and transform the way you eat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/retailers">Find a Retailer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
