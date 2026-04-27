import { motion } from 'framer-motion';
import { ClipboardCheck, MessagesSquare, Sparkles, Truck } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    title: 'Заявка',
    body: 'Оставляете заявку — консультант свяжется в течение 15 минут.',
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '02',
    title: 'Детали',
    body: 'Согласуем размер, растения, подсветку, адрес и дату.',
    icon: MessagesSquare,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '03',
    title: 'Сборка',
    body: 'Мастера собирают флорариум вручную за 5–7 дней.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '04',
    title: 'Доставка',
    body: 'Привозим в идеальной упаковке. Оплата при получении.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601599963565-b7f5b8f89f60?auto=format&fit=crop&w=1200&q=85',
  },
];

export function Process() {
  return (
    <section className="section-shell">
      <div className="container-edge">
        <div>
          <span className="micro-label">№ 06 — Заказ</span>
          <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
            Четыре шага<span className="italic"> до флорариума.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-12 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="pt-4"
            >
              <div className="glass-pill mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full text-bone-50">
                <s.icon className="h-4.5 w-4.5" />
              </div>
              <div className="mb-6 aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <span className="font-display text-5xl text-bone-100/25">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl text-bone-50">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-bone-100/65">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
