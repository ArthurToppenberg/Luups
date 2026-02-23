"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Download, Box, Scale, Ruler, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Img } from "@/components/ui/img";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productCategories, colors } from "./products";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";

export default function Products() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-sage-light/30 border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Our Products
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Award-winning tableware designed for canteens, food service, and homes. 
                Where circular economy meets Danish design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="shadow-lg">
                  <a
                    href="http://luups.dk/wp-content/uploads/2025/11/Luups-Product-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    English Catalogue
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                  <a
                    href="http://luups.dk/wp-content/uploads/2025/11/Produktkatalog-2025-11-swe-FINAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Svensk Katalog
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent rounded-3xl z-10" />
              <Img
                src="/productsDisplay.jpeg"
                alt="Luups trays stacked"
                className="w-full rounded-3xl shadow-2xl object-cover h-[400px] lg:h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Colors - Compact Strip */}
      <section className="py-12 border-b border-border/40 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <h3 className="text-lg font-semibold whitespace-nowrap">Available Colors:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center gap-3 group cursor-default">
                  <div
                    className="w-8 h-8 rounded-full border border-border shadow-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Product Specifications
            </h2>
            <p className="text-muted-foreground">
              Technical details for the complete Luups collection.
            </p>
          </div>

          <div className="space-y-20">
            {productCategories.map((category, idx) => (
              <div key={category.category} id={category.category.toLowerCase().replace(/\s/g, '-')} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                  <div className="h-[1px] flex-1 bg-border/60" />
                </div>

                {/* DESKTOP VIEW: Table */}
                <div className="hidden md:block bg-card rounded-xl shadow-sm overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[120px]">Preview</TableHead>
                        <TableHead className="w-[200px]">Product</TableHead>
                        <TableHead>Variants (Item No.)</TableHead>
                        <TableHead className="w-[150px]">Specs</TableHead>
                        <TableHead className="w-[100px] text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.products.map((product) => (
                        <TableRow key={product.name} className="group hover:bg-muted/20">
                          <TableCell className="py-4">
                            <div className="relative h-20 w-20 rounded-md overflow-hidden border border-border bg-white">
                              {product.defaultImage ? (
                                <Img
                                  src={product.defaultImage}
                                  alt={product.name}
                                  className="h-full w-full object-contain p-1"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center bg-muted text-xs text-muted-foreground">
                                  No Img
                                </div>
                              )}
                            </div>
                          </TableCell>
                          
                          <TableCell className="align-top py-6">
                            <p className="font-bold text-base text-foreground mb-1">{product.name}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                {category.category}
                            </p>
                          </TableCell>

                          <TableCell className="align-top py-6">
                            <div className="flex flex-wrap gap-2">
                              {product.colorVariants.map((variant) => (
                                <span 
                                    key={variant.itemNumber}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border"
                                >
                                  {variant.name} <span className="ml-1 opacity-60">| {variant.itemNumber}</span>
                                </span>
                              ))}
                            </div>
                          </TableCell>

                          <TableCell className="align-top py-6">
                            <div className="space-y-1.5 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Ruler className="w-3.5 h-3.5" />
                                    <span>{product.dimensions}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Scale className="w-3.5 h-3.5" />
                                    <span>{product.weight}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Box className="w-3.5 h-3.5" />
                                    <span>{product.pkgUnit}</span>
                                </div>
                            </div>
                          </TableCell>

                          <TableCell className="text-right align-middle">
                            <ProductImageGallery
                              defaultImage={product.defaultImage}
                              images={product.images}
                              productName={product.name}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* MOBILE VIEW: Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {category.products.map((product) => (
                        <div key={product.name} className="bg-card rounded-xl shadow-sm p-4 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div className="relative h-20 w-20 rounded-lg border border-border bg-white overflow-hidden shrink-0">
                                     {product.defaultImage ? (
                                        <Img src={product.defaultImage} alt={product.name} className="h-full w-full object-contain p-1" />
                                     ) : (
                                        <div className="flex h-full items-center justify-center bg-muted text-[10px]">No Img</div>
                                     )}
                                </div>
                                <div className="ml-3 flex-1">
                                    <h4 className="font-bold text-foreground text-sm mb-1 leading-tight">{product.name}</h4>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Package className="w-3 h-3" />
                                        <span>Unit: {product.pkgUnit}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                                <div className="bg-muted/30 p-2 rounded">
                                    <span className="text-muted-foreground block mb-0.5">Dimensions</span>
                                    <span className="font-medium">{product.dimensions}</span>
                                </div>
                                <div className="bg-muted/30 p-2 rounded">
                                    <span className="text-muted-foreground block mb-0.5">Weight</span>
                                    <span className="font-medium">{product.weight}</span>
                                </div>
                            </div>

                            <div className="mt-auto pt-3 border-t border-dashed border-border">
                                <p className="text-xs font-semibold text-muted-foreground mb-2">Variants:</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.colorVariants.map(v => (
                                        <span key={v.itemNumber} className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground border">
                                            {v.name} ({v.itemNumber})
                                        </span>
                                    ))}
                                </div>
                            </div>
                             <div className="mt-4 w-full">
                                <ProductImageGallery
                                  defaultImage={product.defaultImage}
                                  images={product.images}
                                  productName={product.name}
                                />
                             </div>
                        </div>
                    ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs / Material (Redesigned for readability) */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="font-display text-3xl font-semibold mb-6">Material & Care</h2>
                    <p className="text-muted-foreground mb-8">
                        50% PEFC-certified wood fiber, 50% PP plastic. A robust composite designed for the rigorous demands of professional kitchens.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-border rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">Temperature</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>70°C (2 hrs)</li>
                                <li>80°C (1 hr)</li>
                                <li>135°C (35 mins)</li>
                            </ul>
                        </div>
                        <div className="p-4 border border-border rounded-lg">
                             <h4 className="font-semibold text-sm mb-1">Features</h4>
                             <ul className="text-sm text-muted-foreground space-y-1">
                                <li>Microwave Safe</li>
                                <li>Dishwasher Safe</li>
                                <li>Fully Recyclable</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex gap-4">
                         <div className="h-12 w-12 rounded-full bg-sage/20 flex items-center justify-center text-primary-foreground font-bold shrink-0">
                            <Box className="text-sage-dark" />
                         </div>
                         <div>
                            <h4 className="font-semibold">Stackable & Durable</h4>
                            <p className="text-sm text-muted-foreground">Optimized for storage and transport without breakage.</p>
                         </div>
                    </div>
                    <div className="flex gap-4">
                         <div className="h-12 w-12 rounded-full bg-sage/20 flex items-center justify-center text-primary-foreground font-bold shrink-0">
                            <Scale className="text-sage-dark" />
                         </div>
                         <div>
                            <h4 className="font-semibold">Lightweight</h4>
                            <p className="text-sm text-muted-foreground">Ergonomic handling for staff, reducing strain.</p>
                         </div>
                    </div>
                </div>
             </div>
        </div>
      </section>
    </Layout>
  );
}
