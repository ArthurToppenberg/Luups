import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt="Luups tableware collection"
          className="w-full h-full object-cover"
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

      {/* Content */}
      <div className="relative pl-6 md:pl-12 lg:pl-16 pr-6 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
            style={{ color: "white" }}
          >
            <Award className="h-4 w-4" />
            <span>Red Dot Design Award Winner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-6"
            style={{ color: "white" }}
          >
            Form Meets
            <br />
            <span style={{ color: "white" }}>Flow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Award-winning trays, dishes, plates and bowls. Designed in Denmark
            and shaped with function, flow and feeling in mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-sm border-none shadow-none group hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#6B8B67",
                color: "#EEEEEE",
              }}
            >
              <Link 
                href="/products"
                style={{ color: "#EEEEEE" }}
                className="flex items-center gap-2 font-medium"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" style={{ color: "#EEEEEE" }} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-white/30"
              style={{ 
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
            >
              <Link href="/about" style={{ color: "white" }}>Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
