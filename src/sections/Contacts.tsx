import { motion } from 'framer-motion';

const STUDIOS = [
  {
    city: 'Москва',
    address: 'Садовая-Кудринская, 20',
    metro: 'м. Баррикадная',
    hours: 'Пн–Вс · 11:00 — 21:00',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?auto=format&fit=crop&w=1600&q=85',
  },
  {
    city: 'Санкт-Петербург',
    address: 'Гороховая, 16/71',
    metro: 'м. Адмиралтейская',
    hours: 'Пн–Вс · 11:00 — 21:00',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1600&q=85',
  },
];

export function Contacts() {
  return (
    <section id="contacts" className="relative bg-ink-900 py-28 md:py-40">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="micro-label">№ 08 — Контакты</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              Две студии.
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-sm text-bone-100/70">
            <a href="tel:+78001019957" className="link-underline">8 800 101-99-57</a>
            <a href="mailto:info@npure.ru" className="link-underline">info@npure.ru</a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {STUDIOS.map((s, i) => (
            <motion.div
              key={s.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.city}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-display text-3xl text-bone-50">{s.city}</div>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.24em] text-bone-100/55">
                    {s.metro}
                  </div>
                </div>
                <div className="text-right text-sm text-bone-100/70">
                  <div>{s.address}</div>
                  <div className="mt-1">{s.hours}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-bone-100/10 pt-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="micro-label">Быстрая связь</span>
            <h3 className="display mt-6 text-3xl text-bone-50 md:text-4xl">
              Перезвоним<br />за 15 минут.
            </h3>
          </div>
          <form className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Имя"
                className="border-0 border-b border-bone-100/15 bg-transparent pb-3 text-sm text-bone-50 placeholder-bone-100/40 outline-none transition-colors focus:border-bone-50"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="border-0 border-b border-bone-100/15 bg-transparent pb-3 text-sm text-bone-50 placeholder-bone-100/40 outline-none transition-colors focus:border-bone-50"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Сообщение"
              className="resize-none border-0 border-b border-bone-100/15 bg-transparent pb-3 text-sm text-bone-50 placeholder-bone-100/40 outline-none transition-colors focus:border-bone-50"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-xs text-[11px] text-bone-100/40">
                Нажимая «отправить», вы соглашаетесь с политикой конфиденциальности.
              </p>
              <button type="submit" className="btn-primary">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
