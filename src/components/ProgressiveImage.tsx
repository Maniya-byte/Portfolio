import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
}

export default function ProgressiveImage({
  src,
  alt,
  className,
  containerClassName,
  style,
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)} style={style}>
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted rounded-[inherit]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-[shimmer_1.5s_infinite]" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        className={cn(
          "transition-all duration-700 ease-out",
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm",
          className
        )}
      />
    </div>
  );
}
