import { motion } from 'framer-motion';
import videoBg from '../content/npure.mp4';

const CARDS = [
  {
    title: 'Индивидуальный',
    price: 'от 7 000 ₽',
    body: 'Лично с мастером · 2 часа · любой размер.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Для компании',
    price: 'от 4 500 ₽ / чел',
    body: 'От 6 до 40 человек · в офисе или в студии.',
    image: 'https://images.unsplash.com/photo-1511795409834-432f7d7a6b8b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Детский',
    price: 'от 3 900 ₽',
    body: 'Для гостей 7–14 лет · день рождения · выпускной.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85',
  },
];

export function Workshops() {
  return (
    <section id="workshops" className="section-shell">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="micro-label">№ 09 — Мастер-классы</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              Соберите
              <br />
              <span className="italic">свой мир.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.8] text-bone-100/70">
            Два часа, ваши руки, наши материалы. Уходите с готовым флорариумом
            и навыком, который останется с вами.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative aspect-[16/7] overflow-hidden"
        >
          <video
            className="h-full w-full object-cover"
            src={videoBg}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/45 via-transparent to-ink-900/35" />
        </motion.div>

        <div className="mt-20 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="pt-8"
            >
              <div className="photo-shell mb-6 aspect-[4/3]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="photo-media hover:scale-105"
                />
              </div>
              <h3 className="font-display text-3xl text-bone-50">{c.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-bone-100/65">{c.body}</p>
              <div className="mt-10 font-display text-xl text-bone-50">{c.price}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <a href="/contacts" className="btn-outline">Записаться</a>
        </div>
      </div>
    </section>
  );
}
