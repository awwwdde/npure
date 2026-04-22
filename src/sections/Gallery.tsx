import { motion } from 'framer-motion';

const IMAGES = [
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1400&q=85',
];

export function Gallery({ full = false }: { full?: boolean }) {
  const images = full ? [...IMAGES, ...IMAGES] : IMAGES;
  return (
    <section id="gallery" className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="micro-label">№ 04 — Архив</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              Галерея.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.8] text-bone-100/65">
            Работы последнего года. Каждая композиция уникальна по подбору
            растений и геометрии.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {images.map((src, i) => (
            <motion.figure
              key={`${src}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 8) * 0.05 }}
              className={`group relative overflow-hidden ${
                i % 5 === 0 ? 'aspect-[3/4] md:col-span-2 md:row-span-2' : 'aspect-[3/4]'
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
