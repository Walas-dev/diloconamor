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
        primary:' bg-primary/50 hover:bg-primary',
        secondary:'border border-primary text-primary hover:bg-white hover:text-primary',
        none:''

    }

        return (
            <Link
                key={name}
                href={url || '#'}
                rel="noopener noreferrer"
                className={`
                    relative flex items-center justify-center group font-semibold scale-90 hover:scale-95 px-6 py-4 gap-2 transition-transform duration-300 rounded-3xl
                     ${color[variant]}
                `}
            >
                {children}
            </Link>
        )
}

export default Button
