import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

function formatPrice(n: number) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <p className="micro-label">404</p>
          <h1 className="display mt-6 text-5xl text-bone-50">Флорариум не найден</h1>
          <Link to="/catalog" className="btn-outline mt-10">В каталог</Link>
        </div>
      </section>
    );
  }

  const idx = products.findIndex((p) => p.id === product.id);
  const next = products[(idx + 1) % products.length];
  const prev = products[(idx - 1 + products.length) % products.length];

  return (
    <section className="relative bg-ink-900 pb-28 pt-36 md:pt-48">
      <div className="container-edge">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-bone-100/60 hover:text-bone-50"
        >
          <ArrowLeft className="h-3 w-3" /> К каталогу
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="photo-shell aspect-[4/5]"
          >
            <img src={product.image} alt={product.name} className="photo-media" />
          </motion.div>

          <div className="flex flex-col justify-between gap-12 lg:pt-12">
            <div>
              <span className="micro-label">{product.size}</span>
              <h1 className="display mt-8 text-[56px] text-bone-50 md:text-[88px]">
                {product.name}
              </h1>
              {product.tagline && (
                <p className="mt-6 font-display text-2xl italic text-bone-100/70">
                  «{product.tagline}»
                </p>
              )}
              <div className="mt-12 flex items-end gap-4">
                {product.oldPrice && (
                  <span className="text-lg text-bone-100/35 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                <span className="font-display text-4xl text-bone-50">
                  {formatPrice(product.price)}
                </span>
              </div>
              <button className="btn-primary mt-10 w-full sm:w-auto">Заказать</button>
            </div>

            <div className="grid gap-6 border-t border-bone-100/10 pt-10">
              <Spec label="Срок сборки" value="5–7 дней" />
              <Spec label="Подсветка" value="LED 2700K · 8 часов по таймеру" />
              <Spec label="Срок жизни" value="3–5 лет без пересадок" />
              <Spec label="Гарантия" value="30 дней на растения · 12 мес. на подсветку" />
              <Spec label="Доставка" value="Москва · СПб · транспортные по России" />
            </div>
          </div>
        </div>

        <div className="mt-28 grid gap-10 border-t border-bone-100/10 pt-10 md:grid-cols-2">
          <Link to={`/catalog/${prev.id}`} className="group flex items-center gap-5">
            <ArrowLeft className="h-4 w-4 text-bone-100/60 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="micro-label">Предыдущий</div>
              <div className="mt-2 font-display text-2xl text-bone-50">{prev.name}</div>
            </div>
          </Link>
          <Link
            to={`/catalog/${next.id}`}
            className="group flex items-center justify-end gap-5 text-right"
          >
            <div>
              <div className="micro-label">Следующий</div>
              <div className="mt-2 font-display text-2xl text-bone-50">{next.name}</div>
            </div>
            <ArrowRight className="h-4 w-4 text-bone-100/60 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 text-sm">
      <span className="text-[11px] uppercase tracking-[0.26em] text-bone-100/50">{label}</span>
      <span className="max-w-[60%] text-right text-bone-100/85">{value}</span>
    </div>
  );
}
