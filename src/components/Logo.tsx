export function LogoMark({ className = 'w-6 h-6' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Scalar Ops"
        >
            {/* Ascending signal bars — growth chart abstraction */}
            <rect x="2" y="22" width="5" height="8" rx="1" fill="currentColor" opacity="0.3" />
            <rect x="10" y="16" width="5" height="14" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="18" y="9" width="5" height="21" rx="1" fill="currentColor" opacity="0.7" />
            <rect x="26" y="2" width="5" height="28" rx="1" fill="currentColor" />
        </svg>
    );
}

export function Logo({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <LogoMark className="w-5 h-5 text-signal" />
            <span className="font-serif text-lg tracking-tight">Scalar Ops</span>
        </div>
    );
}
