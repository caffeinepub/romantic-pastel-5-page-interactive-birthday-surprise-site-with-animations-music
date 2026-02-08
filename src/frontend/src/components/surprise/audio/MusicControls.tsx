import { Volume2, VolumeX, Music } from 'lucide-react';
import { useMusicContext } from './MusicProvider';

export function MusicControls() {
    const { isPlaying, isMuted, toggleMute, play, needsInteraction } = useMusicContext();

    if (needsInteraction && !isPlaying) {
        return (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={play}
                    className="px-6 py-3 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full shadow-dreamy hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                    <Music size={20} />
                    <span className="text-sm font-medium">Tap to play music 🎵</span>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={toggleMute}
                className="p-3 bg-card/80 backdrop-blur-sm rounded-full shadow-soft hover:shadow-dreamy hover:scale-110 transition-all duration-300"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
                {isMuted ? (
                    <VolumeX size={24} className="text-muted-foreground" />
                ) : (
                    <Volume2 size={24} className="text-primary" />
                )}
            </button>
        </div>
    );
}
