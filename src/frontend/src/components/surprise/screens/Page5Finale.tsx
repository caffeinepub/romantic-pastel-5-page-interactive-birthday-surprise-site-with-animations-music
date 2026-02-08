import { ScreenLayout } from '../ScreenLayout';
import { FinaleEffects } from '../visuals/FinaleEffects';

interface Page5FinaleProps {
    wish: string;
    onReplay: () => void;
}

export function Page5Finale({ wish, onReplay }: Page5FinaleProps) {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <FinaleEffects />
            
            <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
                <div className="max-w-3xl w-full space-y-12 text-center">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight space-y-4 drop-shadow-lg">
                        <p>HAPPY BIRTHDAY</p>
                        <p>MY LOVE 💙🎂</p>
                    </div>
                    
                    <div className="text-xl md:text-2xl text-foreground/90 leading-relaxed space-y-3">
                        <p>I hope your day is as beautiful as you are.</p>
                        <p>I love you always.</p>
                    </div>

                    {wish && (
                        <div className="mt-8 p-6 bg-card/60 backdrop-blur-md rounded-3xl border-2 border-gold/30 shadow-glow">
                            <p className="text-sm text-muted-foreground mb-2">Your wish ✨</p>
                            <p className="text-lg text-foreground/80 italic">{wish}</p>
                        </div>
                    )}

                    <div className="mt-16">
                        <button
                            onClick={onReplay}
                            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg font-semibold shadow-dreamy hover:shadow-glow hover:scale-105 transition-all duration-300"
                        >
                            Replay the Surprise 💫
                        </button>
                    </div>

                    <footer className="mt-16 text-sm text-muted-foreground">
                        © 2026. Built with 💙 using{' '}
                        <a
                            href="https://caffeine.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            caffeine.ai
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
}
