import { motion } from 'framer-motion';

const LAYERS = [
  { n: '01', title: 'Пробка с LED', body: 'Тёплый свет 2700K · таймер 8 часов' },
  { n: '02', title: 'Тропические растения', body: 'Фиттония · папоротник · криптантус' },
  { n: '03', title: 'Сфагнум', body: 'Удерживает влагу · антисептик' },
  { n: '04', title: 'Питательный субстрат', body: 'Кокос · биогумус · перлит' },
  { n: '05', title: 'Мох и мульча', body: 'Декоративный слой · защита корней' },
  { n: '06', title: 'Дренаж', body: 'Керамзит · отвод воды' },
];

export function Components() {
  return (
    <section className="section-shell">
      <div className="hairline mx-auto w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-8rem)]" />
      <div className="container-edge pt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="micro-label">№ 02 — Анатомия</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              Шесть слоёв.
              <br />
              <span className="italic">Одна экосистема.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.8] text-bone-100/65">
            Каждый флорариум — ручная сборка от дренажа до LED-крышки.
            Срок жизни от 3 до 5 лет без пересадок.
          </p>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {LAYERS.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="flex items-start gap-6 border-t border-bone-100/10 pt-6"
            >
              <span className="font-display text-4xl text-bone-100/30">{l.n}</span>
              <div>
                <h3 className="font-display text-2xl text-bone-50">{l.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-bone-100/60">{l.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
