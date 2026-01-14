import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Award, Calendar, Users, Lightbulb } from "lucide-react";

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
            className="max-w-4xl mx-auto"
          >
            <img
              src="/lifestyle-dining.jpg"
              alt="Luups products in a dining setting"
              className="w-full rounded-3xl shadow-elevated"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl font-semibold text-foreground mb-8">
                The Story
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2020</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Luups Tray was designed with the purpose of supporting a
                      new and better way of serving and transporting food. The
                      Luups tray was developed in collaboration with experts from
                      the restaurant industry and students from DTU (Denmark's
                      Technical University).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2022</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Luups tray received the prestigious Red Dot Design
                      Award, recognizing its exceptional design quality and
                      innovation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Today</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Luups products are used in canteens, food service sectors,
                      hotels, and cruise ships across Europe. Our range has
                      expanded to include trays, plates, bowls, and gastronorm
                      containers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-sage-light/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
                Designed with a Unique
                <br />
                <span className="text-primary">Appearance & Feeling</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Luups products are designed for a circular economy, as it is
                made from wood and plastic composite, that is both extremely
                durable as well as recyclable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Even though the material makes the products feel light, you can
                still feel that the products are very durable and high quality
                products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All the products can be used in several places. Going on a
                picnic? The plates are indispensable. Having a garden party? The
                small tray is perfect for mingling while having drinks and
                snacks. And when you're done – you just put it in the
                dishwasher.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Lightbulb,
                  title: "Ergonomic",
                  description:
                    "Designed to be held in one hand, leaving the other free to handle food.",
                },
                {
                  icon: Award,
                  title: "Hygienic",
                  description:
                    "Smooth surfaces for easy cleaning, suitable for industrial washing.",
                },
                {
                  icon: Users,
                  title: "Responsible",
                  description:
                    "Exceptionally robust, guaranteeing a long lifespan. Made from certified wood.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-card shadow-card"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-sage-light text-sage-dark">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
