export default function Image({
  src,
  alt = "",
  fill = false,
  width,
  height,
  style,
  className,
  ...props
}) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          ...style,
        }}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      {...props}
    />
  );
}
