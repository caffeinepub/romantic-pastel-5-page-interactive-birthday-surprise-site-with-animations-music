import { useState } from 'react';

export function useSurpriseState() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
    const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
    const [wish, setWish] = useState('');

    const nextPage = () => {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1);
        }
    };

    const replay = () => {
        setCurrentPage(1);
        setSelectedFeeling(null);
        setSelectedMemory(null);
        setWish('');
    };

    return {
        currentPage,
        selectedFeeling,
        selectedMemory,
        wish,
        setSelectedFeeling,
        setSelectedMemory,
        setWish,
        nextPage,
        replay
    };
}
