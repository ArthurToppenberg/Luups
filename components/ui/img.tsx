const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ImgProps = React.ComponentProps<"img">;

export const Img = ({ src, ...props }: ImgProps) => {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${basePath}${src}`
      : src;
  return <img src={resolvedSrc} {...props} />;
};
