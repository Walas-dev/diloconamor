import Link from 'next/link'

interface Bt {
    url:string;
    name:string;
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'none';
}

const Button = ({ url, name, variant, children }:Bt) => {

    const color = 
    {   
        primary:' bg-primary/75 hover:bg-primary scale-90 hover:scale-95 px-6 py-4',
        secondary:'border border-primary text-primary hover:bg-white hover:text-primary scale-90 hover:scale-95 px-6 py-4',
        none:''

    }

        return (
            <Link
                key={name}
                href={url || '#'}
                rel="noopener noreferrer"
                className={`
                    relative flex items-center justify-center group font-semibold gap-2 transition-transform duration-300 rounded-3xl
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300
                     ${color[variant]}
                `}
            >
                {children}
            </Link>
        )
}

export default Button
