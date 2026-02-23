import { AppImage } from "@/components/AppImage";
import type { ImageProps } from "next/image";

type ImgProps = Omit<ImageProps, "src"> & {
  src: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

export const Img = (props: ImgProps) => <AppImage unoptimized {...props} />;
