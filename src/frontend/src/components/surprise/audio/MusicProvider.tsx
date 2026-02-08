import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

interface MusicContextType {
    isPlaying: boolean;
    isMuted: boolean;
    volume: number;
    play: () => void;
    pause: () => void;
    toggleMute: () => void;
    setVolume: (volume: number) => void;
    needsInteraction: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function useMusicContext() {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusicContext must be used within MusicProvider');
    }
    return context;
}

interface MusicProviderProps {
    children: ReactNode;
}

export function MusicProvider({ children }: MusicProviderProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolumeState] = useState(0.5);
    const [needsInteraction, setNeedsInteraction] = useState(false);

    useEffect(() => {
        // Create audio element
        const audio = new Audio('/assets/music/ambient-birthday.mp3');
        audio.loop = true;
        audio.volume = volume;
        audioRef.current = audio;

        // Try autoplay
        const tryAutoplay = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
                setNeedsInteraction(false);
            } catch (error) {
                // Autoplay blocked, need user interaction
                setNeedsInteraction(true);
                setIsPlaying(false);
            }
        };

        tryAutoplay();

        return () => {
            audio.pause();
            audio.src = '';
        };
    }, []);

    const play = async () => {
        if (audioRef.current) {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                setNeedsInteraction(false);
            } catch (error) {
                console.error('Failed to play audio:', error);
            }
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const setVolume = (newVolume: number) => {
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            setVolumeState(newVolume);
        }
    };

    return (
        <MusicContext.Provider
            value={{
                isPlaying,
                isMuted,
                volume,
                play,
                pause,
                toggleMute,
                setVolume,
                needsInteraction
            }}
        >
            {children}
        </MusicContext.Provider>
    );
}
