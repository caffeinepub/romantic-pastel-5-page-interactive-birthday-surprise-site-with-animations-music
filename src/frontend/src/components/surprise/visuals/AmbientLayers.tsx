import { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface AmbientLayersProps {
    showHearts?: boolean;
    showGlitter?: boolean;
    showStars?: boolean;
    intensity?: 'light' | 'normal' | 'slow';
    goldGlow?: boolean;
}

export function AmbientLayers({
    showHearts = false,
    showGlitter = false,
    showStars = false,
    intensity = 'normal',
    goldGlow = false
}: AmbientLayersProps) {
    const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
    const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);
    const [glitter, setGlitter] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

    useEffect(() => {
        if (showHearts) {
            const heartCount = intensity === 'light' ? 8 : intensity === 'slow' ? 6 : 12;
            const newHearts = Array.from({ length: heartCount }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: intensity === 'slow' ? 8 + Math.random() * 4 : 6 + Math.random() * 3
            }));
            setHearts(newHearts);
        }

        if (showStars) {
            const starCount = 15;
            const newStars = Array.from({ length: starCount }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 3
            }));
            setStars(newStars);
        }

        if (showGlitter) {
            const glitterCount = 20;
            const newGlitter = Array.from({ length: glitterCount }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 2
            }));
            setGlitter(newGlitter);
        }
    }, [showHearts, showGlitter, showStars, intensity]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Hearts */}
            {showHearts && hearts.map((heart) => (
                <div
                    key={`heart-${heart.id}`}
                    className={intensity === 'slow' ? 'animate-float-slow' : 'animate-float'}
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                        bottom: '-50px',
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                        opacity: 0.6
                    }}
                >
                    <Heart
                        className={goldGlow ? 'text-gold' : 'text-secondary'}
                        size={24}
                        fill="currentColor"
                    />
                </div>
            ))}

            {/* Stars */}
            {showStars && stars.map((star) => (
                <div
                    key={`star-${star.id}`}
                    className="animate-twinkle"
                    style={{
                        position: 'absolute',
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        animationDelay: `${star.delay}s`
                    }}
                >
                    <Star
                        className={goldGlow ? 'text-gold' : 'text-accent'}
                        size={16}
                        fill="currentColor"
                    />
                </div>
            ))}

            {/* Glitter */}
            {showGlitter && glitter.map((g) => (
                <div
                    key={`glitter-${g.id}`}
                    className="animate-twinkle"
                    style={{
                        position: 'absolute',
                        left: `${g.left}%`,
                        top: `${g.top}%`,
                        animationDelay: `${g.delay}s`
                    }}
                >
                    <Sparkles
                        className={goldGlow ? 'text-gold' : 'text-primary'}
                        size={12}
                        fill="currentColor"
                    />
                </div>
            ))}
        </div>
    );
}
