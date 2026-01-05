import { useEffect, useRef, useState, type ReactNode } from "react";
import Button from "./Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type ResponsiveCount = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

interface Props {
  children: ReactNode[];
  visibleCount?: ResponsiveCount;
  showControls?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default function Carousel({
  children,
  visibleCount = { base: 1 },
  showControls = true,
  autoPlay = false,
  interval = 3000,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(visibleCount.base);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resolveCount = () => {
    const width = window.innerWidth;

    if (width >= breakpoints.xl && visibleCount.xl)
      return visibleCount.xl;
    if (width >= breakpoints.lg && visibleCount.lg)
      return visibleCount.lg;
    if (width >= breakpoints.md && visibleCount.md)
      return visibleCount.md;
    if (width >= breakpoints.sm && visibleCount.sm)
      return visibleCount.sm;

    return visibleCount.base;
  };

  useEffect(() => {
    const update = () => setCount(resolveCount());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visibleCount]);

  const maxIndex = Math.max(0, children.length - count);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    if (!autoPlay) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, interval);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [autoPlay, interval, maxIndex]);

  const handlePrev = () => {
    setIndex((i) => Math.max(0, i - 1));
    startTimer();
  };

  const handleNext = () => {
    setIndex((i) => Math.min(maxIndex, i + 1));
    startTimer();
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {showControls && (
        <Button
          variant="text"
          size="sm"
          onClick={handlePrev}
          disabled={index === 0}
          className="hoverable-btn -left-3 top-1/2"
        >
          <FiChevronLeft size={18} />
        </Button>
      )}

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / count) * index}%)`,
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ width: `${100 / count}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <Button
          variant="text"
          size="sm"
          onClick={handleNext}
          disabled={index === maxIndex}
          className="hoverable-btn -right-3 top-1/2"
        >
          <FiChevronRight size={18} />
        </Button>
      )}
    </div>
  );
}
