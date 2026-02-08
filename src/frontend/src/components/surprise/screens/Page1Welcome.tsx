import { ScreenLayout } from '../ScreenLayout';
import { HeartButton } from '../HeartButton';
import { AmbientLayers } from '../visuals/AmbientLayers';
import { RabbitSprite } from '../visuals/RabbitSprite';

interface Page1WelcomeProps {
    selectedFeeling: string | null;
    onSelectFeeling: (feeling: string) => void;
    onNext: () => void;
}

const feelings = [
    { id: 'excited', label: 'Super excited 😆' },
    { id: 'calm', label: 'Calm but happy 💙' },
    { id: 'shy', label: 'A little shy 🫣' },
    { id: 'loved', label: 'Very loved today 🫶' }
];

export function Page1Welcome({ selectedFeeling, onSelectFeeling, onNext }: Page1WelcomeProps) {
    return (
        <ScreenLayout title="A Special Surprise for You 💙">
            <AmbientLayers showHearts showStars intensity="normal" />
            <RabbitSprite variant="hopping" className="absolute bottom-20 left-10 md:left-20" />
            
            <div className="space-y-8">
                <div className="text-xl md:text-2xl text-foreground/90 leading-relaxed space-y-2">
                    <p>Hey baby… 💙</p>
                    <p>Tomorrow is your birthday 🎂✨</p>
                    <p className="mt-4">How are you feeling right now?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {feelings.map((feeling) => (
                        <button
                            key={feeling.id}
                            onClick={() => onSelectFeeling(feeling.id)}
                            className={`
                                px-6 py-4 rounded-3xl text-lg font-medium transition-all duration-300
                                ${selectedFeeling === feeling.id
                                    ? 'bg-primary text-primary-foreground shadow-dreamy scale-105'
                                    : 'bg-card/80 backdrop-blur-sm text-card-foreground hover:bg-card hover:shadow-soft hover:scale-102'
                                }
                            `}
                        >
                            {feeling.label}
                        </button>
                    ))}
                </div>

                <div className="mt-12">
                    <HeartButton onClick={onNext} />
                </div>
            </div>
        </ScreenLayout>
    );
}
