import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import videoBg from '../content/npure.mp4';

const QA = [
  {
    q: 'Сколько живёт флорариум?',
    a: 'От 3 до 5 лет при базовом уходе: полив раз в 2–3 недели и работа подсветки по 6–8 часов в сутки. Некоторые композиции у клиентов живут 7–10 лет.',
  },
  {
    q: 'Как ухаживать?',
    a: 'Главное — не переливать. Вода добавляется распылителем по стенкам раз в 2–3 недели. Пересадки не требуются. Даём пошаговую инструкцию.',
  },
  {
    q: 'Можно ли ставить на солнце?',
    a: 'Прямые солнечные лучи создают парниковый эффект — растения могут «свариться». Ставьте в 1–2 метрах от окна либо полагайтесь на LED-подсветку в комплекте.',
  },
  {
    q: 'Доставляете в другие города?',
    a: 'Отправляем по всей России транспортными компаниями. Противоударная упаковка с пенопластовым каркасом. Гарантия целостности включена.',
  },
  {
    q: 'Что если растение погибнет?',
    a: 'Гарантия на живые растения — 30 дней. Если что-то завянет по нашей вине — бесплатно заменяем. На подсветку гарантия 12 месяцев.',
  },
  {
    q: 'Можно оформить на юр. лицо?',
    a: 'Да. Договор, счёт, акт, УПД по вашим реквизитам. От 10 флорариумов — скидка 15%.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-edge grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="micro-label">№ 07 — FAQ</span>
          <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
            Вопросы.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mt-10 space-y-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src={videoBg}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/media-placeholder.svg"
                alt="Флорариум в интерьере"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <img
                src="/media-placeholder.svg"
                alt="Детали композиции"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-bone-100/10">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="border-b border-bone-100/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-display text-xl text-bone-50 md:text-2xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-bone-100/60 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-bone-50' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-7 pr-8 text-[14px] leading-[1.8] text-bone-100/65">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
