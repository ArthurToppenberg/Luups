"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Img } from "@/components/ui/img";

interface ProductImageGalleryProps {
  defaultImage: string;
  images: string[];
  productName: string;
}

export const ProductImageGallery = ({
  defaultImage,
  images,
  productName,
}: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const allImages =
    images.length > 0
      ? defaultImage && !images.includes(defaultImage)
        ? [defaultImage, ...images]
        : images
      : defaultImage
        ? [defaultImage]
        : [];

  if (allImages.length === 0) {
    return (
      <span className="text-sm text-muted-foreground italic">
        No images available
      </span>
    );
  }

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          See more
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-7xl w-[95vw] h-[95vh] p-0"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="relative flex h-full flex-col bg-background">
          <DialogTitle className="sr-only">
            {productName} - Image Gallery
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="relative flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Img
                  src={allImages[selectedIndex]}
                  alt={`${productName} - Image ${selectedIndex + 1}`}
                  fill
                  className="object-contain p-4"
                />
              </motion.div>
            </AnimatePresence>

            {allImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1.5 text-sm backdrop-blur-sm">
              {selectedIndex + 1} / {allImages.length}
            </div>
          </div>

          {allImages.length > 1 && (
            <div className="border-t bg-muted/30 p-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      index === selectedIndex
                        ? "border-primary ring-2 ring-primary ring-offset-2"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Img
                      src={image}
                      alt={`${productName} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
