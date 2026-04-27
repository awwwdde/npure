import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

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
          <ThemeToggle />
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
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-ink-900/95 backdrop-blur-xl"
              initial={{ y: -14, opacity: 0.92 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0.9 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="container-edge flex min-h-screen flex-col justify-between pb-12 pt-8">
                <div className="mb-8 flex items-center justify-end">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-full border border-bone-100/20 text-bone-100/85 transition-colors hover:border-bone-100/45 hover:text-bone-50"
                    onClick={() => setOpen(false)}
                    aria-label="Закрыть меню"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="grid gap-7">
                  {NAV.map((n, i) => (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <NavLink
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="font-display text-3xl tracking-tight text-bone-50"
                      >
                        {n.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <div className="grid gap-5 border-t border-bone-100/10 pt-7">
                  <a
                    href="tel:+78001019957"
                    onClick={() => setOpen(false)}
                    className="text-[11px] uppercase tracking-[0.26em] text-bone-100/80 transition-colors hover:text-bone-50"
                  >
                    8 800 101-99-57
                  </a>
                  <Link to="/catalog" onClick={() => setOpen(false)} className="btn-outline w-fit !py-2.5 !px-5 !text-[10px]">
                    Магазин
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
