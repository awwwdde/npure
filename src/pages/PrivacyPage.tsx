import { PageHero } from '../components/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        index="VI"
        eyebrow="Документы"
        title={<>Политика<br /><span className="italic">конфиденциальности.</span></>}
        description="В этом разделе описано, какие данные мы можем собирать, зачем используем cookie и как защищаем персональную информацию."
      />

      <section className="relative bg-ink-900 pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="container-edge grid gap-10 text-bone-100/78">
          <article className="grid gap-4 border-t border-bone-100/10 pt-8">
            <h2 className="font-display text-3xl text-bone-50">1. Общие положения</h2>
            <p className="max-w-4xl text-[15px] leading-[1.85]">
              Настоящая политика определяет порядок обработки и защиты данных пользователей сайта Neo Pure.
              Используя сайт, вы подтверждаете согласие с условиями обработки информации в пределах, указанных
              в этом документе и применимых нормах законодательства РФ.
            </p>
          </article>

          <article className="grid gap-4 border-t border-bone-100/10 pt-8">
            <h2 className="font-display text-3xl text-bone-50">2. Какие данные собираются</h2>
            <p className="max-w-4xl text-[15px] leading-[1.85]">
              Мы можем обрабатывать данные, которые вы вводите в формы связи (имя, телефон, email, комментарий),
              а также технические параметры: IP-адрес, тип устройства, браузер, язык, дата и время посещения,
              страницы входа и переходов внутри сайта.
            </p>
          </article>

          <article className="grid gap-4 border-t border-bone-100/10 pt-8">
            <h2 className="font-display text-3xl text-bone-50">3. Использование cookie</h2>
            <p className="max-w-4xl text-[15px] leading-[1.85]">
              Cookie используются для корректной работы интерфейса, сохранения пользовательских настроек,
              статистики посещаемости и улучшения контента. Вы можете ограничить использование cookie через
              настройки браузера, однако в этом случае часть функций сайта может работать некорректно.
            </p>
          </article>

          <article className="grid gap-4 border-t border-bone-100/10 pt-8">
            <h2 className="font-display text-3xl text-bone-50">4. Цели обработки</h2>
            <p className="max-w-4xl text-[15px] leading-[1.85]">
              Данные используются для обратной связи по заявкам, оформления заказов, улучшения клиентского сервиса,
              аналитики и повышения качества работы сайта. Мы не продаем персональные данные третьим лицам.
            </p>
          </article>

          <article className="grid gap-4 border-t border-bone-100/10 pt-8">
            <h2 className="font-display text-3xl text-bone-50">5. Защита данных и контакты</h2>
            <p className="max-w-4xl text-[15px] leading-[1.85]">
              Мы принимаем организационные и технические меры для защиты информации от несанкционированного
              доступа, изменения и распространения. По вопросам обработки персональных данных можно обратиться
              по адресу: <a className="link-underline text-bone-50" href="mailto:info@npure.ru">info@npure.ru</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
