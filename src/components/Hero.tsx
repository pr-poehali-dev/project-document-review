import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Фоновое изображение"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 opacity-70 font-medium">
          Брошюра для потребителей
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          ЗАЩИТИСЬ ОТ<br />
          <span className="text-red-400">НЕЧЕСТНОЙ</span><br />
          РЕКЛАМЫ
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-85 leading-relaxed">
          Узнайте, как распознать недобросовестную рекламу, что делать, если вы уже столкнулись с обманом, и куда обратиться за защитой своих прав
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signs"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 uppercase tracking-wide text-sm font-medium transition-colors duration-300"
          >
            Узнать признаки обмана
          </a>
          <a
            href="#contacts"
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-wide text-sm font-medium transition-colors duration-300"
          >
            Куда обращаться
          </a>
        </div>
      </div>
    </div>
  );
}
