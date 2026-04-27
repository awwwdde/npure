import { motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

const spring = { type: 'spring', stiffness: 420, damping: 30, mass: 0.45 };

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0 } : spring;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      aria-pressed={!isDark}
      className="group relative inline-flex h-10 w-[78px] cursor-pointer items-center rounded-full border border-bone-100/25 bg-ink-900/80 p-1.5 backdrop-blur-md transition-all duration-300 hover:border-bone-100/45 hover:bg-ink-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone-100/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span className="sr-only">Смена темы</span>

      <span className="pointer-events-none absolute inset-[1px] rounded-full border border-bone-100/10" />

      <motion.span
        layout
        transition={transition}
        className="absolute inset-y-1.5 left-1.5 w-8 rounded-full border border-bone-100/20 bg-bone-100/12 shadow-[0_4px_14px_rgba(0,0,0,0.24)]"
        animate={{ x: isDark ? 0 : 36 }}
      />

      <span className="relative z-10 flex w-full items-center justify-between px-[3px]">
        <motion.span
          animate={{ rotate: isDark ? 0 : -16, scale: isDark ? 1 : 0.86, opacity: isDark ? 0.92 : 0.5 }}
          transition={transition}
          className="grid h-6 w-6 place-items-center"
        >
          <Moon className="h-3.5 w-3.5 text-bone-100" />
        </motion.span>
        <motion.span
          animate={{ rotate: isDark ? 16 : 0, scale: isDark ? 0.86 : 1, opacity: isDark ? 0.5 : 0.92 }}
          transition={transition}
          className="grid h-6 w-6 place-items-center"
        >
          <Sun className="h-3.5 w-3.5 text-bone-100" />
        </motion.span>
      </span>
    </button>
  );
}
