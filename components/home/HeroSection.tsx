import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="Luups tableware collection"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 py-20">
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 hover:bg-white/10"
              style={{ 
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)"
              }}
            >
              <Link to="/about" style={{ color: "white" }}>Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
