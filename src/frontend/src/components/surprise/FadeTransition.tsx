import { ReactNode } from 'react';

interface FadeTransitionProps {
    children: ReactNode;
    isTransitioning: boolean;
}

export function FadeTransition({ children, isTransitioning }: FadeTransitionProps) {
    return (
        <div className={isTransitioning ? 'animate-fade-out' : 'animate-fade-in'}>
            {children}
        </div>
    );
}
