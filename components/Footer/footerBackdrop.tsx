const footerBackdrop = () => (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
            className="absolute -bottom-16 left-0 right-0 h-74 md:h-56 xl:h-68 opacity-70"
            style={{
                maskImage: 'linear-gradient(to bottom, black 35%, transparent 90%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 90%)',
            }}
        >
            <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" preserveAspectRatio="none">
                <path d="M-50 160 C 150 60, 350 260, 550 110 C 650 40, 750 90, 850 30 L850 300 L-50 300 Z" fill="url(#waveA)" />
                <path d="M-50 210 C 200 110, 400 290, 650 160 C 750 100, 800 140, 850 100 L850 300 L-50 300 Z" fill="url(#waveB)" opacity="0.55" />
                <defs>
                    <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C9AEE0" />
                        <stop offset="100%" stopColor="#F5CE6B" />
                    </linearGradient>
                    <linearGradient id="waveB" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8FD0E0" />
                        <stop offset="100%" stopColor="#E8607D" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

       
    </div>
)
export default footerBackdrop