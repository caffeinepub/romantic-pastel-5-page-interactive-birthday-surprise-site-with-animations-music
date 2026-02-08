import { ScreenLayout } from '../ScreenLayout';
import { HeartButton } from '../HeartButton';
import { AmbientLayers } from '../visuals/AmbientLayers';
import { SparkleOverlay } from '../visuals/SparkleOverlay';

interface Page2MemoriesProps {
    selectedMemory: string | null;
    onSelectMemory: (memory: string) => void;
    onNext: () => void;
}

const memories = [
    { id: 'talks', label: 'Late-night talks 🌙' },
    { id: 'laugh', label: 'When we laugh together 😂' },
    { id: 'every', label: 'Every moment 💙' },
    { id: 'all', label: 'All of the above ✨' }
];

export function Page2Memories({ selectedMemory, onSelectMemory, onNext }: Page2MemoriesProps) {
    return (
        <ScreenLayout title="Us ✨">
            <AmbientLayers showHearts showStars showGlitter intensity="normal" />
            <SparkleOverlay localized />
            
            <div className="space-y-8">
                <div className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                    <p className="mb-6">Every moment with you feels special to me.</p>
                    <p className="mt-8 font-semibold">What's your favorite memory with me?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {memories.map((memory) => (
                        <button
                            key={memory.id}
                            onClick={() => onSelectMemory(memory.id)}
                            className={`
                                px-6 py-4 rounded-3xl text-lg font-medium transition-all duration-300
                                ${selectedMemory === memory.id
                                    ? 'bg-secondary text-secondary-foreground shadow-dreamy scale-105'
                                    : 'bg-card/80 backdrop-blur-sm text-card-foreground hover:bg-card hover:shadow-soft hover:scale-102'
                                }
                            `}
                        >
                            {memory.label}
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
