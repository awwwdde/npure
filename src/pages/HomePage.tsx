import { Hero } from '../sections/Hero';
import { Story } from '../sections/Story';
import { Components } from '../sections/Components';
import { Catalog } from '../sections/Catalog';
import { Reviews } from '../sections/Reviews';
import { Process } from '../sections/Process';
import { FAQ } from '../sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Components />
      <Catalog compact />
      <Reviews />
      <Process />
      <FAQ />
    </>
  );
}
