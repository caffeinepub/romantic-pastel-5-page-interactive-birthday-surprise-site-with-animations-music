import { ReactNode } from 'react';

interface ScreenLayoutProps {
    title: string;
    children: ReactNode;
    backgroundClass?: string;
}

export function ScreenLayout({ title, children, backgroundClass = 'gradient-dreamy' }: ScreenLayoutProps) {
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${backgroundClass}`}>
            <div className="max-w-2xl w-full space-y-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 drop-shadow-lg">
                    {title}
                </h1>
                {children}
            </div>
        </div>
    );
}
