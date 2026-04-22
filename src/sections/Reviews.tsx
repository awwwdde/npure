import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Анастасия К.',
    source: 'Yandex',
    city: 'Москва',
    text: 'Живёт у нас уже год, растения в идеальном состоянии. Подсветка мягкая — вечером как волшебный фонарь.',
  },
  {
    name: 'Михаил Д.',
    source: 'Google',
    city: 'Санкт-Петербург',
    text: 'Заказывал корпоративные подарки на 40 человек. Собрали за неделю, доставили точно в срок.',
  },
  {
    name: 'Ольга Т.',
    source: 'VK',
    city: 'Москва',
    text: 'Поливаю раз в 3 недели, свет включается сам. Лучший декор, который я купила за последние годы.',
  },
  {
    name: 'Дмитрий С.',
    source: 'Yandex',
    city: 'Санкт-Петербург',
    text: 'Ходили на мастер-класс с женой. Лучший вечер за месяц — и теперь у нас дома свой флорариум.',
  },
  {
    name: 'Ксения Л.',
    source: 'Google',
    city: 'Москва',
    text: 'Брала флорариум в студию на Садовой-Кудринской. Консультация на месте очень помогла с выбором подсветки.',
  },
  {
    name: 'Игорь В.',
    source: 'Yandex',
    city: 'Москва',
    text: 'Упаковка и сервис топовые, всё объяснили по уходу. За 8 месяцев растение выглядит так же свежо.',
  },
  {
    name: 'Екатерина П.',
    source: 'VK',
    city: 'Санкт-Петербург',
    text: 'Покупали в магазине на Гороховой — очень уютно, собрали набор под наш интерьер за 15 минут.',
  },
  {
    name: 'Роман Н.',
    source: 'Google',
    city: 'Санкт-Петербург',
    text: 'Заказал в подарок, доставили в тот же день по Питеру. Получатель в восторге, выглядит очень дорого.',
  },
];

export function Reviews() {
  const [city, setCity] = useState<'Москва' | 'Санкт-Петербург'>('Москва');
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(() => REVIEWS.filter((r) => r.city === city), [city]);
  const visible = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="reviews" className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="micro-label">№ 05 — Отзывы</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              4.98 / 5
            </h2>
            <p className="mt-4 text-sm text-bone-100/60">1 240 оценок на Yandex и Google</p>
            <div className="mt-4 flex items-center gap-2 text-bone-100/80">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setCity('Москва');
                setShowAll(false);
              }}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.24em] transition-colors ${
                city === 'Москва'
                  ? 'border-bone-100 bg-bone-100 text-ink-900'
                  : 'border-bone-100/20 text-bone-100/75 hover:border-bone-100/40'
              }`}
            >
              Москва
            </button>
            <button
              onClick={() => {
                setCity('Санкт-Петербург');
                setShowAll(false);
              }}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.24em] transition-colors ${
                city === 'Санкт-Петербург'
                  ? 'border-bone-100 bg-bone-100 text-ink-900'
                  : 'border-bone-100/20 text-bone-100/75 hover:border-bone-100/40'
              }`}
            >
              Санкт-Петербург
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {visible.map((r, i) => (
            <motion.article
              key={`${r.name}-${r.city}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              className="border-t border-bone-100/10 pt-8"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone-100/15 text-bone-100/65">
                <Quote className="h-4 w-4" />
              </div>
              <p className="font-display text-2xl leading-[1.5] text-bone-50 md:text-3xl">
                «{r.text}»
              </p>
              <div className="mt-8 flex items-center justify-between text-xs">
                <span className="text-bone-50">{r.name}</span>
                <span className="uppercase tracking-[0.25em] text-bone-100/45">{r.source} · {r.city}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && filtered.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button onClick={() => setShowAll(true)} className="btn-outline">
              Показать все отзывы
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
