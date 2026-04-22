import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Story } from '../sections/Story';
import { Components } from '../sections/Components';

const TEAM = [
  { name: 'Елена Ивлева', role: 'Основатель · главный флорист', img: '/media-placeholder.svg' },
  { name: 'Артём Соколов', role: 'Дизайн и архитектура', img: '/media-placeholder.svg' },
  { name: 'Мария Климова', role: 'Ботаника · микология', img: '/media-placeholder.svg' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="V"
        eyebrow="О студии"
        title={<>С 2014 года.<br /><span className="italic">Ручная работа.</span></>}
        description="Мы собрали более 4 200 флорариумов — от настольных композиций до архитектурных инсталляций в офисах и ресторанах."
      />
      <Story />
      <Components />
      <section className="relative bg-ink-900 py-28 md:py-40">
        <div className="container-edge">
          <span className="micro-label">Команда</span>
          <h2 className="display mt-8 text-4xl text-bone-50 md:text-6xl">Кто делает.</h2>
          <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {TEAM.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-800">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover grayscale" />
                </div>
                <div className="mt-6 font-display text-2xl text-bone-50">{p.name}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.22em] text-bone-100/55">
                  {p.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
