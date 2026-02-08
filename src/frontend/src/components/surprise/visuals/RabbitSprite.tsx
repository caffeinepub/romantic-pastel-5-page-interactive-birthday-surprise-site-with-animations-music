interface RabbitSpriteProps {
    variant: 'hopping' | 'balloon';
    className?: string;
}

export function RabbitSprite({ variant, className = '' }: RabbitSpriteProps) {
    const imagePath = variant === 'hopping'
        ? '/assets/generated/rabbit-hopping.dim_512x512.png'
        : '/assets/generated/rabbit-balloon.dim_512x512.png';

    return (
        <div className={`${className} ${variant === 'hopping' ? 'animate-hop' : ''}`}>
            <img
                src={imagePath}
                alt="Cute rabbit"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg"
            />
        </div>
    );
}
