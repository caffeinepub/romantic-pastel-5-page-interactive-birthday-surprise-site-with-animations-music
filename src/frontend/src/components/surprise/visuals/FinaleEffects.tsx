import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { RabbitSprite } from './RabbitSprite';

interface Particle {
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
}

export function FinaleEffects() {
    const [confetti, setConfetti] = useState<Particle[]>([]);
    const [balloons, setBalloons] = useState<Particle[]>([]);
    const [glitterRain, setGlitterRain] = useState<Particle[]>([]);

    useEffect(() => {
        // Confetti hearts
        const newConfetti = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 4 + Math.random() * 2,
            size: 20 + Math.random() * 15
        }));
        setConfetti(newConfetti);

        // Balloons
        const newBalloons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            left: 10 + (i * 8) + Math.random() * 5,
            delay: i * 0.5,
            duration: 8 + Math.random() * 4,
            size: 40 + Math.random() * 20
        }));
        setBalloons(newBalloons);

        // Glitter rain
        const newGlitter = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 4,
            duration: 3 + Math.random() * 2,
            size: 8 + Math.random() * 8
        }));
        setGlitterRain(newGlitter);
    }, []);

    return (
        <>
            {/* Pastel sky background */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(/assets/generated/pastel-sky-bg.dim_1920x1080.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7
                }}
            />

            {/* Confetti hearts */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                {confetti.map((particle) => (
                    <div
                        key={`confetti-${particle.id}`}
                        className="animate-confetti-fall absolute"
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    >
                        <Heart
                            size={particle.size}
                            className="text-secondary"
                            fill="currentColor"
                        />
                    </div>
                ))}
            </div>

            {/* Balloons */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                {balloons.map((balloon) => (
                    <div
                        key={`balloon-${balloon.id}`}
                        className="animate-balloon-float absolute"
                        style={{
                            left: `${balloon.left}%`,
                            animationDelay: `${balloon.delay}s`,
                            animationDuration: `${balloon.duration}s`
                        }}
                    >
                        <div
                            className="rounded-full bg-gradient-to-br from-accent to-primary shadow-lg"
                            style={{
                                width: `${balloon.size}px`,
                                height: `${balloon.size * 1.2}px`
                            }}
                        />
                        <div className="w-0.5 h-12 bg-foreground/20 mx-auto" />
                    </div>
                ))}
            </div>

            {/* Glitter rain */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
                {glitterRain.map((particle) => (
                    <div
                        key={`glitter-${particle.id}`}
                        className="animate-glitter-rain absolute"
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    >
                        <Sparkles
                            size={particle.size}
                            className="text-gold"
                            fill="currentColor"
                        />
                    </div>
                ))}
            </div>

            {/* Cute rabbits */}
            <RabbitSprite variant="hopping" className="fixed bottom-10 left-10 z-10" />
            <RabbitSprite variant="balloon" className="fixed bottom-10 right-10 z-10" />
        </>
    );
}
