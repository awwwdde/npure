import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories, type Product } from '../data/products';

function formatPrice(n: number) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/catalog/${p.id}`} className="group block">
        <div className="photo-shell aspect-[4/5]">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="photo-media group-hover:scale-[1.06]"
          />
          {p.badge && (
            <span className="absolute left-5 top-5 bg-bone-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-900">
              {p.badge}
            </span>
          )}
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-bone-50">{p.name}</h3>
            <p className="mt-1.5 text-[12px] uppercase tracking-[0.2em] text-bone-100/50">
              {p.size}
            </p>
          </div>
          <div className="text-right">
            {p.oldPrice && (
              <span className="block text-[12px] text-bone-100/40 line-through">
                {formatPrice(p.oldPrice)}
              </span>
            )}
            <span className="block font-display text-xl text-bone-50">
              {formatPrice(p.price)}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Catalog({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<Product['category'] | 'all'>('all');
  const list = active === 'all' ? products : products.filter((p) => p.category === active);
  const shown = compact ? list.slice(0, 6) : list;

  return (
    <section id="catalog" className="section-shell">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="micro-label">№ 03 — Коллекция</span>
            <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">
              Каталог.
            </h2>
          </div>
          {!compact && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <button
                onClick={() => setActive('all')}
                className={`text-xs uppercase tracking-[0.22em] transition-colors ${
                  active === 'all' ? 'text-bone-50' : 'text-bone-100/50 hover:text-bone-100'
                }`}
              >
                Все
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`text-xs uppercase tracking-[0.22em] transition-colors ${
                    active === c.id ? 'text-bone-50' : 'text-bone-100/50 hover:text-bone-100'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {compact && (
          <div className="mt-20 flex justify-center">
            <Link to="/catalog" className="btn-outline">
              Весь каталог
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
