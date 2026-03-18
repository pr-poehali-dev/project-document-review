interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">Защита прав потребителей</div>
        <nav className="flex gap-8">
          <a
            href="#signs"
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm"
          >
            Признаки
          </a>
          <a
            href="#contacts"
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm"
          >
            Куда обращаться
          </a>
        </nav>
      </div>
    </header>
  );
}
