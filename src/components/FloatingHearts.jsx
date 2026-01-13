export default function FloatingHearts() {
    const hearts = Array.from({ length: 60 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((_, i) => (
                <span
                    key={i}
                    className="absolute bottom-0 text-pink-400/40 animate-heart-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${12 + Math.random() * 10}s`,
                        fontSize: `${12 + Math.random() * 24}px`,
                    }}
                >
                    💗
                </span>
            ))}
        </div>
    );
}
