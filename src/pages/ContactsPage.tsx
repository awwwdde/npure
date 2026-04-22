import { PageHero } from '../components/PageHero';
import { Contacts } from '../sections/Contacts';

export default function ContactsPage() {
  return (
    <>
      <PageHero
        index="VI"
        eyebrow="Контакты"
        title={<>На связи <span className="italic">с вами.</span></>}
      />
      <Contacts />
    </>
  );
}
