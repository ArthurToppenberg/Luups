"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-sage-light/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to elevate your dining experience? Luups is here to help.
              Contact us today and transform the way you eat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are happy to show you our range of products. Our innovative,
                sustainable eating solutions offer a unique, eco-friendly
                experience tailored just for you.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:mgt@luups.dk"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all group"
                >
                  <div className="p-4 rounded-xl bg-sage-light text-sage-dark group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      mgt@luups.dk
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+4527222010"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all group"
                >
                  <div className="p-4 rounded-xl bg-sage-light text-sage-dark group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      +45 2722 2010
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="p-4 rounded-xl bg-sage-light text-sage-dark">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="font-semibold text-foreground">www.luups.dk</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <Button size="lg" className="group" asChild>
                  <a href="mailto:mgt@luups.dk">
                    <Send className="mr-2 h-4 w-4" />
                    Send us a Message
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/lifestyle-dining.jpg"
                alt="Luups products"
                className="w-full h-full object-cover rounded-3xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Looking for a Retailer?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Find a retailer near you to purchase Luups products.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-cream text-charcoal hover:bg-cream/90"
              asChild
            >
              <Link href="/retailers">Find Retailers</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
