"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ExternalLink, MapPin } from "lucide-react";

const retailers = {
  denmark: {
    name: "Denmark",
    retailers: [
      { name: "Bent Brandt", url: "https://www.bentbrandt.dk", note: "Sales to both individuals and businesses" },
      { name: "Oluf Brønnum & co", url: "https://www.Bronnum.dk" },
      { name: "O.C. Bjerregaard", url: "https://www.ocb.dk" },
      { name: "Hørkram foodservice", url: "https://hoka.dk" },
      { name: "Moods", url: "https://www.moods.dk", note: "Sales to individuals" },
    ],
  },
  nordic: {
    name: "Nordic Countries",
    countries: [
      {
        country: "Iceland, Greenland, Faroe Islands",
        retailers: [{ name: "Arctic Import", url: "https://www.Arcticimport.dk" }],
      },
      {
        country: "Norway",
        retailers: [
          { name: "2080", url: "https://www.2080.no/servise/luups" },
          { name: "Culina", url: "http://www.culina.no" },
        ],
      },
      {
        country: "Sweden",
        retailers: [
          { name: "Buhr Agenturer AB", url: "https://www.buhr.se" },
          { name: "Spis & Servis", url: "https://www.spisservis.se" },
          { name: "Menigo", url: "https://menigo.se" },
          { name: "Smörgåsbord", url: "https://smorgasbord.com" },
        ],
      },
      {
        country: "Finland",
        retailers: [{ name: "E. Ahlström", url: "https://www.eahlstrom.fi/catalogsearch/result/?q=Luups" }],
      },
    ],
  },
  europe: {
    name: "Europe",
    countries: [
      {
        country: "Benelux",
        retailers: [{ name: "Interhal", url: "https://www.interhal.nl/" }],
      },
      {
        country: "United Kingdom",
        contact: { email: "mgt@luups.dk", phone: "+45 2722 2010" },
      },
      {
        country: "Other EU Countries",
        contact: { email: "mgt@luups.dk", phone: "+45 2722 2010" },
      },
    ],
  },
};

export default function Retailers() {
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
              Find a Retailer
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact our retailers to purchase Luups products in your region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Denmark */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary" />
              {retailers.denmark.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retailers.denmark.retailers.map((retailer, index) => (
                <motion.a
                  key={retailer.name}
                  href={retailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {retailer.name}
                      </h3>
                      {retailer.note && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {retailer.note}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nordic Countries */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary" />
              {retailers.nordic.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {retailers.nordic.countries.map((country, countryIndex) => (
                <motion.div
                  key={country.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: countryIndex * 0.1 }}
                  className="p-6 rounded-2xl bg-card shadow-soft"
                >
                  <h3 className="font-semibold text-foreground mb-4 pb-3 border-b border-border">
                    {country.country}
                  </h3>
                  <div className="space-y-3">
                    {country.retailers.map((retailer) => (
                      <a
                        key={retailer.name}
                        href={retailer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{retailer.name}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Europe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary" />
              {retailers.europe.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {retailers.europe.countries.map((country, index) => (
                <motion.div
                  key={country.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-sage-light/50 border border-sage/20"
                >
                  <h3 className="font-semibold text-foreground mb-4">
                    {country.country}
                  </h3>
                  {country.retailers ? (
                    country.retailers.map((retailer) => (
                      <a
                        key={retailer.name}
                        href={retailer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>{retailer.name}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))
                  ) : (
                    <div className="space-y-2 text-muted-foreground">
                      <a
                        href={`mailto:${country.contact?.email}`}
                        className="block hover:text-primary transition-colors"
                      >
                        {country.contact?.email}
                      </a>
                      <a
                        href={`tel:${country.contact?.phone?.replace(/\s/g, "")}`}
                        className="block hover:text-primary transition-colors"
                      >
                        {country.contact?.phone}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
