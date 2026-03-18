export default function Footer() {
  return (
    <div
      id="contacts"
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 px-6 h-full w-full flex flex-col justify-between">

            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-red-400 font-medium mb-4">Куда обращаться</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm sm:text-base">ФАС России</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-1">
                    Федеральная антимонопольная служба — контролирует соблюдение закона о рекламе
                  </p>
                  <a href="https://fas.gov.ru" target="_blank" rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 text-xs sm:text-sm transition-colors">
                    fas.gov.ru
                  </a>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm sm:text-base">Роспотребнадзор</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-1">
                    Защита прав потребителей — при нарушении ваших прав как покупателя
                  </p>
                  <a href="https://rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 text-xs sm:text-sm transition-colors">
                    rospotrebnadzor.ru
                  </a>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm sm:text-base">Горячая линия</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-1">
                    Единый консультационный центр Роспотребнадзора — бесплатно, круглосуточно
                  </p>
                  <a href="tel:88002000600"
                    className="text-red-400 hover:text-red-300 text-xs sm:text-sm transition-colors font-bold">
                    8-800-200-00-04
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.85] text-white font-bold tracking-tight">
                ЗАЩИТА
              </h1>
              <div className="text-right">
                <p className="text-neutral-400 text-xs sm:text-sm mb-1">
                  Закон о рекламе № 38-ФЗ
                </p>
                <p className="text-neutral-500 text-xs">
                  {new Date().getFullYear()} · Брошюра для потребителей
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
