import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About Me", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="relative z-50 flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight text-foreground leading-tight">
            Pasindu Kandamby
          </span>
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
            Network & System Administrator
          </span>
        </Link>

        <div className="relative z-50 flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="block h-0.5 w-6 bg-foreground"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="nav-overlay flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`font-display text-5xl font-bold tracking-tight transition-colors md:text-7xl ${
                      location.pathname === item.path
                        ? "gradient-text"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
