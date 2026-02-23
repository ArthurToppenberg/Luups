const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type VideoProps = React.ComponentProps<"video">;

export const Video = ({ src, ...props }: VideoProps) => {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${basePath}${src}`
      : src;
  return <video src={resolvedSrc} {...props} />;
};
