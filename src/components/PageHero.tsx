import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function PageHero({ index, eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-36 md:pb-28 md:pt-44">
      <div className="container-edge">
        <div className="flex items-start justify-between gap-6">
          <span className="micro-label">{eyebrow}</span>
          <span className="font-display text-2xl text-bone-100/30">{index}</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-10 max-w-[11ch] text-[44px] text-bone-50 sm:text-[74px] md:text-[106px] lg:text-[124px]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 max-w-lg text-[15px] leading-[1.8] text-bone-100/70"
          >
            {description}
          </motion.p>
        )}
      </div>
      <div className="hairline mt-16 w-full md:mt-20" />
    </section>
  );
}
