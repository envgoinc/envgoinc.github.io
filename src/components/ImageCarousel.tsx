import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel = ({ images, autoPlay = true, interval = 5000 }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, next]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-sm border border-border/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/30 backdrop-blur-sm border border-border/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/50"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-6" : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
