'use client'
import { useState } from 'react'
import { SITE_URL, SHARE_TEXT } from '@/ts/redes'

const shareTargets = [
    {
        name: 'WhatsApp',
        color: 'bg-[#25D366]',
        href: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SITE_URL}`)}`,
        vb: '0 0 512 512',
        p: 'M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z',
    },
    {
        name: 'Facebook',
        color: 'bg-[#1877F2]',
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`,
        vb: '0 0 448 512',
        p: 'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z',
    },
    {
        name: 'X',
        color: 'bg-black',
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`,
        vb: '0 0 512 512',
        p: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    {
        name: 'Telegram',
        color: 'bg-[#229ED9]',
        href: `https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`,
        vb: '0 0 496 512',
        p: 'M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.8 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'
    }
]

export const ShareModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [copied, setCopied] = useState(false)

    if (!open) return null

    const handleCopy = async () => {
        await navigator.clipboard.writeText(SITE_URL)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-sm bg-white rounded-[2rem] p-6 shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink/60"
                >
                    ✕
                </button>

                <h3 className="font-display font-bold text-xl text-ink mb-1">Compartir</h3>
                <p className="font-body text-sm text-ink/60 mb-5">Comparte Dilo con amor con quien quieras</p>

                <div className="grid grid-cols-4 gap-3 mb-5">
                    {shareTargets.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-1.5 group"
                        >
                            <span className={`flex items-center justify-center h-12 w-12 rounded-full text-white transition-transform duration-300 group-hover:scale-110 ${s.color}`}>
                                <svg className="w-5 h-5" viewBox={s.vb} fill="currentColor"><path d={s.p} /></svg>
                            </span>
                            <span className="text-xs text-ink/60 font-body">{s.name}</span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 bg-cream rounded-full border border-ink/10 pl-4 pr-1.5 py-1.5">
                    <span className="flex-1 truncate text-sm text-ink/70 font-body">{SITE_URL}</span>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="shrink-0 bg-rose text-white text-sm font-display font-semibold px-4 py-2 rounded-full hover:bg-rose/90 transition-colors"
                    >
                        {copied ? '¡Copiado!' : 'Copiar'}
                    </button>
                </div>
            </div>
        </div>
    )
}