import { motion } from 'framer-motion';

const FACTS = [
  { n: '10+', label: 'лет студии' },
  { n: '4 200', label: 'флорариумов собрано' },
  { n: '5 лет', label: 'средний срок жизни' },
  { n: '2', label: 'студии · МСК / СПБ' },
];

export function Story() {
  return (
    <section id="story" className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-edge grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src="/media-placeholder.svg"
          alt="Florarium close-up"
          className="aspect-[4/5] w-full object-cover"
        />

        <div className="flex flex-col justify-center">
          <span className="micro-label">№ 01 — Философия</span>
          <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
            Живая картина,
            <br />
            <span className="italic">которая не просит воды.</span>
          </h2>
          <p className="mt-8 max-w-lg text-[15px] leading-[1.8] text-bone-100/70">
            Флорариум — миниатюрная экосистема в стекле. Растения дышат, испаряют влагу,
            она конденсируется на стенках и возвращается в почву. Мы собираем каждую
            композицию вручную, подбирая растения под свет вашего пространства.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-y-10 gap-x-8">
            {FACTS.map((f) => (
              <div key={f.label}>
                <div className="font-display text-5xl text-bone-50 md:text-6xl">{f.n}</div>
                <div className="micro-label mt-2">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
