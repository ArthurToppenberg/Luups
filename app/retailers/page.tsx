"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { RetailerCard } from "@/components/retailers/RetailerCard";

const retailers = {
  denmark: {
    name: "Denmark",
    retailers: [
      { name: "Bent Brandt", url: "https://www.bentbrandt.dk", note: "B2B & Private" },
      { name: "Oluf Brønnum & co", url: "https://www.Bronnum.dk", note: "B2B" },
      { name: "O.C. Bjerregaard", url: "https://www.ocb.dk", note: "B2B" },
      { name: "Hørkram Foodservice", url: "https://hoka.dk", note: "B2B" },
      { name: "Moods", url: "https://www.moods.dk", note: "Private Sales" },
    ],
  },
  nordic: {
    name: "Nordic Region",
    countries: [
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
      {
        country: "Iceland & North Atlantic",
        retailers: [{ name: "Arctic Import", url: "https://www.Arcticimport.dk" }],
      },
    ],
  },
  europe: {
    name: "Rest of Europe",
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
      {/* Header Section - Clean & Corporate */}
      <section className="pt-32 pb-12 border-b border-border/40 bg-muted/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Our Retailers
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
              Contact our retailers to purchase Luup’s products.
              </p>
            </motion.div>
          
          </div>
        </div>
      </section>

      {/* Primary Market - Denmark */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
                <h2 className="font-display text-2xl font-semibold">{retailers.denmark.name}</h2>
                <div className="h-[1px] bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {retailers.denmark.retailers.map((retailer, i) => (
                <RetailerCard
                  key={retailer.name}
                  name={retailer.name}
                  url={retailer.url}
                  note={retailer.note}
                  index={i}
                />
              ))}
            </div>
        </div>
      </section>

      {/* Nordic Region */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
                <h2 className="font-display text-2xl font-semibold">{retailers.nordic.name}</h2>
                <div className="h-[1px] bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {retailers.nordic.countries.flatMap((country) =>
                country.retailers.map((retailer, i) => (
                  <RetailerCard
                    key={`${country.country}-${retailer.name}`}
                    name={retailer.name}
                    url={retailer.url}
                    country={country.country}
                    index={i}
                  />
                ))
              )}
            </div>
        </div>
      </section>

      {/* Rest of Europe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
                <h2 className="font-display text-2xl font-semibold">{retailers.europe.name}</h2>
                <div className="h-[1px] bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {retailers.europe.countries.map((country, i) => (
                country.retailers ? (
                  <RetailerCard
                    key={country.country}
                    name={country.retailers[0].name}
                    url={country.retailers[0].url}
                    country={country.country}
                    index={i}
                  />
                ) : (
                  <RetailerCard
                    key={country.country}
                    name={country.country}
                    contact={country.contact}
                    index={i}
                  />
                )
              ))}
            </div>
        </div>
      </section>
    </Layout>
  );
}
