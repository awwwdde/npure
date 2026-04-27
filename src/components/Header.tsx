import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV = [
  { to: '/catalog', label: 'Каталог' },
  { to: '/workshops', label: 'Мастер-классы' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/about', label: 'О студии' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    >
      <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-bone-100/55" style={{ scaleX: progressX }} />
      <div className="container-edge flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-tight text-bone-50">NeoPure</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.26em] transition-colors ${
                  isActive ? 'text-bone-50' : 'text-bone-100/60 hover:text-bone-100'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="tel:+78001019957"
            className="hidden text-[11px] uppercase tracking-[0.26em] text-bone-100/80 transition-colors hover:text-bone-50 xl:block"
          >
            8 800 101-99-57
          </a>
          <Link to="/catalog" className="hidden btn-outline !py-2.5 !px-5 !text-[10px] md:inline-flex">
            Магазин
          </Link>
          <button
            className="grid h-10 w-10 place-items-center text-bone-100/80 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-edge card-immersive grid gap-5 border-t border-bone-100/10 bg-ink-900/95 py-8 backdrop-blur-xl">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: i * 0.04, duration: 0.28 }}
                >
                  <NavLink
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-[0.24em] text-bone-50"
                  >
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
