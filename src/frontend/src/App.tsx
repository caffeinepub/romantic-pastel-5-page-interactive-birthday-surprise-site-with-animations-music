import { useState, useEffect } from 'react';
import { MusicProvider } from './components/surprise/audio/MusicProvider';
import { MusicControls } from './components/surprise/audio/MusicControls';
import { FadeTransition } from './components/surprise/FadeTransition';
import { Page1Welcome } from './components/surprise/screens/Page1Welcome';
import { Page2Memories } from './components/surprise/screens/Page2Memories';
import { Page3Wish } from './components/surprise/screens/Page3Wish';
import { Page4Love } from './components/surprise/screens/Page4Love';
import { Page5Finale } from './components/surprise/screens/Page5Finale';
import { useSurpriseState } from './components/surprise/state/useSurpriseState';

function App() {
    const {
        currentPage,
        selectedFeeling,
        selectedMemory,
        wish,
        setSelectedFeeling,
        setSelectedMemory,
        setWish,
        nextPage,
        replay
    } = useSurpriseState();

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            nextPage();
            setIsTransitioning(false);
        }, 400);
    };

    const handleReplay = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            replay();
            setIsTransitioning(false);
        }, 400);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <Page1Welcome
                        selectedFeeling={selectedFeeling}
                        onSelectFeeling={setSelectedFeeling}
                        onNext={handleNext}
                    />
                );
            case 2:
                return (
                    <Page2Memories
                        selectedMemory={selectedMemory}
                        onSelectMemory={setSelectedMemory}
                        onNext={handleNext}
                    />
                );
            case 3:
                return (
                    <Page3Wish
                        wish={wish}
                        onWishChange={setWish}
                        onNext={handleNext}
                    />
                );
            case 4:
                return (
                    <Page4Love onNext={handleNext} />
                );
            case 5:
                return (
                    <Page5Finale wish={wish} onReplay={handleReplay} />
                );
            default:
                return null;
        }
    };

    return (
        <MusicProvider>
            <div className="min-h-screen relative overflow-hidden">
                <MusicControls />
                <FadeTransition isTransitioning={isTransitioning}>
                    {renderPage()}
                </FadeTransition>
            </div>
        </MusicProvider>
    );
}

export default App;
