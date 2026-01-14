"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getFaviconUrl } from "@/lib/utils";

type RetailerCardProps = {
  name: string;
  url?: string;
  note?: string;
  country?: string;
  contact?: { email: string; phone: string };
  index: number;
};

export const RetailerCard = ({ name, url, note, country, contact, index }: RetailerCardProps) => {
  const faviconUrl = url ? getFaviconUrl(url) : null;
  const [imageError, setImageError] = useState(false);

  const cardContent = (
    <>
      {faviconUrl && !imageError && (
        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-muted/30 rounded-md">
          <Image
            src={faviconUrl}
            alt={name}
            width={64}
            height={64}
            className="object-contain max-h-12 max-w-12"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <span className="font-bold text-lg text-foreground block">{name}</span>
            {country && (
              <span className="text-xs text-muted-foreground/70 mt-1 block">{country}</span>
            )}
            {contact && (
              <span className="text-xs text-primary mt-1 block">Direct Sales</span>
            )}
          </div>
          {url && (
            <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
          )}
        </div>
        <div className="mt-2 flex items-center justify-between text-sm gap-2">
          {url ? (
            <>
              <span className="text-muted-foreground/80 truncate">
                {url.replace('https://www.', '').replace('http://www.', '').split('/')[0]}
              </span>
              {note && (
                <span className="text-xs font-medium px-2 py-0.5 bg-background/60 rounded text-foreground/80 flex-shrink-0">
                  {note}
                </span>
              )}
            </>
          ) : contact ? (
            <div className="flex flex-col gap-2 w-full">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-muted-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{contact.phone}</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );

  const baseClasses = "group flex items-center gap-4 p-5 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors duration-200";
  const motionProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: index * 0.05 },
  };

  if (url) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div className={baseClasses} {...motionProps}>
      {cardContent}
    </motion.div>
  );
};
