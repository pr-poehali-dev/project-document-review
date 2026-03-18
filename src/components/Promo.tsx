import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", text: "Зафиксируйте факт — сделайте скриншоты рекламы, сохраните чеки и переписку" },
  { num: "02", text: "Напишите претензию продавцу или рекламодателю в письменной форме" },
  { num: "03", text: "Если отказали — подайте жалобу в ФАС, Роспотребнадзор или прокуратуру" },
  { num: "04", text: "При финансовом ущербе — обратитесь в суд или к финансовому уполномоченному" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Абстрактный фон"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-5xl mx-auto w-full">
        <p className="uppercase text-xs tracking-[0.3em] text-red-400 font-medium mb-4">
          Пошаговая инструкция
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
          Что делать, если<br />вас обманули?
        </h2>
        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-5 border-b border-white/15 pb-5">
              <span className="text-red-400 font-bold text-lg shrink-0">{step.num}</span>
              <p className="text-white/85 text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
