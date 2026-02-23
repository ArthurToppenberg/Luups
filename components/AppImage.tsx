"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties, type SyntheticEvent } from "react";
import blurMap from "@/app/lib/blurPlaceholders.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type AppImageProps = Omit<ImageProps, "src"> & { src: string };

const BLUR_PLACEHOLDER_STYLE: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "blur(20px)",
  transform: "scale(1.1)",
  transition: "opacity 500ms ease-out",
  pointerEvents: "none",
};

const blurPlaceholders = blurMap as Record<string, string>;

export function AppImage({
  src,
  fill,
  className,
  style,
  onLoad,
  width,
  height,
  ...props
}: AppImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${basePath}${src}`
      : src;
  const blurDataURL = blurPlaceholders[src];
  const [loaded, setLoaded] = useState(!blurDataURL);

  if (!blurDataURL) {
    return (
      <Image
        src={resolvedSrc}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        style={style}
        onLoad={onLoad}
        unoptimized
        {...props}
      />
    );
  }

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>): void => {
    setLoaded(true);
    if (typeof onLoad === "function") {
      (onLoad as (event: SyntheticEvent<HTMLImageElement>) => void)(event);
    }
  };

  const blurPlaceholder = (
    <img
      src={blurDataURL}
      alt=""
      aria-hidden
      style={{ ...BLUR_PLACEHOLDER_STYLE, opacity: loaded ? 0 : 1 }}
    />
  );

  if (fill) {
    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {blurPlaceholder}
        <Image
          src={resolvedSrc}
          fill
          className={className}
          style={{
            ...style,
            transition: "opacity 500ms ease-out",
            opacity: loaded ? 1 : 0,
          }}
          onLoad={handleLoad}
          unoptimized
          {...props}
        />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {blurPlaceholder}
      <Image
        src={resolvedSrc}
        width={width}
        height={height}
        className={className}
        style={{
          display: "block",
          ...style,
          transition: "opacity 500ms ease-out",
          opacity: loaded ? 1 : 0,
        }}
        onLoad={handleLoad}
        unoptimized
        {...props}
      />
    </div>
  );
}
