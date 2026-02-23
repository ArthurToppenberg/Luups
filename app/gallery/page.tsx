"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Img } from "@/components/ui/img";
import { Video } from "@/components/ui/video";

const galleryImages = [
  { src: "/gallery/efterar.jpeg", alt: "" },
  { src: "/gallery/girl.png", alt: "" },
  { src: "/gallery/granola.jpeg", alt: "" },
  { src: "/gallery/indian.png", alt: "" },
  { src: "/gallery/serving.jpeg", alt: "" },
  { src: "/gallery/stack.png", alt: "" },
  { src: "/gallery/cheese.jpg", alt: "" },
  { src: "/gallery/poke.jpg", alt: "" },
  { src: "/gallery/muslinger.jpeg", alt: "" },
];

export default function Gallery() {
  return (
    <Layout>
      {/* Hero Video Section */}
      <section className="py-24 bg-sage-light/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center mb-12"
          >
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our products in action through beautiful imagery and videos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Video
              src="/gallery/promo.mov"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-3xl shadow-elevated"
            >
              Your browser does not support the video tag.
            </Video>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
              Product Showcase
            </h2>
            <p className="text-muted-foreground">
              Explore our collection through these stunning visuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Img
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
