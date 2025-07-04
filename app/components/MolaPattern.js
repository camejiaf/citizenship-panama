export default function MolaPattern({ className = "", style = {} }) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <g opacity="0.13">
                <rect x="0" y="0" width="400" height="400" fill="#fff" fillOpacity="0" />
                <path d="M50 200 Q100 100 200 200 T350 200" stroke="#E11D48" strokeWidth="16" fill="none" />
                <path d="M70 220 Q120 140 200 220 T330 220" stroke="#2563EB" strokeWidth="10" fill="none" />
                <path d="M90 240 Q140 180 200 240 T310 240" stroke="#F59E42" strokeWidth="6" fill="none" />
                <circle cx="200" cy="200" r="32" stroke="#059669" strokeWidth="8" fill="none" />
                <circle cx="200" cy="200" r="16" stroke="#fff" strokeWidth="4" fill="none" />
            </g>
        </svg>
    );
} 