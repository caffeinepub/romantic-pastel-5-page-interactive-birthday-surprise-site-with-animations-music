interface HeartButtonProps {
    onClick: () => void;
    label?: string;
}

export function HeartButton({ onClick, label = 'Next' }: HeartButtonProps) {
    return (
        <button
            onClick={onClick}
            className="heart-button relative mx-auto"
            aria-label={label}
        >
            <span className="heart-button-text">{label}</span>
        </button>
    );
}
