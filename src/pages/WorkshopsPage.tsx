import { PageHero } from '../components/PageHero';
import { Workshops } from '../sections/Workshops';

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        index="III"
        eyebrow="Мастер-классы"
        title={<>Собрать <span className="italic">руками.</span></>}
        description="Индивидуально или в группе — за два часа вы уходите с готовым флорариумом, собранным лично."
      />
      <Workshops />
    </>
  );
}
