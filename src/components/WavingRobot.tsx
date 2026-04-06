import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Animated robot that appears at random intervals (15-40s),
 * waves 👋 at the viewer, then runs off screen and disappears.
 */
export default function WavingRobot() {
  const [visible, setVisible] = useState(false);

  const scheduleNext = useCallback(() => {
    const delay = 15000 + Math.random() * 25000; // 15-40 seconds
    const timer = setTimeout(() => setVisible(true), delay);
    return timer;
  }, []);

  useEffect(() => {
    const timer = scheduleNext();
    return () => clearTimeout(timer);
  }, [scheduleNext]);

  // After robot finishes exit, schedule next appearance
  const handleExitComplete = () => {
    setVisible(false);
    const timer = scheduleNext();
    // cleanup on unmount
    return () => clearTimeout(timer);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="robot"
          initial={{ x: -120, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 14 },
          }}
          exit={{
            x: typeof window !== "undefined" ? window.innerWidth + 120 : 1200,
            opacity: 0,
            transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
          }}
          onAnimationComplete={(definition) => {
            // After entrance, wait 2.5s waving then trigger exit
            if (definition === "animate" || (typeof definition === "object" && "x" in definition && (definition as any).x === 0)) {
              setTimeout(() => setVisible(false), 2800);
            }
          }}
          className="fixed bottom-6 left-6 z-50 flex items-end gap-2 pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="mb-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-mono text-foreground shadow-lg"
          >
            Hey there! 👋
          </motion.div>

          {/* Robot body */}
          <div className="relative flex flex-col items-center">
            {/* Waving hand */}
            <motion.span
              animate={{
                rotate: [0, 20, -10, 20, -10, 15, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                repeat: 1,
                ease: "easeInOut",
              }}
              className="absolute -top-1 -right-4 text-2xl origin-bottom"
              style={{ transformOrigin: "70% 80%" }}
            >
              👋
            </motion.span>

            {/* Robot emoji */}
            <motion.span
              animate={{
                y: [0, -4, 0, -4, 0],
              }}
              transition={{
                duration: 1,
                repeat: 2,
                ease: "easeInOut",
              }}
              className="text-5xl leading-none"
            >
              🤖
            </motion.span>

            {/* Running legs animation */}
            <motion.div
              animate={{
                scaleX: [1, 1.15, 1, 1.15, 1],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-1 w-6 rounded-full bg-muted-foreground/20 mt-0.5"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
