import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Send } from 'lucide-react';

const LINKS = [
  {
    title: 'Магазин',
    items: [
      { to: '/catalog', label: 'Каталог' },
      { to: '/catalog?c=luxury', label: 'Люкс коллекция' },
      { to: '/catalog?c=flowers', label: 'Стабилизированные цветы' },
      { to: '/catalog?c=living', label: 'Живой декор' },
    ],
  },
  {
    title: 'Услуги',
    items: [
      { to: '/workshops', label: 'Мастер-классы' },
      { to: '/contacts', label: 'Корпоративные заказы' },
      { to: '/contacts', label: 'Индивидуальный заказ' },
    ],
  },
  {
    title: 'Студия',
    items: [
      { to: '/about', label: 'О студии' },
      { to: '/gallery', label: 'Галерея' },
      { to: '/contacts', label: 'Контакты' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-bone-100/10 bg-ink-900 pb-12 pt-24">
      <div className="container-edge">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-display text-3xl text-bone-50">
              Neo Pure
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.8] text-bone-100/60">
              Студия живых экосистем в стекле. Собираем вручную в Москве и Петербурге.
              Отправляем по всей России.
            </p>
            <div className="mt-8 flex gap-6 text-[11px] uppercase tracking-[0.28em] text-bone-100/55">
              <a href="https://wa.me/78001019957" className="link-underline inline-flex items-center gap-2 hover:text-bone-50">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a href="https://t.me/npure" className="link-underline inline-flex items-center gap-2 hover:text-bone-50">
                <Send className="h-3.5 w-3.5" />
                Telegram
              </a>
              <a href="https://vk.com/npure" className="link-underline inline-flex items-center gap-2 hover:text-bone-50">
                <Globe className="h-3.5 w-3.5" />
                VK
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {LINKS.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] uppercase tracking-[0.3em] text-bone-100/45">
                  {col.title}
                </p>
                <ul className="mt-6 grid gap-3">
                  {col.items.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-bone-100/75 transition-colors hover:text-bone-50"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-bone-100/10 pt-8 text-[11px] text-bone-100/45 md:flex-row md:items-center">
          <p>© 2014–2026 Neo Pure. ИНН 7704123456.</p>
          <a
            href="https://t.me/awwddedev"
            target="_blank"
            rel="noreferrer"
            className="tracking-[0.25em] text-[11px] border-bone-100/10 transition-colors hover:text-bone-50"
          >
            Сделано awwwdde
          </a>
          <Link to="/privacy" className="hover:text-bone-50">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
