import { ScreenLayout } from '../ScreenLayout';
import { HeartButton } from '../HeartButton';
import { AmbientLayers } from '../visuals/AmbientLayers';
import { SparkleOverlay } from '../visuals/SparkleOverlay';

interface Page4LoveProps {
    onNext: () => void;
}

export function Page4Love({ onNext }: Page4LoveProps) {
    return (
        <ScreenLayout title="For You 💙">
            <AmbientLayers showHearts showStars showGlitter intensity="slow" goldGlow />
            <SparkleOverlay goldGlow />
            
            <div className="space-y-8">
                <div className="text-xl md:text-2xl text-foreground/90 leading-relaxed space-y-4">
                    <p>I wish you the best of luck in everything — your dreams, your goals, your life.</p>
                    <p>I'll always cheer for you.</p>
                </div>

                <div className="mt-12">
                    <HeartButton onClick={onNext} />
                </div>
            </div>
        </ScreenLayout>
    );
}
