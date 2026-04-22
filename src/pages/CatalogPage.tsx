import { Catalog } from '../sections/Catalog';
import { PageHero } from '../components/PageHero';

export default function CatalogPage() {
  return (
    <>
      <PageHero
        index="II"
        eyebrow="Коллекция 2026"
        title={<>Каталог<br /><span className="italic">живого декора.</span></>}
        description="Все флорариумы собираются под заказ вручную. Готовы за 5–7 дней."
      />
      <Catalog />
    </>
  );
}
