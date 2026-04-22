import { motion } from 'framer-motion';

const IMAGES = [
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
  '/media-placeholder.svg',
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
