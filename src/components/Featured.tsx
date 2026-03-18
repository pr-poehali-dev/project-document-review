import Icon from "@/components/ui/icon";

const signs = [
  {
    icon: "AlertTriangle",
    title: "Обещания «100% результата»",
    desc: "Гарантии мгновенного заработка, чудесного похудения или решения всех проблем — верный признак лжи.",
  },
  {
    icon: "Clock",
    title: "Искусственная срочность",
    desc: "«Только сегодня», «осталось 2 места», «акция заканчивается через 10 минут» — давление временем, чтобы вы не успели подумать.",
  },
  {
    icon: "Star",
    title: "Фальшивые отзывы",
    desc: "Безликие восторженные отзывы без деталей, фото со стоков вместо реальных людей — всё это придумано.",
  },
  {
    icon: "EyeOff",
    title: "Скрытые условия",
    desc: "Мелкий шрифт, условия «*», доп. платежи, которые не упомянуты в рекламе — читайте договор до подписания.",
  },
  {
    icon: "TrendingUp",
    title: "Нереальные цифры",
    desc: "«Зарабатывай 300 000 ₽ в месяц без опыта» или «похудей на 20 кг за неделю» — это ложь, подкреплённая цифрами.",
  },
  {
    icon: "Shield",
    title: "Давление авторитетом",
    desc: "Ссылки на несуществующие сертификаты, поддельные логотипы ТВ-каналов и одобрения «экспертов» без имени.",
  },
];

export default function Featured() {
  return (
    <div id="signs" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-red-500 font-medium mb-3">Как распознать</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          6 признаков недобросовестной рекламы
        </h2>
        <p className="text-neutral-500 text-lg mb-14 max-w-2xl">
          Мошенники используют одни и те же приёмы. Зная их — вы защищены.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signs.map((item) => (
            <div key={item.title} className="border border-neutral-100 p-6 hover:border-red-200 hover:shadow-sm transition-all duration-300">
              <div className="w-10 h-10 bg-red-50 flex items-center justify-center mb-4">
                <Icon name={item.icon} size={20} className="text-red-500" fallback="AlertTriangle" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 text-base">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-red-50 border-l-4 border-red-500 p-6">
          <p className="text-neutral-800 font-medium text-lg mb-1">Попались на крючок?</p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Не платите дополнительных денег, не передавайте личные данные и сохраните все доказательства:
            скриншоты рекламы, переписку, чеки. Это поможет при обращении в надзорные органы.
          </p>
        </div>
      </div>
    </div>
  );
}
