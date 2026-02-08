import { ScreenLayout } from '../ScreenLayout';
import { HeartButton } from '../HeartButton';
import { AmbientLayers } from '../visuals/AmbientLayers';
import { RabbitSprite } from '../visuals/RabbitSprite';

interface Page3WishProps {
    wish: string;
    onWishChange: (wish: string) => void;
    onNext: () => void;
}

export function Page3Wish({ wish, onWishChange, onNext }: Page3WishProps) {
    return (
        <ScreenLayout title="Your Wish ✨">
            <AmbientLayers showHearts showStars showGlitter intensity="light" />
            <RabbitSprite variant="balloon" className="absolute top-32 right-10 md:right-20" />
            
            <div className="space-y-8">
                <div className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                    <p>Make a wish for your birthday…</p>
                </div>

                <div className="mt-8">
                    <textarea
                        value={wish}
                        onChange={(e) => onWishChange(e.target.value)}
                        placeholder="Type your wish here..."
                        className="w-full h-40 px-6 py-4 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/30 text-foreground text-lg resize-none focus:outline-none focus:border-primary focus:shadow-dreamy transition-all"
                    />
                </div>

                <div className="mt-12">
                    <HeartButton onClick={onNext} />
                </div>
            </div>
        </ScreenLayout>
    );
}
