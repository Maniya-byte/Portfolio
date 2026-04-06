import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Sparkles, Check, Archive } from "lucide-react";

export default function CvDownloadButton() {
  const [state, setState] = useState<"idle" | "animating" | "done">("idle");

  const handleClick = (e: React.MouseEvent) => {
    // If already animating or done, prevent extra clicks but don't prevent the download 
    // if it's the first click.
    if (state !== "idle") {
      e.preventDefault();
      return;
    }
    
    setState("animating");

    // The download will happen via the 'a' tag's default behavior
    // We just handle the animation state here.
    
    setTimeout(() => setState("done"), 1800);
    setTimeout(() => setState("idle"), 5000);
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      <motion.a
        href="./pasindu_kandamby.pdf"
        download="pasindu_kandamby.pdf"
        onClick={handleClick}
        whileHover={state === "idle" ? { scale: 1.05 } : {}}
        whileTap={state === "idle" ? { scale: 0.95 } : {}}
        className="relative inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.6)] overflow-hidden cursor-pointer no-underline"
      >
        <AnimatePresence mode="wait">
          {state === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3"
            >
              <Download className="h-5 w-5" />
              Download My CV
              <Sparkles className="h-4 w-4" />
            </motion.span>
          )}

          {state === "animating" && (
            <motion.span
              key="animating"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3"
            >
              <motion.span
                animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.6, repeat: 2 }}
              >
                <FileText className="h-5 w-5" />
              </motion.span>
              Preparing...
            </motion.span>
          )}

          {state === "done" && (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3"
            >
              <Check className="h-5 w-5" />
              Downloaded!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>

      {/* Animated document flying to archive */}
      <AnimatePresence>
        {state === "animating" && (
          <>
            {/* Flying document */}
            <motion.div
              initial={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
              animate={{
                opacity: [1, 1, 0.8, 0],
                y: [0, -60, -30, 40],
                x: [0, 30, 10, 0],
                scale: [1, 0.8, 0.5, 0.3],
                rotate: [0, -15, 5, 0],
              }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute top-0 pointer-events-none"
            >
              <div className="relative">
                <FileText className="h-8 w-8 text-primary drop-shadow-lg" />
                {/* Sparkle trail */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                  transition={{ duration: 0.8, delay: 0.2, repeat: 2, repeatDelay: 0.3 }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="h-3 w-3 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Archive appearing */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: [0, 0, 1, 1], y: [20, 20, 10, 10], scale: [0, 0, 1, 1.1] }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute -bottom-14 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3 py-1.5">
                <Archive className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-primary">Downloaded</span>
              </div>
            </motion.div>

            {/* Particle burst */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 6) * 40,
                  y: Math.sin((i * Math.PI * 2) / 6) * 40 - 20,
                }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="absolute top-0 pointer-events-none"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
