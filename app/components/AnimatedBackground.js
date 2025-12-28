'use client';

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute inset-0 w-full h-full">
                <div className="animated-bg-blue"></div>
                <div className="animated-bg-red"></div>
            </div>
        </div>
    );
}

