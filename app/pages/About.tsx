import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Award, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
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
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From an idea to revolutionize food service, to an award-winning
              Danish design brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <img
              src="/Maj_Toppenberg.jpg"
              alt="Luups products in a dining setting"
              className="w-full rounded-3xl shadow-elevated"
            />
          </motion.div>
        </div>
      </section>

      {/* Story with Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Timeline Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="sticky top-24">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                  {/* Timeline Items */}
                  <div className="space-y-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-card z-10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div className="pt-1">
                          <div className="text-2xl font-display font-semibold text-foreground">
                            2020
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Design Launch
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-card z-10">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="pt-1">
                          <div className="text-2xl font-display font-semibold text-foreground">
                            2022
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Red Dot Award
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-card z-10">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div className="pt-1">
                          <div className="text-2xl font-display font-semibold text-foreground">
                            Today
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Growing Impact
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-9"
            >
              <h2 className="font-display text-4xl font-semibold text-foreground mb-8">
                The Story
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Luups Tray was designed in 2020 with the purpose of
                  supporting a new and better way of serving and transporting
                  food. The Luups tray was developed in collaboration with
                  experts from the restaurant industry and students from DTU
                  (Denmarks Technical University).
                </p>

                <p>
                  In 2022, the Luups tray received the prestigious Red Dot Design
                  Award.
                </p>

                <p>
                  The design challenges the conventional tray and introduces a
                  concept that merges behavioral regulation with aesthetics. Our
                  aim is to mitigate overeating and food waste innovatively.
                  Canteens and the restaurant industry have particularly sought
                  a tool to optimize buffet operations, focusing on reducing
                  food waste and limiting physical contact. Therefore, we have
                  considered both the purpose of the design and its load-bearing
                  properties.
                </p>

                <p>
                  The Luups tray can be effortlessly carried with one hand,
                  encouraging mindful decisions about what and how much we place
                  on it. How can a tray contribute to improved lifestyles in an
                  environmentally sustainable way? The Luups Tray is
                  cloud-shaped, featuring specific sections for plates, bowls,
                  and glasses. This design promotes conscious choices and offers
                  functionalities beyond those of a typical tray.
                </p>

                <p>
                  Our recyclable materials let you carry the tray with a clear
                  conscience. Available in various colors, the Luups tray,
                  along with our plates and bowls, offers endless possibilities.
                  Our mission is to raise awareness and expand into new markets.
                  We will continue innovating the Luups family, promoting
                  creativity, healthier lifestyles, and a more sustainable daily
                  life.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Would you like to join the journey?
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="group">
                    <a href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/products">View Products</a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
