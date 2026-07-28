const Flower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
    <path d="M12 7.5V9" /><path d="M7.5 12H9" /><path d="M16.5 12H15" /><path d="M12 16.5V15" />
    <path d="m8 8 1.88 1.88" /><path d="M14.12 9.88 16 8" /><path d="m8 16 1.88-1.88" /><path d="M14.12 14.12 16 16" />
  </svg>
)

export const ServicesBackdrop = () => (
  <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[10%] right-[10%] h-96 w-96 rounded-full bg-rose/15 blur-[80px]" />
    <div className="absolute bottom-[10%] left-[5%] h-80 w-80 rounded-full bg-sky/15 blur-[80px]" />
    <Flower className="absolute top-[18%] right-[20%] h-12 w-12 text-rose/30 hidden md:block rotate-12" />
    <Flower className="absolute top-1/2 left-[8%] h-16 w-16 text-butter/40 hidden lg:block -rotate-12" />
    <Flower className="absolute bottom-[15%] right-[28%] h-10 w-10 text-lavender/35 hidden md:block rotate-45" />
  </div>
)