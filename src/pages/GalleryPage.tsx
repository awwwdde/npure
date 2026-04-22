import { PageHero } from '../components/PageHero';
import { Gallery } from '../sections/Gallery';

export default function GalleryPage() {
  return (
    <>
      <PageHero
        index="IV"
        eyebrow="Архив"
        title={<>Галерея <span className="italic">работ.</span></>}
        description="Более 4 200 флорариумов собрано вручную с 2014 года. Здесь — избранное за последний год."
      />
      <Gallery full />
    </>
  );
}
