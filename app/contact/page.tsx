"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Img } from "@/components/ui/img";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Ready to elevate your dining experience?
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
              Luups is here to help. Our innovative, sustainable eating solutions offer a unique, eco-friendly experience tailored just for you. Contact us today and transform the way you eat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Direct Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
                  Direct Lines
                </h2>
                
                <div className="space-y-6">
                  {/* Email Card */}
                  <a
                    href="mailto:mgt@luups.dk"
                    className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-sage/10 text-sage-dark group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        General Inquiries
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        For quotes, product info, and support.
                      </p>
                      <p className="text-lg font-medium text-foreground">
                        mgt@luups.dk
                      </p>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a
                    href="tel:+4527222010"
                    className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-sage/10 text-sage-dark group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Phone Support
                      </h3>
                      <p className="text-lg font-medium text-foreground">
                        +45 2722 2010
                      </p>
                    </div>
                  </a>

                   {/* Location / HQ Card */}
                   <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/20">
                    <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Based in
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Copenhagen, Denmark
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Context/Image */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Img
                  src="/luups-logo.png"
                  alt="Luups tableware in a professional setting"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
