interface SparkleOverlayProps {
    localized?: boolean;
    goldGlow?: boolean;
}

export function SparkleOverlay({ localized = false, goldGlow = false }: SparkleOverlayProps) {
    return (
        <div
            className={`fixed pointer-events-none ${localized ? 'inset-x-0 top-1/4 h-1/2' : 'inset-0'}`}
            style={{
                backgroundImage: 'url(/assets/generated/sparkle-tile.dim_512x512.png)',
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
                opacity: goldGlow ? 0.4 : 0.2,
                mixBlendMode: 'screen',
                animation: goldGlow ? 'pulse-glow 2s ease-in-out infinite' : 'shimmer 3s ease-in-out infinite'
            }}
        />
    );
}
