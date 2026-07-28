"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (!focused) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focused, handleNext, handlePrevious]);

  if (!images || images.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center outline-none"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photo gallery"
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => {
        if (document.activeElement !== rootRef.current) setFocused(false);
      }}
    >
      <div className="relative w-full h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-[#111111] border border-[rgba(255,255,255,0.1)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-md backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-md backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2 px-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#DC2626] w-6" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
