import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { CookieConsent } from '../components/CookieConsent';
import { Footer } from '../sections/Footer';

export function SiteLayout() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);
  const { scrollYProgress } = useScroll();
  const orbOffsetA = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbOffsetB = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => {
      window.cancelAnimationFrame(rafId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="relative z-10 min-h-screen overflow-x-clip bg-transparent text-bone-100">
      <motion.div
        style={{ y: orbOffsetA }}
        className="pointer-events-none fixed -left-44 top-[16vh] h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]"
      />
      <motion.div
        style={{ y: orbOffsetB }}
        className="pointer-events-none fixed -right-36 top-[38vh] h-[28rem] w-[28rem] rounded-full bg-bone-100/10 blur-[140px]"
      />
      <Header />
      <main className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
