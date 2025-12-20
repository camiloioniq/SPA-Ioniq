
import React, { useState, CSSProperties, useRef, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';

const AnimatedText: React.FC<{ text: string, as: React.ElementType, style?: CSSProperties }> = ({ text, as: Component, style }) => {
    const words = text.split(' ');
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: document.querySelector('.scrollable-card'),
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <Component ref={ref} style={style} className={`animated-text-container ${isVisible ? 'visible' : ''}`}>
            {words.map((word, i) => (
                <span className="animated-word-wrapper" key={i}>
                    <span className="animated-word" style={{ transitionDelay: `${i * 0.05}s` }}>{word}</span>
                </span>
            ))}
        </Component>
    );
};

const IconConsulting: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const IconIntegration: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconInterface: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const IconSupport: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconMenu: React.FC<{ style: CSSProperties, onClick: React.MouseEventHandler<SVGSVGElement> }> = ({ style, onClick }) => (
    <svg onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Abrir menú">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const IconClose: React.FC<{ style: CSSProperties, onClick: React.MouseEventHandler<SVGSVGElement> }> = ({ style, onClick }) => (
    <svg onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Cerrar menú">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const IconInstagram: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const IconWhatsApp: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.043 4.957c-2.26-2.26-5.283-3.515-8.485-3.515C4.54 1.442 0 5.982 0 12.001c0 2.021.523 3.938 1.48 5.636L0 24l6.364-1.48c1.698.957 3.615 1.48 5.637 1.48h.001c6.018 0 10.958-4.94 10.958-10.958 0-3.203-1.255-6.226-3.516-8.485zM12.001 22.123c-1.84 0-3.593-.485-5.116-1.385l-.366-.218-3.81 1.057 1.074-3.722-.24-.378c-.997-1.574-1.52-3.41-1.52-5.32 0-5.183 4.226-9.409 9.41-9.409 2.522 0 4.896.98 6.654 2.738s2.738 4.132 2.738 6.654c-.001 5.183-4.227 9.409-9.41 9.409zm5.34-6.958c-.28-.141-1.652-.814-1.908-.908-.256-.094-.442-.14-.628.14-.186.281-.721.908-.883 1.094-.162.186-.324.205-.604.064-.28-.141-1.183-.436-2.253-1.39-.834-.744-1.394-1.652-1.556-1.928-.162-.281-.019-.436.122-.578.129-.129.281-.324.422-.486.141-.162.186-.281.28-.467.094-.186.047-.35-.018-.492-.065-.141-.628-1.513-.86-2.075-.22-.544-.442-.467-.604-.475-.15-.009-.324-.009-.496-.009s-.422.065-.65.324c-.227.256-.883.86-.883 2.094s.908 2.426 1.033 2.593c.125.168 1.793 2.738 4.343 3.822.595.256 1.057.41 1.42.536.604.205 1.144.177 1.565.105.467-.082 1.652-.676 1.887-1.332.235-.656.235-1.215.162-1.332-.072-.117-.258-.186-.538-.328z"/>
    </svg>
);

const IconX: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const IconPlay: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const IconPause: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

// New Icons for Proposal Section
const IconApartment: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M12 6.75h1.5M15 6.75h1.5M9 10.5h1.5M12 10.5h1.5M15 10.5h1.5M9 14.25h1.5M12 14.25h1.5M15 14.25h1.5M9 18h1.5M12 18h1.5M15 18h1.5" />
    </svg>
);

const IconHome: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);

const IconBusiness: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5M12 6.75h1.5M15 6.75h1.5M9 10.5h1.5M12 10.5h1.5M15 10.5h1.5M9 14.25h1.5M12 14.25h1.5M15 14.25h1.5M9 18h1.5M12 18h1.5M15 18h1.5" />
    </svg>
);

const IconCheck: React.FC<{ style: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);


const IconSun: React.FC<{ style?: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const IconMoon: React.FC<{ style?: CSSProperties }> = ({ style }) => (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

// Catalog Icons
const IconHub: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5M8.25 3.75v16.5M8.25 3.75h-3.75c-.621 0-1.125.504-1.125 1.125v14.25c0 .621.504 1.125 1.125 1.125h3.75m0-16.5h11.25c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H8.25m0-16.5v16.5m0 0H4.5m15 0h-15" /></svg>;
const IconPlug: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" /></svg>;
const IconLock: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>;
const IconRadar: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.418-2.209a1.012 1.012 0 011.123.083l4.093 3.509a1.011 1.011 0 001.217 0l4.093-3.509a1.012 1.012 0 011.123-.083l4.418 2.21a1.012 1.012 0 010 .638l-4.418 2.21a1.012 1.012 0 01-1.123-.082l-4.093-3.51a1.011 1.011 0 00-1.217 0l-4.093 3.509a1.012 1.012 0 01-1.123.083L2.036 12.322z" /></svg>;
const IconThermometer: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><path d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>;
const IconRobot: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6.75 2.25h.75a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75" /></svg>;
const IconAppliance: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5c0-.933.224-1.83.627-2.643a10.457 10.457 0 00-4.254 0c.403.813.627 1.71.627 2.643V21m4.5-3.75h-6a.375.375 0 01-.375-.375v-1.5c0-.207.168-.375.375-.375h6c.207 0 .375.168.375.375v1.5c0 .207-.168.375-.375.375z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12M6 3v12a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 15V3" /></svg>;
const IconSpeaker: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012 12c0-.83.112-1.633.322-2.396C2.556 8.756 3.379 8.25 4.26 8.25h2.49z" /></svg>;
const IconLightbulb: React.FC<{ style: CSSProperties }> = ({ style }) => <svg style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

const GlowIcon: React.FC<{ children: React.ReactNode; color1: string; color2: string }> = ({ children, color1, color2 }) => (
    <div style={{
        width: 64, height: 64, borderRadius: '50%',
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',
        background: `radial-gradient(circle, ${color1} 0%, transparent 70%)`,
    }}>
        <div style={{ color: 'var(--text-main)', width: 32, height: 32, position: 'relative', zIndex: 2 }}>{children}</div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', boxShadow: `0 0 20px 5px ${color2}`, opacity: 0.5 }}/>
    </div>
);

const IllustrationDecentralized: React.FC<{ style?: CSSProperties }> = ({ style }) => (
    <div style={{ ...style, position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', borderRadius: '12px', boxShadow: '0 0 40px var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8Z"></path><path d="M12 2v4"></path><path d="M12 20v2"></path><path d="m4.9 4.9 2.8 2.8"></path><path d="m16.3 16.3 2.8 2.8"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.9 19.1 2.8-2.8"></path><path d="m16.3 7.7 2.8-2.8"></path></svg>
        </div>
        {[
            { top: '10%', left: '20%', size: 30 }, { top: '20%', left: '80%', size: 35 },
            { top: '80%', left: '10%', size: 25 }, { top: '70%', left: '90%', size: 40 },
            { top: '45%', left: '0%', size: 28 }, { top: '55%', left: '100%', size: 32 },
            { top: '0%', left: '55%', size: 20 }, { top: '100%', left: '45%', size: 22 },
        ].map((pos, i) => (
             <div key={i} style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)', width: `${pos.size}px`, height: `${pos.size}px`, background: `linear-gradient(135deg, ${i % 2 === 0 ? '#6366F1' : '#A78BFA'}, ${i % 2 === 0 ? '#EC4899' : '#C084FC'})`, borderRadius: '8px', boxShadow: `0 0 ${pos.size}px ${i % 2 === 0 ? '#6366F155' : '#A78BFA55'}` }} />
        ))}
    </div>
);

interface GalleryItem {
    type: 'image' | 'video';
    src: string;
    thumbnail: string;
}

interface Project {
    title: string;
    description: string;
    media: string;
    mediaType: 'image' | 'video';
    features: string[];
    details: string;
    gallery: GalleryItem[];
}

interface ProductExample {
    name: string;
    description: string;
    media: string;
    mediaType: 'image' | 'video';
}

interface DomoticsFeature {
    title: string;
    icon: React.ReactNode;
    color1: string;
    color2: string;
    modalTitle: string;
    modalDescription: string;
    modalMedia: string;
    modalMediaType: 'image' | 'video';
    products: ProductExample[];
}

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    modalTitle: string;
    modalDescription: string;
    modalDetails: string[];
}

interface CatalogProduct {
    name: string;
    description: string;
}

interface CatalogCategory {
    name: string;
    icon: React.ReactNode;
    products: CatalogProduct[];
}

const getDomoticsFeaturesData = (): DomoticsFeature[] => [
     { 
        title: 'Iluminación Inteligente', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>, 
        color1: 'rgba(99, 102, 241, 0.4)',
        color2: '#6366F1',
        modalTitle: 'Control Lumínico Total',
        modalDescription: 'Desde la calidez de una cena romántica hasta la energía de una mañana productiva, ajusta la intensidad y el color de cada luz. Crea escenas personalizadas que se activan con tu voz, un toque en la app o automáticamente según la hora del día.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Iluminacion/Videobanner.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Tiras LED RGBW', description: 'Crea ambientes dinámicos y acentúa la arquitectura de tu espacio con millones de colores.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Iluminacion/Video1.mp4', mediaType: 'video' },
            { name: 'Switches Inteligentes', description: 'Controla tus luces existentes desde cualquier lugar y crea programaciones horarias.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Iluminacion/Video2.mp4', mediaType: 'video' },
            { name: 'Bombillas Regulables', description: 'Ajusta el brillo y la temperatura del color para cada momento, desde luz fría para trabajar hasta cálida para relajarte.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Iluminacion/Video3.mp4', mediaType: 'video' },
        ]
    },
    { 
        title: 'Climatización Avanzada', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l2.121 2.121L12 6.243 9.879 4.121 12 2zm0 20l-2.121-2.121L12 17.757l2.121 2.122L12 22zM2 12l2.121-2.121L6.243 12l-2.122 2.121L2 12zm20 0l-2.121 2.121L17.757 12l2.122-2.121L22 12zM5.636 5.636l1.414 1.414L8.464 8.464 7.05 7.05 5.636 5.636zm12.728 12.728l-1.414-1.414L15.536 15.536l1.414 1.414-1.414-1.414zM5.636 18.364l1.414-1.414L8.464 15.536 7.05 16.95l-1.414 1.414zm12.728-12.728l-1.414 1.414L15.536 8.464l1.414-1.414 1.414 1.414z"></path></svg>, 
        color1: 'rgba(59, 130, 246, 0.4)',
        color2: '#3B82F6',
        modalTitle: 'Confort Climático Inteligente',
        modalDescription: 'Nuestro sistema aprende tus preferencias y se anticipa a tus necesidades. Geofencing activa el clima ideal antes de que llegues a casa y los sensores optimizan el consumo energético, garantizando confort absoluto con máxima eficiencia.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Climatizacion/Videobanner1.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Termostato Inteligente', description: 'Aprende tus rutinas y optimiza la calefacción y el aire acondicionado para ahorrar energía.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Climatizacion/Video1.mp4', mediaType: 'video' },
            { name: 'Controlador de A/C', description: 'Convierte tu aire acondicionado tradicional en un dispositivo inteligente controlable desde tu móvil.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Climatizacion/Video2.mp4', mediaType: 'video' },
            { name: 'Sensores de Temperatura', description: 'Asegura una temperatura precisa y homogénea en cada habitación de tu hogar.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Climatizacion/Video3.mp4', mediaType: 'video' },
        ]
    },
    { 
        title: 'Entretenimiento Inmersivo', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
        color1: 'rgba(236, 72, 153, 0.4)',
        color2: '#EC4899',
        modalTitle: 'Cine en Casa, Sonido Envolvente',
        modalDescription: 'Crea el ambiente perfecto para cada ocasión con un solo toque. Con nuestras escenas automáticas, tu salón se transforma en una sala de cine o un estadio para ver el partido. Las luces, el sonido y las persianas se ajustan al instante para una experiencia totalmente inmersiva.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Entretenimiento/Videobanner.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Escenas Automáticas', description: 'El cerebro de tus escenas automáticas. Activa el "Modo Cine" y las luces bajarán al instante, o el "Modo Fútbol" para sincronizar el partido en las pantallas de donde te encuentres en tu hogar en perfecto 4K.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Entretenimiento/Video1.mp4', mediaType: 'video' },
            { name: 'Altavoces Arquitectónicos', description: 'Sonido de alta fidelidad que se integra perfectamente en paredes y techos, desapareciendo visualmente.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Entretenimiento/Video2.mp4', mediaType: 'video' },
            { name: 'Control Remoto Universal', description: 'Un solo mando para gobernarlos a todos. Controla tu TV, sistema de sonido, luces y más.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Entretenimiento/Video3.mp4', mediaType: 'video' },
        ]
    },
    { 
        title: 'Seguridad Incondicional', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, 
        color1: 'rgba(139, 92, 246, 0.4)',
        color2: '#8B5CF6',
        modalTitle: 'Tranquilidad, Donde Quiera Que Estés',
        modalDescription: 'Vigila tu hogar con cámaras de alta definición, recibe alertas de movimiento en tiempo real y controla accesos de forma remota. Simula presencia cuando estás fuera y duerme tranquilo sabiendo que tu hogar está protegido 24/7.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Seguridad/Videobanner.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Cámaras IP con IA', description: 'Reconocimiento inteligente de personas, vehículos y paquetes para evitar falsas alarmas.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Seguridad/Video1.mp4', mediaType: 'video' },
            { name: 'Cerradura Inteligente', description: 'Acceso sin llaves mediante código, huella dactilar o tu móvil. Otorga accesos temporales a distancia.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Seguridad/Video2.mp4', mediaType: 'video' },
            { name: 'Sensores de Apertura', description: 'Recibe alertas instantáneas en tu móvil si una puerta o ventana se abre inesperadamente.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Seguridad/Video3.mp4', mediaType: 'video' },
        ]
    },
    { 
        title: 'Eficiencia Energética', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, 
        color1: 'rgba(16, 185, 129, 0.4)',
        color2: '#10B981',
        modalTitle: 'Hogar Sostenible, Ahorro Inteligente',
        modalDescription: 'Monitorea tu consumo en tiempo real y deja que el sistema tome decisiones inteligentes. Apaga luces olvidadas, ajusta el termostato y optimiza el uso de electrodomésticos. Reduce tu huella de carbono y tu factura eléctrica sin esfuerzo.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Consumo/Videobanner.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Medidor de Consumo', description: 'Monitorea el gasto energético de toda tu casa o de circuitos individuales en tiempo real.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Consumo/Video1.mp4', mediaType: 'video' },
            { name: 'Enchufes Inteligentes', description: 'Controla y programa el encendido/apagado de cualquier electrodoméstico desde tu móvil.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Consumo/Video2.mp4', mediaType: 'video' },
            { name: 'Controlador de Cargas', description: 'Gestiona dispositivos de alto consumo, como calentadores, para que funcionen en horas de menor coste energético.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Consumo/Video3.mp4', mediaType: 'video' },
        ]
    },
    { 
        title: 'Acceso por Voz y Remoto', 
        icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>, 
        color1: 'rgba(217, 70, 239, 0.4)',
        color2: '#D946EF',
        modalTitle: 'Tu Voz es el Mando',
        modalDescription: 'Integramos los principales asistentes de voz para un control manos libres total. Desde apagar todas las luces al acostarte hasta pedir tu playlist favorita, tu hogar obedece tus palabras. Y con nuestra app, el control viaja contigo a cualquier parte del mundo.',
        modalMedia: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Voz/Videobanner.mp4',
        modalMediaType: 'video',
        products: [
            { name: 'Hub de Automatización', description: 'El cerebro que unifica todos los dispositivos de diferentes marcas en un solo ecosistema cohesivo.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Voz/Video1.mp4', mediaType: 'video' },
            { name: 'Asistente de Voz', description: 'Integración nativa con Amazon Alexa, Google Assistant y Apple HomeKit para un control por voz natural.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Voz/Video2.mp4', mediaType: 'video' },
            { name: 'Interfaz Móvil Propia', description: 'Una app diseñada por y para ti, con la distribución y los controles que realmente necesitas.', media: 'https://spa-ioniq.vercel.app/videos/Tarjeta%20Voz/Video3.mp4', mediaType: 'video' },
        ]
    },
];

const catalogData: CatalogCategory[] = [
    { name: 'Control Central y Red', icon: <IconHub style={{width: 32, height: 32}}/>, products: [
        { name: 'Asistentes de Voz', description: 'Controla tu hogar con comandos de voz.' },
        { name: 'Hubs/Bridges', description: 'Unifica dispositivos de diferentes protocolos.' },
        { name: 'Controladores Domóticos', description: 'El cerebro avanzado para automatizaciones complexas.' },
        { name: 'Control Remoto Universal', description: 'Un solo mando para todos tus aparatos.' },
        { name: 'Routers Wi-Fi Mesh', description: 'Cobertura Wi-Fi total y estable en todo tu hogar.' },
    ]},
    { name: 'Electricidad y Energía', icon: <IconPlug style={{width: 32, height: 32}}/>, products: [
        { name: 'Interruptores Inteligentes', description: 'Moderniza tus luces sin cambiar las bombillas.' },
        { name: 'Módulos de Relé', description: 'Domotiza cualquier circuito desde el cajetín.' },
        { name: 'Enchufes Inteligentes', description: 'Controla y programa cualquier electrodoméstico.' },
        { name: 'Regletas Inteligentes', description: 'Gestiona varios dispositivos de forma individual.' },
        { name: 'Disyuntores Inteligentes', description: 'Control y protección desde el cuadro eléctrico.' },
        { name: 'Medidores de Consumo', description: 'Monitoriza tu gasto energético en tiempo real.' },
    ]},
    { name: 'Iluminación', icon: <IconLightbulb style={{width: 32, height: 32}}/>, products: [
        { name: 'Bombillas Inteligentes', description: 'Millones de colores y tonalidades de blanco.' },
        { name: 'Tiras de Luz LED', description: 'Iluminación ambiental versátil y espectacular.' },
        { name: 'Paneles de Luz', description: 'Crea murales de luz decorativos y dinámicos.' },
        { name: 'Controladores de LED', description: 'Haz inteligentes tus tiras LED convencionales.' },
        { name: 'Sensores de Luminosidad', description: 'Ajuste automático de la luz según el ambiente.' },
    ]},
    { name: 'Seguridad y Accesos', icon: <IconLock style={{width: 32, height: 32}}/>, products: [
        { name: 'Cámaras de Seguridad', description: 'Vigila tu hogar desde cualquier lugar.' },
        { name: 'Timbres con Video', description: 'Ve y habla con tus visitas estés donde estés.' },
        { name: 'Mirillas Digitales', description: 'La mirilla tradicional, ahora inteligente.' },
        { name: 'Cerraduras Inteligentes', description: 'Acceso sin llaves con código, huella o móvil.' },
        { name: 'Abre-puertas de Garaje', description: 'Controla la puerta de tu garaje a distancia.' },
        { name: 'Sensores de Vibración', description: 'Detecta roturas de cristal o golpes.' },
        { name: 'Botones de Pánico', description: 'Alerta inmediata en caso de emergencia.' },
    ]},
    { name: 'Sensores Específicos', icon: <IconRadar style={{width: 32, height: 32}}/>, products: [
        { name: 'Sensores de Movimiento', description: 'Automatiza luces y alertas con la detección de paso.' },
        { name: 'Sensores de Presencia', description: 'Detección precisa de presencia humana, incluso inmóvil.' },
        { name: 'Sensores de Apertura', description: 'Recibe notificaciones de puertas y ventanas abiertas.' },
        { name: 'Sensores de T/H', description: 'Controla la temperatura y humedad de cada estancia.' },
        { name: 'Detectores de Humo y Gas', description: 'Protección esencial contra incendios y fugas.' },
        { name: 'Sensores de Fugas de Agua', description: 'Evita desastres por inundación con alertas tempranas.' },
    ]},
    { name: 'Climatización', icon: <IconThermometer style={{width: 32, height: 32}}/>, products: [
        { name: 'Termostatos Inteligentes', description: 'Optimiza el confort y ahorra en tu factura energética.' },
        { name: 'Cabezales Termostáticos', description: 'Control individual de la temperatura de cada radiador.' },
        { name: 'Controladores para A/C', description: 'Convierte tu aire acondicionado en un dispositivo smart.' },
        { name: 'Calefactores Inteligentes', description: 'Calor instantáneo y controlable desde tu móvil.' },
    ]},
    { name: 'Automatización', icon: <IconRobot style={{width: 32, height: 32}}/>, products: [
        { name: 'Motores para Persianas', description: 'Sube y baja tus persianas y cortinas automáticamente.' },
        { name: 'Smart Glass', description: 'Controla la privacidad y la luz con un solo toque.' },
        { name: 'Robots Aspiradores', description: 'Limpieza autónoma e inteligente para tu hogar.' },
        { name: 'Válvulas de Agua y Gas', description: 'Corta el suministro a distancia en caso de fuga.' },
        { name: 'Controladores de Riego', description: 'Riego inteligente y eficiente para tu jardín.' },
        { name: 'Estaciones Meteorológicas', description: 'Datos climáticos precisos para tus automatizaciones.' },
    ]},
    { name: 'Electrodomésticos', icon: <IconAppliance style={{width: 32, height: 32}}/>, products: [
        { name: 'Cafeteras Inteligentes', description: 'Despierta con el café recién hecho a tu gusto.' },
        { name: 'Neveras Inteligentes', description: 'Gestiona tus alimentos y recibe recetas.' },
        { name: 'Lavadoras y Secadoras', description: 'Controla el ciclo de lavado desde cualquier lugar.' },
        { name: 'Robots de Cocina', description: 'Cocina guiada y control remoto para tus platos.' },
        { name: 'Dispensadores para Mascotas', description: 'Alimenta a tus mascotas estés donde estés.' },
    ]},
    { name: 'Audio y Video', icon: <IconSpeaker style={{width: 32, height: 32}}/>, products: [
        { name: 'Altavoces Multi-room', description: 'Sonido sincronizado en toda la casa.' },
        { name: 'Dispositivos de Streaming', description: 'Convierte cualquier TV en una Smart TV avanzada.' },
        { name: 'Switches HDMI Inteligentes', description: 'Cambia de fuente de video automáticamente.' },
    ]},
];

const styles: { [key: string]: CSSProperties } = {
    mainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    glassCard: {
        width: '100%',
        height: 'auto',
        maxHeight: '90vh',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--text-main)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.5s ease, border 0.5s ease, color 0.5s ease',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '30px 40px',
        zIndex: 100,
        background: 'var(--header-bg)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        transition: 'background 0.5s ease',
        flexShrink: 0,
    },
    headerControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
    },
    themeToggleButton: {
        background: 'transparent',
        border: 'none',
        color: 'var(--text-main)',
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.2s ease, transform 0.3s ease',
    },
    logo: {
        fontWeight: 700,
        fontSize: '1.5rem',
        letterSpacing: '1px',
        textTransform: 'lowercase',
    },
    nav: {
        display: 'flex',
        gap: '30px',
    },
    navLink: {
        textDecoration: 'none',
        color: 'var(--text-main)',
        fontSize: '0.8rem',
        fontWeight: 400,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'opacity 0.3s ease, text-decoration 0.3s ease',
        cursor: 'pointer',
    },
    activeNavLink: {
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
    },
    contentContainer: {
        padding: '0 40px 40px 40px',
    },
    section: {
        padding: '60px 20px',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid var(--glass-border)',
        transition: 'border-color 0.5s ease',
    },
    subtitle: {
        fontSize: '1rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        opacity: 0.8,
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        margin: '10px 0',
        textTransform: 'uppercase',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        margin: '10px 0',
        textTransform: 'uppercase',
    },
    description: {
        fontSize: '0.9rem',
        fontWeight: 300,
        maxWidth: '600px',
        color: 'var(--text-secondary)',
        marginBottom: '30px',
    },
    ctaButton: {
        background: 'transparent',
        border: '1px solid var(--cta-border)',
        color: 'var(--cta-text)',
        padding: '10px 25px',
        borderRadius: '8px',
        fontSize: '0.8rem',
        fontWeight: 600,
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    serviceGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '900px',
        marginTop: '30px',
    },
    serviceCard: {
        background: 'var(--card-bg)',
        padding: '25px',
        borderRadius: '16px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid var(--glass-border)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, opacity 0.6s ease-out, transform 0.3s ease-out',
    },
    serviceTitle: {
        fontSize: '1.1rem',
        fontWeight: 600,
        margin: '10px 0 5px 0',
    },
    serviceDescription: {
        fontSize: '0.85rem',
        fontWeight: 300,
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
    },
    projectsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        width: '100%',
        maxWidth: '900px',
        marginTop: '20px',
    },
    projectsSlider: {
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        width: '100%',
        gap: '20px',
        paddingBottom: '15px',
    },
    projectCard: {
        background: 'var(--card-bg)',
        borderRadius: '16px',
        flex: '0 0 calc(50% - 10px)',
        scrollSnapAlign: 'start',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    projectImage: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    projectCardContent: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    projectTitle: {
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '10px',
    },
    sliderNav: {
        flexShrink: 0,
        background: 'var(--nav-button-bg)',
        border: '1px solid var(--nav-button-border)',
        color: 'var(--text-main)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        backdropFilter: 'blur(5px)',
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '100%',
        maxWidth: '500px',
        marginTop: '20px',
    },
    formInput: {
        background: 'var(--input-bg)',
        border: '1px solid var(--input-border)',
        borderRadius: '8px',
        padding: '12px',
        color: 'var(--text-main)',
        fontSize: '0.9rem',
        fontFamily: "'Poppins', sans-serif",
    },
    formTextarea: {
        background: 'var(--input-bg)',
        border: '1px solid var(--input-border)',
        borderRadius: '8px',
        padding: '12px',
        color: 'var(--text-main)',
        fontSize: '0.9rem',
        fontFamily: "'Poppins', sans-serif",
        minHeight: '120px',
        resize: 'vertical',
    },
    mobileMenuOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 199,
    },
    mobileMenuContainer: {
        position: 'absolute',
        top: '80px',
        left: '15px',
        right: '15px',
        background: 'var(--header-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    },
    mobileMenuHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        padding: '15px 20px',
    },
    mobileNav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        padding: '15px 20px 20px 20px',
    },
    mobileNavLink: {
        textDecoration: 'none',
        color: 'var(--text-main)',
        fontSize: '1.2rem',
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    projectsAccordionContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: '900px',
        height: '400px',
        gap: '10px',
        marginTop: '30px',
    },
    projectColumn: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        border: '1px solid var(--glass-border)',
        cursor: 'pointer',
        transition: 'flex 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    projectColumnContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        padding: '25px',
        position: 'relative',
        zIndex: 2,
        transition: 'opacity 0.5s ease-in-out',
    },
    projectColumnTitleVertical: {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: 'center',
        whiteSpace: 'nowrap',
        opacity: 0.9,
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 2
    },
    projectFeaturesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '15px',
    },
    projectFeatureTag: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        padding: '4px 10px',
        fontSize: '0.7rem',
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.9)',
        pointerEvents: 'none',
        backdropFilter: 'blur(2px)',
    },
     domoticsSectionWrapper: {
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid var(--glass-border)',
    },
    combinedStatCard: {
        display: 'flex',
        border: '1px solid var(--separator-color)',
        borderRadius: '24px',
        padding: '20px 30px',
        width: '100%',
        maxWidth: '600px',
        background: 'var(--card-bg)',
        margin: '0 auto 60px auto',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
    },
    statItem: {
        flex: 1,
        textAlign: 'center',
        padding: '10px 20px',
        transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.4s ease',
        cursor: 'pointer',
    },
    statSeparator: {
        width: '1px',
        background: 'var(--separator-color)',
        margin: '0 15px',
        transition: 'background-color 0.5s ease',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        marginBottom: '8px',
    },
    statValue: {
        fontSize: '1.8rem',
        fontWeight: 600,
        color: 'var(--text-main)',
    },
    featureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        width: '100%',
        maxWidth: '1000px',
        marginTop: '40px',
    },
    featureCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        padding: '30px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    },
    featureCardTitle: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
    },
    securitySectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '40px',
        width: '100%',
        maxWidth: '1000px',
        marginTop: '40px',
        textAlign: 'left',
    },
    securityIllustrationContainer: {
        flex: 1,
        minWidth: '300px',
    },
    securityTextContainer: {
        flex: 1.5,
    },
    securityFeatureList: {
        listStyle: 'none',
        padding: 0,
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
    },
    securityFeatureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
    },
    securityFeatureIcon: {
        color: 'var(--accent-color)',
        width: '24px',
        height: '24px',
        flexShrink: 0,
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        background: 'var(--modal-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '20px',
        width: '90%',
        maxWidth: '800px',
        maxHeight: '85vh',
        position: 'relative',
        color: 'var(--text-main)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    modalCloseButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.1)',
        border: 'none',
        color: 'var(--text-main)',
        fontSize: '1.5rem',
        cursor: 'pointer',
        opacity: 0.7,
        zIndex: 10,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 1,
    },
    modalImage: {
        width: '100%',
        height: '300px',
        borderRadius: '12px',
        objectFit: 'cover',
        marginBottom: '20px',
    },
    modalTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '15px',
    },
    modalInnerContent: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        padding: '30px',
    },
    socialIconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        marginTop: '30px',
    },
    socialIconLink: {
        color: 'var(--text-main)',
        textDecoration: 'none',
        display: 'inline-block',
    },
    gallerySectionContainer: {
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid var(--glass-border)',
    },
    gallerySectionTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '15px',
        color: 'var(--text-highlight)',
    },
    galleryCarouselMain: {
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--card-bg)',
        marginBottom: '15px',
    },
    galleryCarouselMedia: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 0.3s ease-in-out',
    },
    galleryCarouselNavButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid var(--nav-button-border)',
        color: 'var(--text-main)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        lineHeight: 1,
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        backdropFilter: 'blur(5px)',
        zIndex: 10,
    },
    galleryThumbnailsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
    },
    galleryThumbnail: {
        width: '80px',
        height: '60px',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'border-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
        opacity: 0.6,
        position: 'relative'
    },
    galleryThumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    galleryThumbnailActive: {
        borderColor: 'var(--accent-color)',
        opacity: 1,
        transform: 'scale(1.05)',
    },
    galleryItemPlayIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '24px',
        height: '24px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '50%',
        padding: '4px',
        pointerEvents: 'none',
    },
    productSectionContainer: {
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid var(--glass-border)',
    },
    productSectionTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '15px',
        color: 'var(--text-highlight)',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
    },
    productCard: {
        background: 'var(--card-bg)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
    },
    productImage: {
        width: '100%',
        height: '100px',
        objectFit: 'cover',
    },
    productCardContent: {
        padding: '15px',
    },
    productName: {
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '5px',
    },
    productDescription: {
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
    },
    productVideoContainer: {
        position: 'relative',
        width: '100%',
        height: '100px',
        background: 'var(--card-bg)',
    },
    productVideoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },
    productVideoIcon: {
        width: '32px',
        height: '32px',
        color: 'white',
    },
    catalogModalHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '30px 30px 0 30px',
        flexShrink: 0
    },
    catalogModalTitle: {
        fontSize: '1.5rem',
        fontWeight: 600,
        marginLeft: '15px',
    },
    catalogBackButton: {
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-main)',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
    },
    categoryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        padding: '30px',
        width: '100%',
    },
    categoryCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
    },
    categoryCardTitle: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
    },
    catalogProductGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '20px',
        padding: '20px 30px 30px 30px',
    },
    catalogProductCard: {
        background: 'var(--card-bg)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        transition: 'transform 0.3s, box-shadow 0.3s',
    },
    catalogProductContent: {
        padding: '15px',
    },
    catalogProductName: {
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '8px',
        lineHeight: 1.3,
    },
    catalogProductDescription: {
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.4,
    },
    // New Styles for Propuestas
    proposalGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        width: '100%',
        maxWidth: '1000px',
        marginTop: '30px',
        alignItems: 'start',
    },
    proposalConfigContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        textAlign: 'left',
    },
    proposalSectionLabel: {
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '15px',
        color: 'var(--text-highlight)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    proposalTypeGrid: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
    },
    proposalOptionCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: 1,
        minWidth: '100px',
        position: 'relative',
    },
    proposalOptionCardActive: {
        background: 'rgba(139, 92, 246, 0.2)',
        borderColor: 'var(--accent-color)',
        boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)',
    },
    proposalFeatureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '12px',
    },
    proposalFeatureCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textAlign: 'center',
    },
    proposalFeatureCardActive: {
        background: 'rgba(139, 92, 246, 0.15)',
        borderColor: 'var(--accent-color)',
    },
    proposalFeatureIcon: {
        width: '24px',
        height: '24px',
        marginBottom: '2px',
    },
    proposalFeatureName: {
        fontSize: '0.75rem',
        lineHeight: 1.2,
    },
    proposalSummaryCard: {
        background: 'linear-gradient(180deg, rgba(30, 30, 60, 0.9) 0%, rgba(20, 20, 40, 0.9) 100%)',
        borderRadius: '20px',
        border: '1px solid var(--accent-color)',
        padding: '30px',
        position: 'sticky',
        top: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    proposalSummaryTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
        marginBottom: '5px',
        borderBottom: '1px solid var(--separator-color)',
        paddingBottom: '15px',
    },
    proposalSummaryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
    },
    proposalSummaryValue: {
        color: 'var(--text-main)',
        fontWeight: 600,
    },
    complexityBarContainer: {
        width: '100%',
        height: '8px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px',
        marginTop: '10px',
        overflow: 'hidden',
    },
    complexityBarFill: {
        height: '100%',
        background: 'linear-gradient(90deg, #10B981, #F59E0B, #EF4444)',
        transition: 'width 0.5s ease',
    },
    customSliderContainer: {
        padding: '10px 0 20px 0',
    }
};

const ProductCard: React.FC<{ product: ProductExample; isMobile: boolean; styles: { [key: string]: CSSProperties } }> = ({ product, isMobile, styles }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (!isMobile && videoRef.current) {
            videoRef.current.play().catch(error => console.log("Video play was prevented:", error));
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            style={styles.productCard}
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={styles.productVideoContainer}>
                {product.mediaType === 'video' ? (
                    <video
                        ref={videoRef}
                        src={product.media}
                        style={styles.productImage}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        autoPlay={isMobile}
                    />
                ) : (
                    <img src={product.media} alt={product.name} style={styles.productImage} />
                )}
            </div>
            <div style={styles.productCardContent}>
                <h4 style={styles.productName}>{product.name}</h4>
                <p style={styles.productDescription}>{product.description}</p>
            </div>
        </div>
    );
};


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('Inicio');
    const [servicesVisible, setServicesVisible] = useState(false);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [hoveredStat, setHoveredStat] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedFeature, setSelectedFeature] = useState<DomoticsFeature | null>(null);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<CatalogCategory | null>(null);
    
    // Proposal State
    const [propType, setPropType] = useState<'apartment' | 'house' | 'business'>('apartment');
    const [propSize, setPropSize] = useState<number>(100);
    const [propFeatures, setPropFeatures] = useState<string[]>([]);
    
    const sectionRefs = {
        'Inicio': useRef<HTMLDivElement>(null),
        'Nosotros': useRef<HTMLDivElement>(null),
        'Servicios': useRef<HTMLDivElement>(null),
        'Proyectos': useRef<HTMLDivElement>(null),
        'Catálogo': useRef<HTMLDivElement>(null),
        'Propuestas': useRef<HTMLDivElement>(null),
        'Contáctanos': useRef<HTMLDivElement>(null),
    };

    const projectsRef = useRef<HTMLDivElement>(null);
    const projectVideoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
    const contactMessageRef = useRef<HTMLTextAreaElement>(null);

    const domoticsFeaturesData = useMemo(() => getDomoticsFeaturesData(), []);

    const handleProjectGalleryNav = (direction: 'next' | 'prev') => {
        if (selectedProject) {
            const newIndex = (galleryIndex + (direction === 'next' ? 1 : -1) + selectedProject.gallery.length) % selectedProject.gallery.length;
            setGalleryIndex(newIndex);
        }
    };

    const handleFeatureToggle = (featureName: string) => {
        if (propFeatures.includes(featureName)) {
            setPropFeatures(propFeatures.filter(f => f !== featureName));
        } else {
            setPropFeatures([...propFeatures, featureName]);
        }
    };

    const handleRequestQuote = () => {
        const message = `Hola, me gustaría solicitar una propuesta para un proyecto con las siguientes características:\n\n- Tipo: ${propType === 'apartment' ? 'Apartamento' : propType === 'house' ? 'Casa' : 'Negocio'}\n- Área: ${propSize} m²\n- Sistemas de interés: ${propFeatures.length > 0 ? propFeatures.join(', ') : 'No especificado'}.\n\nQuedo atento a su respuesta.`;
        
        if (contactMessageRef.current) {
            contactMessageRef.current.value = message;
        }

        const contactSection = sectionRefs['Contáctanos'].current;
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const complexityLevel = useMemo(() => {
        let score = 0;
        if (propType === 'house') score += 20;
        if (propType === 'business') score += 30;
        score += (propSize / 500) * 20; // up to 20 pts for size
        score += propFeatures.length * 10;
        return Math.min(Math.round(score), 100);
    }, [propType, propSize, propFeatures]);
    
    const complexityLabel = useMemo(() => {
        if (complexityLevel < 30) return 'Básico';
        if (complexityLevel < 60) return 'Avanzado';
        return 'Premium';
    }, [complexityLevel]);

    useEffect(() => {
        if (selectedProject) {
            setGalleryIndex(0);
        }
    }, [selectedProject]);
    
    const projectsData: Project[] = [
        {
            title: 'Apartamento "Mónaco"',
            description: 'Integración completa de iluminación, climatización y seguridad, controlada desde una interfaz única desarrollada por ioniq.',
            media: 'https://spa-ioniq.vercel.app/videos/Contenido%20Monaco/Monaco%20.mp4',
            mediaType: 'video',
            features: ['Iluminación', 'Climatización', 'Seguridad'],
            details: `
                <h2>El Desafío: Innovación y Autosuficiencia</h2>
                <p>El propietario del Apartamento “Mónaco” buscaba convertir su hogar en un espacio inteligente, funcional y moderno, sin alterar su diseño estético ni la comodidad de los ocupantes. El reto consistió en integrar sistemas de iluminación, sensores, cámaras de seguridad y controladores IR en una sola red central, garantizando un control total y una experiencia intuitiva.</p>
                <h2>Nuestra Solución: Un Ecosistema Inteligente Centralizado</h2>
                <p>Implementamos un controlador central que actúa como el cerebro del hogar, permitiendo la comunicación entre todos los dispositivos y la incorporación de tecnologías AIIOT para funciones inteligentes y automatizadas. La residencia cuenta con un sistema que gestiona luces, sensores y seguridad de forma sincronizada, adaptándose al estilo de vida de los residentes. Todo el cableado y los equipos fueron instalados cuidadosamente para mantener la armonía visual de cada espacio.</p>
                <h2>Resultado: Una Casa que Piensa</h2>
                <p>El resultado es una vivienda autosuficiente y funcional que responde de manera natural a las necesidades diarias. Escenas preconfiguradas permiten ajustar iluminación, temperatura o seguridad con un solo toque, ofreciendo confort, eficiencia y tranquilidad. La integración AIIOT eleva la experiencia, logrando que la tecnología se sienta orgánica, elegante y siempre accesible.</p>
            `,
            gallery: [
                { type: 'video', src: 'https://spa-ioniq.vercel.app/videos/Contenido%20Monaco/Monaco%20.mp4', thumbnail: 'https://spa-ioniq.vercel.app/videos/Contenido%20Monaco/Banner.png' },
            ]
        },
        {
            title: 'Muebles "Nexus"',
            description: 'Desarrollo de un producto IoT propio: muebles abatibles inteligentes con control y monitoreo remoto.',
            media: 'https://assets.mixkit.co/videos/preview/mixkit-a-bed-with-a-gray-quilt-and-many-pillows-4229-large.mp4',
            mediaType: 'video',
            features: ['IoT', 'Hardware', 'Firmware'],
            details: `
                <h2>El Desafío: Innovar desde Cero</h2>
                <p>Este proyecto marcó un hito para nosotros: el desarrollo completo de un producto IoT propio, tanto en su diseño físico como en su estructura digital. El objetivo era crear un sistema de muebles abatibles inteligentes, funcionales y adaptados a los nuevos estilos de vida urbanos, donde el espacio es un recurso valioso.</p>
                <p>El principal desafío fue desarrollar desde cero la electrónica, la conectividad y la interacción con el usuario final, garantizando un producto confiable, elegante y de fácil uso.</p>
                <h2>Nuestra Solución: Tecnología que Transforma Espacios</h2>
                <p>Basado en una placa ESP32, diseñamos el sistema completo de control, comunicación y automatización. Se desarrolló la electrónica, el firmware y el entorno digital que permite al usuario monitorear y controlar el mueble de forma remota.</p>
                <p>El proceso incluyó meses de investigación, pruebas y ajustes para lograr una integración fluida entre hardware y software, consolidando un ecosistema funcional que refleja la filosofía AIIOT: inteligencia artificial aplicada al confort cotidiano.</p>
                <h2>Resultado: Un Producto que Reimagina el Espacio</h2>
                <p>El resultado es un mueble inteligente capaz de transformar espacios reducidos en ambientes versátiles y modernos. Su diseño compacto y automatizado brinda soluciones prácticas para hogares contemporáneos, ofreciendo control total desde una aplicación conectada.</p>
                <p>Este desarrollo representa el primer paso hacia una línea de productos propios que combinan ingeniería, diseño y conectividad para redefinir la manera en que vivimos nuestros espacios.</p>
            `,
            gallery: [
                { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-a-bed-with-a-gray-quilt-and-many-pillows-4229-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=400&q=60' }
            ]
        },
        {
            title: 'Condominio "Nogales"',
            description: 'Sistema de iluminación inteligente, seguridad avanzada com reconhecimento de placas y conectividad mesh en una residencia de gran extensión.',
            media: 'https://assets.mixkit.co/videos/preview/mixkit-modern-house-with-a-swimming-pool-4238-large.mp4',
            mediaType: 'video',
            features: ['Iluminación LED', 'Seguridad Avanzada', 'Red Mesh'],
            details: `
                <h2>El Desafío: Estética y Conectividad sin Límites</h2>
                <p>El Condominio “Nogales” representó un reto de diseño y tecnología a gran escala. El objetivo fue crear un entorno estéticamente armonioso que integrara iluminación, seguridad y confort sin comprometer el estilo de los espacios. Además, por tratarse de una residencia de gran extensión, el principal desafío fue garantizar una conectividad estable y fluida entre todos los dispositivos inteligentes.</p>
                <h2>Nuestra Solución: Un Ecosistema Luminoso e Inteligente</h2>
                <p>Implementamos un sistema de tiras LED controladas por voz y aplicación móvil, brindando una iluminación ambiental dinámica y elegante. Se añadieron sensores de puertas y ventanas, múltiples cámaras de seguridad y uno de nuestros desarrollos propios: la automatización de la puerta de ingreso com reconhecimento de placas. También se integraron paneles de smart glass y sensores estratégicos para mejorar la experiencia y la eficiencia del hogar.<br>Para enfrentar los retos de comunicación, se propuso una red mesh personalizada que optimiza la conectividad y permite la integración de nuevos dispositivos sin saturar la red principal.</p>
                <h2>Resultado: Un Condominio que Evoluciona</h2>
                <p>El resultado es un hogar inteligente, escalable y visualmente impactante. Su sistema central coordina iluminación, seguridad y acceso, mientras se prepara para incorporar futuras funciones como persianas automáticas y sensores láser perimetrales. Nogales demuestra que la domótica puede combinar tecnología avanzada, diseño y confort en perfecta armonía.</p>
            `,
            gallery: [
                { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-house-with-a-swimming-pool-4238-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=60' }
            ]
        },
        {
            title: 'Residencia "Escobar"',
            description: 'Sistema integral de seguridad con cámaras, apertura de puertas automatizada, smart glass y control de iluminación inteligente.',
            media: 'https://assets.mixkit.co/videos/preview/mixkit-luxurious-house-in-the-middle-of-the-woods-4236-large.mp4',
            mediaType: 'video',
            features: ['Seguridad Total', 'Automatización', 'Smart Glass'],
            details: `
                <h2>El Desafío: Seguridad y Autonomía Total</h2>
                <p>La Residencia “Escobar” fue un proyecto donde el cliente nos otorgó total libertad para diseñar un sistema integral que combinara seguridad, confort y tecnología avanzada. El reto principal fue crear un entorno completamente conectado que ofreciera protección total sin perder la elegancia del hogar.</p>
                <h2>Nuestra Solución: Un Hogar que se Protege y se Adapta</h2>
                <p>Diseñamos un sistema de seguridad completo con cámaras interiores y exteriores, junto con un sistema automatizado de apertura de puertas que integra sensores y cámaras de reconhecimento para identificar visitantes en tiempo real. Además, incorporamos paneles smart glass para garantizar privacidad en la habitación principal y una red de switches inteligentes que permiten controlar la iluminación y demás dispositivos desde un único entorno digital. Todo fue integrado bajo un ecosistema AIIOT, lo que permite la creación de escenas inteligentes que automatizan actividades diarias según las rutinas de los habitantes.</p>
                <h2>Resultado: Un Espacio Inteligente y Consciente</h2>
                <p>El resultado es una vivienda con un nivel de seguridad y autonomía excepcionales. Cada dispositivo trabaja de forma coordinada, anticipándose a las necesidades del usuario. Escenas inteligentes gestionan la iluminación, la privacidad y el acceso, convirtiendo la tecnología en un asistente silencioso que protege, automatiza y optimiza el día a día del hogar.</p>
            `,
            gallery: [
                { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-luxurious-house-in-the-middle-of-the-woods-4236-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=60' }
            ]
        }
    ];

    useEffect(() => {
        if (!isMobile || !projectsRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        video.play().catch(error => console.log("Video play was prevented:", error));
                    } else {
                        video.pause();
                    }
                });
            },
            { root: projectsRef.current, threshold: 0.75 }
        );
        
        const videosMap = projectVideoRefs.current;
        videosMap.forEach(video => observer.observe(video));

        return () => {
            videosMap.forEach(video => observer.unobserve(video));
        };
    }, [isMobile, projectsData.length]);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        
        const observerOptions = {
            root: document.querySelector('.scrollable-card'),
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = Object.keys(sectionRefs).find(
                        key => sectionRefs[key as keyof typeof sectionRefs].current === entry.target
                    );
                    if (sectionId) {
                       setActiveSection(sectionId);
                    }
                }
            });
        }, observerOptions);
        
        const servicesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setServicesVisible(true);
                    servicesObserver.unobserve(entry.target);
                }
            },
            { root: document.querySelector('.scrollable-card'), threshold: 0.2 }
        );
        
        const servicesRef = sectionRefs['Servicios'].current;
        if (servicesRef) {
            servicesObserver.observe(servicesRef);
        }

        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isCatalogOpen) {
                    setIsCatalogOpen(false);
                    setSelectedCatalogCategory(null);
                } else if (selectedFeature) {
                    setSelectedFeature(null);
                } else if (selectedProject) {
                    setSelectedProject(null);
                } else if (selectedService) {
                    setSelectedService(null);
                } else if (isMenuOpen) {
                    setIsMenuOpen(false);
                }
            }
            if (selectedProject) {
                if (e.key === 'ArrowRight') handleProjectGalleryNav('next');
                if (e.key === 'ArrowLeft') handleProjectGalleryNav('prev');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
             window.removeEventListener('resize', handleResize);
             window.removeEventListener('keydown', handleKeyDown);
             Object.values(sectionRefs).forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
            if (servicesRef) {
                servicesObserver.unobserve(servicesRef);
            }
        };
    }, [selectedProject, selectedFeature, selectedService, galleryIndex, isMenuOpen, isCatalogOpen]);
    
    const exclusiveFeaturesData = [
        { text: 'Software y hardware personalizados para tus necesidades exactas.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> },
        { text: 'Interfaces de usuario diseñadas exclusivamente para tu proyecto.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> },
        { text: 'IA que aprende de tus hábitos y optimiza las automatizaciones.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> },
        { text: 'Plataforma escalable que crece y evoluciona contigo.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> },
    ];

    const servicesData: Service[] = [
        {
            icon: <IconConsulting style={{width: '48px', height: '48px', color: 'var(--accent-color)'}}/>,
            title: "Consultoría y Diseño",
            description: "Creamos proyectos de domótica a medida, analizando tus necesidades para un diseño funcional y estético.",
            modalTitle: "Diseño de Ecosistemas Inteligentes",
            modalDescription: "Nuestro proceso de consultoría es el pilar de un proyecto exitoso. No se trata de venderte dispositivos, sino de entender tu estilo de vida para diseñar un hogar que trabaje para ti.",
            modalDetails: [
                "Análisis profundo de tus rutinas y necesidades diarias.",
                "Diseño de la arquitectura del sistema, seleccionando la tecnología más adecuada y robusta.",
                "Planificación de la infraestructura y cableado estructurado para garantizar la fiabilidad.",
                "Integración estética de la tecnología con el diseño interior de tu espacio.",
                "Entrega de una propuesta detallada y transparente, sin sorpresas."
            ]
        },
        {
            icon: <IconInterface style={{width: '48px', height: '48px', color: 'var(--accent-color)'}}/>,
            title: "Interfaces Propias",
            description: "Desarrollamos interfaces de control intuitivas y personalizadas que te dan el control total de tu espacio.",
            modalTitle: "Control a tu Medida",
            modalDescription: "La experiencia de usuario lo es todo. Por eso creamos nuestra propia capa de software, una interfaz diseñada exclusivamente para ti, que unifica todos los sistemas bajo un control simple y elegante.",
            modalDetails: [
                "Una sola app para controlar iluminación, clima, audio/video, seguridad y más.",
                "Diseño gráfico personalizado que refleja la estética de tu hogar o marca.",
                "Creación de escenas complexas que se activan con un solo toque (ej: 'Modo Cine', 'Llegar a Casa').",
                "Interfaces adaptadas a diferentes usuarios: desde un control simple para niños hasta vistas avanzadas para administradores.",
                "Compatibilidad total con control por voz (Alexa, Google Assistant, Siri)."
            ]
        },
        {
            icon: <IconSupport style={{width: '48px', height: '48px', color: 'var(--accent-color)'}}/>,
            title: "Soporte Evolutivo",
            description: "Ofrecemos mantenimiento y actualizaciones para que tu sistema esté siempre a la vanguardia tecnológica.",
            modalTitle: "Tu Sistema, Siempre Vivo",
            modalDescription: "La tecnología avanza, y tu hogar inteligente también debería hacerlo. Nuestro servicio de soporte evolutivo va más allá de la simple reparación; es un compromiso para mantener tu sistema seguro, actualizado y listo para el futuro.",
            modalDetails: [
                "Monitorización remota proactiva para detectar y resolver problemas antes de que te afecten.",
                "Actualizaciones periódicas de software para mejorar la seguridad y añadir nuevas funcionalidades.",
                "Soporte para integrar nuevos dispositivos y tecnologías que aparezcan en el mercado.",
                "Optimización continua de las automatizaciones basadas en tu uso y feedback.",
                "Asistencia técnica prioritaria para resolver cualquier duda o incidencia."
            ]
        }
    ];
    
    const proposalFeaturesData = [
        { id: 'lighting', name: 'Iluminación', icon: <IconLightbulb style={styles.proposalFeatureIcon} /> },
        { id: 'climate', name: 'Climatización', icon: <IconThermometer style={styles.proposalFeatureIcon} /> },
        { id: 'security', name: 'Seguridad', icon: <IconLock style={styles.proposalFeatureIcon} /> },
        { id: 'audio', name: 'Audio', icon: <IconSpeaker style={styles.proposalFeatureIcon} /> },
        { id: 'video', name: 'Video', icon: <IconPlay style={styles.proposalFeatureIcon} /> },
        { id: 'blinds', name: 'Persianas', icon: <IconHub style={styles.proposalFeatureIcon} /> },
        { id: 'network', name: 'Red Wi-Fi', icon: <IconHub style={styles.proposalFeatureIcon} /> },
        { id: 'access', name: 'Control Acceso', icon: <IconLock style={styles.proposalFeatureIcon} /> },
    ];

    const { securitySectionContainer: securitySectionContainerBase, securityFeatureList: securityFeatureListBase, ...baseStyles } = styles;

    const dynamicStyles = useMemo(() => ({
      ...baseStyles,
      securitySectionContainer: {
        ...securitySectionContainerBase,
        flexDirection: isMobile ? 'column' : 'row',
      },
      securityIllustrationContainer: {
            ...styles.securityIllustrationContainer,
            minWidth: isMobile ? '100%' : '300px',
      },
      securityFeatureList: {
        ...securityFeatureListBase,
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      }
    }), [isMobile]);


    const handleMouseOverNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.currentTarget.ariaCurrent !== 'page') {
            e.currentTarget.style.opacity = '0.7';
        }
    };
    const handleMouseOutNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.opacity = '1';
    };
    
    const sphereData = useMemo(() => [
        { size: 300, top: '5%', left: '10%', duration: 28 },
        { size: 450, top: '50%', left: '20%', duration: 35 },
        { size: 250, top: '60%', left: '85%', duration: 25 },
        { size: 350, top: '5%', left: '70%', duration: 32 },
        { size: 200, top: '80%', left: '5%', duration: 22 },
        { size: 400, top: '20%', left: '45%', duration: 30 },
      ].map(s => ({
          ...s,
          '--x-1': `${Math.random() * 12 - 6}vw`,
          '--y-1': `${Math.random() * 12 - 6}vh`,
          '--x-2': `${Math.random() * 12 - 6}vw`,
          '--y-2': `${Math.random() * 12 - 6}vh`,
      })), []);

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const navItems = [
        { label: 'Inicio', id: 'Inicio', type: 'scroll' },
        { label: 'Nosotros', id: 'Nosotros', type: 'scroll' },
        { label: 'Servicios', id: 'Servicios', type: 'scroll' },
        { label: 'Proyectos', id: 'Proyectos', type: 'scroll' },
        { label: 'Catálogo', id: 'Catálogo', type: 'scroll' },
        { label: 'Propuestas', id: 'Propuestas', type: 'scroll' },
        { label: 'Contáctanos', id: 'Contáctanos', type: 'scroll' },
    ];


    return (
        <main style={{...styles.mainContainer, padding: isMobile ? '0' : '2rem' }}>
             <style>{`
                .custom-range {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    background: rgba(255,255,255,0.2);
                    outline: none;
                }
                .custom-range::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #8B5CF6;
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                }
                .custom-range::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #8B5CF6;
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                }
             `}</style>
             <div className="background">
                {sphereData.map((sphere, index) => {
                    const { size, top, left, duration, ...cssVars } = sphere;
                    return (
                        <div
                            key={index}
                            className="sphere"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top,
                                left,
                                animationDuration: `${duration}s`,
                                animationDelay: `${index * -5}s`,
                                ...cssVars,
                            } as CSSProperties}
                        />
                    );
                })}
            </div>
            
            <section style={{...styles.glassCard, ...(isMobile && {borderRadius: 0, height: '100%', maxHeight: '100vh', width: '100%', border: 'none'})}}>
                <header style={{...styles.header, ...(isMobile && {padding: '20px'})}}>
                    <div style={{...styles.logo, ...(isMobile && {fontSize: '1.2rem'})}}>ioniq</div>
                    <div style={styles.headerControls}>
                        {isMobile ? (
                            <IconMenu style={{width: '28px', height: '28px', cursor: 'pointer', color: 'var(--text-main)'}} onClick={() => setIsMenuOpen(true)} />
                        ) : (
                            <>
                                <nav style={styles.nav}>
                                    {navItems.map(item => (
                                        <a
                                            key={item.label}
                                            href={item.type === 'scroll' ? `#${item.id}` : '#'}
                                            style={activeSection === item.id ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
                                            onMouseOver={handleMouseOverNavLink}
                                            onMouseOut={handleMouseOutNavLink}
                                            onClick={(e) => {
                                                if (item.type === 'scroll' && item.id) {
                                                    handleNavClick(e, item.id);
                                                }
                                            }}
                                            aria-current={activeSection === item.id ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                             </>
                        )}
                    </div>
                </header>
                
                {isMobile && isMenuOpen && (
                    <>
                        <div className="mobile-menu-overlay" style={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}></div>
                        <div className="mobile-menu-container" style={styles.mobileMenuContainer} onClick={e => e.stopPropagation()}>
                            <div style={styles.mobileMenuHeader}>
                                <IconClose style={{width: '28px', height: '28px', cursor: 'pointer', color: 'var(--text-main)'}} onClick={() => setIsMenuOpen(false)} />
                            </div>
                            <nav style={styles.mobileNav}>
                                {navItems.map(item => (
                                    <a
                                        key={item.label}
                                        href={item.type === 'scroll' ? `#${item.id}` : '#'}
                                        style={{...styles.mobileNavLink, color: 'var(--text-main)'}}
                                        onClick={(e) => {
                                            if (item.type === 'scroll' && item.id) {
                                                handleNavClick(e, item.id);
                                            }
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </>
                )}

                <div className="scrollable-card" style={{flex: 1, minHeight: 0, width: '100%', overflowY: 'auto', scrollBehavior: 'smooth'}}>
                    <div style={{...styles.contentContainer, ...(isMobile && {padding: '0 20px 20px 20px'})}}>
                        <div id="Inicio" ref={sectionRefs['Inicio']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                            <AnimatedText as="h2" text="DOMÓTICA & TECNOLOGÍA AVANZADA" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'}), paddingBottom: '10px', borderBottom: '2px solid var(--text-main)', marginBottom: '10px'}} />
                            <AnimatedText as="h1" text="Habitat Inteligente" style={{...styles.title, ...(isMobile && {fontSize: '2.5rem'})}} />
                            <AnimatedText as="p" text="Transformamos espacios ordinarios en ecosistemas inteligentes y personalizados, desde escenas inmersivas para tu entretenimiento hasta la optimización de tu confort y seguridad. Vive el futuro, hoy." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                            <button
                                style={styles.ctaButton}
                                className="cta-button"
                                onClick={(e) => handleNavClick(e, 'Contáctanos')}
                            >
                                CONOCE MÁS
                            </button>
                        </div>

                        <div style={{...styles.combinedStatCard, marginTop: '60px' }}>
                            <div
                                style={{
                                    ...styles.statItem,
                                    transform: hoveredStat === 'devices' ? 'scale(1.05)' : (hoveredStat === 'scenes' ? 'scale(0.95)' : 'scale(1)'),
                                    opacity: hoveredStat === 'scenes' ? 0.7 : 1,
                                }}
                                className="statItem"
                                onMouseEnter={() => setHoveredStat('devices')}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <p style={styles.statLabel}>Dispositivos Conectados</p>
                                <p style={styles.statValue}>350</p>
                            </div>
                            <div style={styles.statSeparator} />
                            <div
                                style={{
                                    ...styles.statItem,
                                    transform: hoveredStat === 'scenes' ? 'scale(1.05)' : (hoveredStat === 'devices' ? 'scale(0.95)' : 'scale(1)'),
                                    opacity: hoveredStat === 'devices' ? 0.7 : 1,
                                }}
                                className="statItem"
                                onMouseEnter={() => setHoveredStat('scenes')}
                                onMouseLeave={() => setHoveredStat(null)}
                            >
                                <p style={styles.statLabel}>Escenas Automatizadas</p>
                                <p style={styles.statValue}>1110</p>
                            </div>
                        </div>

                        <div id="Nosotros" ref={sectionRefs['Nosotros']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                            <AnimatedText as="h2" text="Nuestra Filosofía" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="INNOVACIÓN Y PERSONALIZACIÓN" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <AnimatedText as="p" text="En ioniq, no solo instalamos sistemas domóticos; creamos ecosistemas inteligentes a la medida de tu estilo de vida. Nuestra fortaleza es el desarrollo propio, garantizando soluciones exclusivas, una integración perfecta y una experiencia de usuario inigualable." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                        </div>

                        <div style={styles.domoticsSectionWrapper}>
                            <div style={dynamicStyles.securitySectionContainer}>
                                <div style={dynamicStyles.securityIllustrationContainer}>
                                    <IllustrationDecentralized />
                                </div>
                                <div style={styles.securityTextContainer}>
                                    <AnimatedText as="h1" text="Exclusividad y Desarrollo Propio" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'}), textAlign: 'left'}} />
                                    <AnimatedText as="p" text="Nuestro mayor diferenciador es la capacidad de desarrollo in-house. No nos limitamos a integrar productos; creamos soluciones a medida que garantizan una experiencia única, cohesiva y perfectamente alineada con tu visión." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'}), textAlign: 'left', maxWidth: 'none'}} />
                                    <ul style={dynamicStyles.securityFeatureList}>
                                        {exclusiveFeaturesData.map((item, index) => (
                                            <li key={index} style={styles.securityFeatureItem}>
                                                <span style={styles.securityFeatureIcon}>{item.icon}</span>
                                                <span>{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="Servicios" ref={sectionRefs['Servicios']} style={styles.domoticsSectionWrapper}>
                            <AnimatedText as="h1" text="Control Total, Experiencia Única" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <AnimatedText as="p" text="Más que productos, ofrecemos soluciones. Escuchamos tus necesidades y las transformamos en realidad con desarrollo propio, creando un entorno inteligente diseñado exclusivamente para tu máxima satisfacción." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                            
                            <div style={styles.featureGrid}>
                               {domoticsFeaturesData.map((feature, index) => (
                                   <div key={index} style={styles.featureCard} 
                                        className="featureCard"
                                        onClick={() => setSelectedFeature(feature)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = `0 10px 30px ${feature.color1}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}>
                                       <GlowIcon color1={feature.color1} color2={feature.color2}>{feature.icon}</GlowIcon>
                                       <h2 style={styles.featureCardTitle}>{feature.title}</h2>
                                   </div>
                               ))}
                            </div>
                        </div>

                        <div style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                            <AnimatedText as="h2" text="Lo que hacemos" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="Nuestros Servicios" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <div style={styles.serviceGrid}>
                                {servicesData.map((service, index) => {
                                    const isHovered = hoveredService === index;
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                ...styles.serviceCard,
                                                cursor: 'pointer',
                                                backgroundColor: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
                                                opacity: servicesVisible ? 1 : 0,
                                                transform: servicesVisible ? (isHovered ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(20px)',
                                                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.3s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out`,
                                            }}
                                            className="serviceCard"
                                            onClick={() => setSelectedService(service)}
                                            onMouseEnter={() => setHoveredService(index)}
                                            onMouseLeave={() => setHoveredService(null)}
                                        >
                                            {service.icon}
                                            <h2 style={styles.serviceTitle}>{service.title}</h2>
                                            <p style={styles.serviceDescription}>{service.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                         <div id="Proyectos" ref={sectionRefs['Proyectos']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                            <AnimatedText as="h2" text="Nuestro Trabajo" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="Proyectos Destacados" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            
                            {!isMobile ? (
                                <div style={styles.projectsAccordionContainer} role="tablist">
                                    {projectsData.map((project, index) => {
                                        const isActive = activeProject === index;
                                        return (
                                            <div
                                                key={index}
                                                role="tab"
                                                aria-selected={isActive}
                                                aria-controls={`project-content-${index}`}
                                                onMouseEnter={() => setActiveProject(index)}
                                                onClick={() => setSelectedProject(project)}
                                                className="project-column"
                                                style={{
                                                    ...styles.projectColumn,
                                                    flex: isActive ? 5 : 1,
                                                }}
                                            >
                                                {isActive && project.mediaType === 'video' ? (
                                                    <video key={project.title} src={project.media} autoPlay loop muted playsInline poster={project.gallery?.[0]?.thumbnail} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}}/>
                                                ) : (
                                                    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${project.mediaType === 'video' ? project.gallery?.[0]?.thumbnail : project.media})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0}}/>
                                                )}

                                                <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%)', zIndex: 1}}/>

                                                <div style={{ ...styles.projectColumnContent, opacity: isActive ? 1 : 0, color: 'white' }} id={`project-content-${index}`}>
                                                    <h2 style={{...styles.projectTitle, fontSize: '1.2rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{project.title}</h2>
                                                    <p style={{...styles.description, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', marginBottom: '15px', maxWidth: '100%', textAlign: 'left', textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{project.description}</p>
                                                    <div style={{...styles.projectFeaturesContainer, marginBottom: '20px'}}>
                                                        {project.features.map((feature, fIndex) => (
                                                            <span key={fIndex} style={styles.projectFeatureTag}>{feature}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div style={{ ...styles.projectColumnTitleVertical, left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%) rotate(180deg)', opacity: isActive ? 0 : 0.8, color: 'white' }}>
                                                    <span>{project.title}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                 <div style={styles.projectsContainer}>
                                    <div style={{flex: 1, overflow: 'hidden'}}>
                                        <div style={{...styles.projectsSlider, msOverflowStyle: 'none', scrollbarWidth: 'none'}} ref={projectsRef}>
                                            {projectsData.map((project, index) => (
                                                <div key={index} style={{...styles.projectCard, flex: '0 0 90%', scrollSnapAlign: 'center'}} className="project-card" onClick={() => setSelectedProject(project)}>
                                                    {project.mediaType === 'video' ? (
                                                        <video 
                                                          ref={el => {
                                                              if (el) projectVideoRefs.current.set(index, el);
                                                              else projectVideoRefs.current.delete(index);
                                                          }}
                                                          src={project.media} style={styles.projectImage} loop muted playsInline preload="metadata" poster={project.gallery?.[0]?.thumbnail}
                                                        />
                                                    ) : (
                                                        <img src={project.media} alt={project.title} style={styles.projectImage} />
                                                    )}
                                                    <div style={styles.projectCardContent}>
                                                        <h2 style={styles.projectTitle}>{project.title}</h2>
                                                        <p style={{...styles.description, fontSize: '0.8rem', marginBottom: '15px', maxWidth: '100%', textAlign: 'left'}}>{project.description}</p>
                                                        <div style={{...styles.projectFeaturesContainer, marginBottom: '20px'}}>
                                                            {project.features.map((feature, fIndex) => (
                                                                <span key={fIndex} style={styles.projectFeatureTag}>{feature}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div id="Catálogo" ref={sectionRefs['Catálogo']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                            <AnimatedText as="h2" text="Nuestros Productos" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="Catálogo de Dispositivos" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <AnimatedText as="p" text="Explora una selección curada de los mejores dispositivos del mercado, compatibles con nuestros ecosistemas inteligentes. Desde el control central hasta el último sensor, tenemos la pieza perfecta para tu proyecto." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                             <button
                                style={styles.ctaButton}
                                className="cta-button"
                                onClick={() => setIsCatalogOpen(true)}
                            >
                                VER CATÁLOGO
                            </button>
                        </div>
                        
                         <div id="Propuestas" ref={sectionRefs['Propuestas']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'}), borderBottom: '1px solid var(--glass-border)'}}>
                            <AnimatedText as="h2" text="Tu Proyecto en Mente" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="Configurador de Propuesta" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <AnimatedText as="p" text="Diseña tu ecosistema ideal y obtén una estimación de complejidad. Selecciona las características de tu espacio para que podamos ofrecerte una solución a medida." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                            
                            <div style={{...styles.proposalGrid, gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr'}}>
                                {/* Left Side: Configurator */}
                                <div style={styles.proposalConfigContainer}>
                                    <div>
                                        <h3 style={styles.proposalSectionLabel}>1. Tipo de Espacio</h3>
                                        <div style={styles.proposalTypeGrid}>
                                            <div 
                                                style={{...styles.proposalOptionCard, ...(propType === 'apartment' ? styles.proposalOptionCardActive : {})}}
                                                onClick={() => setPropType('apartment')}
                                            >
                                                <IconApartment style={{width: 32, height: 32, color: propType === 'apartment' ? 'var(--accent-color)' : 'var(--text-secondary)'}} />
                                                <span>Apartamento</span>
                                            </div>
                                            <div 
                                                style={{...styles.proposalOptionCard, ...(propType === 'house' ? styles.proposalOptionCardActive : {})}}
                                                onClick={() => setPropType('house')}
                                            >
                                                <IconHome style={{width: 32, height: 32, color: propType === 'house' ? 'var(--accent-color)' : 'var(--text-secondary)'}} />
                                                <span>Casa</span>
                                            </div>
                                            <div 
                                                style={{...styles.proposalOptionCard, ...(propType === 'business' ? styles.proposalOptionCardActive : {})}}
                                                onClick={() => setPropType('business')}
                                            >
                                                <IconBusiness style={{width: 32, height: 32, color: propType === 'business' ? 'var(--accent-color)' : 'var(--text-secondary)'}} />
                                                <span>Negocio</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 style={styles.proposalSectionLabel}>2. Área Aproximada: {propSize} m²</h3>
                                        <div style={styles.customSliderContainer}>
                                            <input 
                                                type="range" 
                                                min="40" 
                                                max="1000" 
                                                step="10" 
                                                value={propSize} 
                                                onChange={(e) => setPropSize(parseInt(e.target.value))}
                                                className="custom-range"
                                            />
                                            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '5px'}}>
                                                <span>40m²</span>
                                                <span>500m²</span>
                                                <span>1000m²</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 style={styles.proposalSectionLabel}>3. Sistemas de Interés</h3>
                                        <div style={styles.proposalFeatureGrid}>
                                            {proposalFeaturesData.map(feature => (
                                                <div 
                                                    key={feature.id}
                                                    style={{...styles.proposalFeatureCard, ...(propFeatures.includes(feature.name) ? styles.proposalFeatureCardActive : {})}}
                                                    onClick={() => handleFeatureToggle(feature.name)}
                                                >
                                                    <div style={{color: propFeatures.includes(feature.name) ? 'var(--accent-color)' : 'var(--text-main)'}}>
                                                        {feature.icon}
                                                    </div>
                                                    <span style={styles.proposalFeatureName}>{feature.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Summary */}
                                <div style={styles.proposalSummaryCard}>
                                    <h3 style={styles.proposalSummaryTitle}>Resumen Estimado</h3>
                                    
                                    <div style={styles.proposalSummaryItem}>
                                        <span>Tipo:</span>
                                        <span style={styles.proposalSummaryValue}>{propType === 'apartment' ? 'Apartamento' : propType === 'house' ? 'Casa' : 'Negocio'}</span>
                                    </div>
                                    <div style={styles.proposalSummaryItem}>
                                        <span>Área:</span>
                                        <span style={styles.proposalSummaryValue}>{propSize} m²</span>
                                    </div>
                                    <div style={styles.proposalSummaryItem}>
                                        <span>Sistemas:</span>
                                        <span style={styles.proposalSummaryValue}>{propFeatures.length} seleccionados</span>
                                    </div>

                                    <div style={{marginTop: '10px'}}>
                                        <div style={styles.proposalSummaryItem}>
                                            <span>Nivel de Automatización:</span>
                                            <span style={{color: complexityLabel === 'Premium' ? '#EF4444' : complexityLabel === 'Avanzado' ? '#F59E0B' : '#10B981', fontWeight: 700}}>{complexityLabel}</span>
                                        </div>
                                        <div style={styles.complexityBarContainer}>
                                            <div style={{...styles.complexityBarFill, width: `${complexityLevel}%`}}></div>
                                        </div>
                                        <p style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px'}}>
                                            {complexityLabel === 'Básico' && 'Ideal para iniciarse en la domótica.'}
                                            {complexityLabel === 'Avanzado' && 'Un ecosistema conectado y eficiente.'}
                                            {complexityLabel === 'Premium' && 'Control total y máxima exclusividad.'}
                                        </p>
                                    </div>

                                    <button 
                                        style={{...styles.ctaButton, marginTop: '20px', background: 'var(--accent-color)', borderColor: 'var(--accent-color)'}}
                                        onClick={handleRequestQuote}
                                    >
                                        SOLICITAR PRESUPUESTO
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="Contáctanos" ref={sectionRefs['Contáctanos']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'}), borderBottom: 'none'}}>
                            <AnimatedText as="h2" text="¿Listo para empezar?" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                            <AnimatedText as="h1" text="Contáctanos" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                            <AnimatedText as="p" text="Envíanos un mensaje y nuestro equipo se pondrá en contacto contigo para explorar cómo podemos transformar tu espacio." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                            <form style={styles.contactForm}>
                                <input type="text" placeholder="Nombre" style={styles.formInput} required />
                                <input type="email" placeholder="Email" style={styles.formInput} required />
                                <textarea ref={contactMessageRef} placeholder="Tu mensaje" style={styles.formTextarea} required></textarea>
                                <button
                                    type="button"
                                    style={{...styles.ctaButton, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}
                                    className="cta-button"
                                >
                                    <IconWhatsApp style={{ width: '20px', height: '20px' }} />
                                    ENVIAR POR WHATSAPP
                                </button>
                            </form>
                             <div style={styles.socialIconsContainer}>
                                <a href="#" className="social-icon-link" style={styles.socialIconLink} aria-label="Instagram" onMouseEnter={(e) => { e.currentTarget.style.color = '#E4405F';}} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-main)';}}>
                                    <IconInstagram style={{ width: '28px', height: '28px' }} />
                                </a>
                                <a href="#" className="social-icon-link" style={styles.socialIconLink} aria-label="WhatsApp" onMouseEnter={(e) => { e.currentTarget.style.color = '#25D366';}} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-main)';}}>
                                    <IconWhatsApp style={{ width: '28px', height: '28px' }} />
                                </a>
                                <a href="#" className="social-icon-link" style={styles.socialIconLink} aria-label="X" onMouseEnter={(e) => { e.currentTarget.style.color = '#888';}} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-main)';}}>
                                    <IconX style={{ width: '26px', height: '26px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {selectedProject && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div style={styles.modalContent} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} className="modal-close-button" onClick={() => setSelectedProject(null)} aria-label="Cerrar detalles del proyecto">&times;</button>
                        <div className="modal-scroll-area" style={styles.modalInnerContent}>
                            <img src={selectedProject.gallery?.[0]?.thumbnail || selectedProject.media} alt={selectedProject.title} style={styles.modalImage}/>
                            <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                            <div className="project-details-content" dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
                            
                            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                                <div style={styles.gallerySectionContainer}>
                                    <h3 style={styles.gallerySectionTitle}>Galería del Proyecto</h3>
                                    
                                    <div style={styles.galleryCarouselMain}>
                                        {selectedProject.gallery[galleryIndex].type === 'video' ? (
                                            <video 
                                                key={selectedProject.gallery[galleryIndex].src}
                                                src={selectedProject.gallery[galleryIndex].src} 
                                                style={styles.galleryCarouselMedia} 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline
                                                controls
                                                poster={selectedProject.gallery[galleryIndex].thumbnail}
                                            />
                                        ) : (
                                            <img 
                                                key={selectedProject.gallery[galleryIndex].src}
                                                src={selectedProject.gallery[galleryIndex].src} 
                                                alt={`Galería ${selectedProject.title} ${galleryIndex + 1}`} 
                                                style={styles.galleryCarouselMedia} 
                                            />
                                        )}
                                        <button 
                                            style={{...styles.galleryCarouselNavButton, left: '15px'}}
                                            onClick={(e) => { e.stopPropagation(); handleProjectGalleryNav('prev'); }} 
                                            aria-label="Anterior"
                                            className="slider-nav-button"
                                        >‹</button>
                                        <button 
                                            style={{...styles.galleryCarouselNavButton, right: '15px'}}
                                            onClick={(e) => { e.stopPropagation(); handleProjectGalleryNav('next'); }} 
                                            aria-label="Siguiente"
                                            className="slider-nav-button"
                                        >›</button>
                                    </div>

                                    <div style={styles.galleryThumbnailsContainer}>
                                        {selectedProject.gallery.map((item, index) => (
                                            <div
                                                key={index}
                                                style={index === galleryIndex ? {...styles.galleryThumbnail, ...styles.galleryThumbnailActive} : styles.galleryThumbnail}
                                                onClick={() => setGalleryIndex(index)}
                                            >
                                                <img src={item.thumbnail} alt={`Thumbnail ${index + 1}`} style={styles.galleryThumbnailImage} />
                                                {item.type === 'video' && (
                                                    <IconPlay style={styles.galleryItemPlayIcon} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {selectedFeature && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedFeature(null)}>
                    <div style={{...styles.modalContent, maxWidth: '700px'}} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} className="modal-close-button" onClick={() => setSelectedFeature(null)} aria-label="Cerrar detalles de la característica">&times;</button>
                        <div className="modal-scroll-area" style={styles.modalInnerContent}>
                            {selectedFeature.modalMediaType === 'video' ? (
                                <video src={selectedFeature.modalMedia} style={styles.modalImage} autoPlay loop muted playsInline/>
                            ) : (
                                <img src={selectedFeature.modalMedia} alt={selectedFeature.modalTitle} style={styles.modalImage}/>
                            )}
                            <h2 style={styles.modalTitle}>{selectedFeature.modalTitle}</h2>
                            <p style={{...styles.description, maxWidth: 'none', textAlign: 'left', marginBottom: 0}}>{selectedFeature.modalDescription}</p>
                        
                            {selectedFeature.products && selectedFeature.products.length > 0 && (
                                <div style={styles.productSectionContainer}>
                                    <h3 style={styles.productSectionTitle}>Productos de Ejemplo</h3>
                                    <div style={styles.productGrid}>
                                        {selectedFeature.products.map((product, index) => (
                                           <ProductCard key={index} product={product} isMobile={isMobile} styles={styles} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {selectedService && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedService(null)}>
                    <div style={{...styles.modalContent, maxWidth: '600px'}} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} className="modal-close-button" onClick={() => setSelectedService(null)} aria-label="Cerrar detalles del servicio">&times;</button>
                        <div className="modal-scroll-area" style={styles.modalInnerContent}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                                {selectedService.icon}
                                <h2 style={{...styles.modalTitle, marginBottom: 0, textAlign: 'center'}}>{selectedService.modalTitle}</h2>
                            </div>
                            <p style={{...styles.description, maxWidth: 'none', textAlign: 'center', marginBottom: '20px'}}>{selectedService.modalDescription}</p>
                            
                            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {selectedService.modalDetails.map((detail, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-color)', marginTop: '3px' }}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {isCatalogOpen && (
                 <div style={styles.modalOverlay} className="modal-overlay" onClick={() => { setIsCatalogOpen(false); setSelectedCatalogCategory(null); }}>
                    <div style={{...styles.modalContent, maxWidth: selectedCatalogCategory ? '900px' : '700px' }} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} className="modal-close-button" onClick={() => { setIsCatalogOpen(false); setSelectedCatalogCategory(null); }} aria-label="Cerrar catálogo">&times;</button>
                        
                        {!selectedCatalogCategory ? (
                            <>
                                <div style={styles.catalogModalHeader}>
                                    <h2 style={{...styles.modalTitle, marginBottom: 0}}>Categorías</h2>
                                </div>
                                <div className="modal-scroll-area" style={{flex: 1, minHeight: 0, overflowY: 'auto'}}>
                                    <div style={styles.categoryGrid}>
                                        {catalogData.map((category) => (
                                            <div 
                                                key={category.name} 
                                                style={styles.categoryCard} 
                                                className="category-card"
                                                onClick={() => setSelectedCatalogCategory(category)}
                                            >
                                                <span style={{color: 'var(--accent-color)'}}>{category.icon}</span>
                                                <h3 style={styles.categoryCardTitle}>{category.name}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={styles.catalogModalHeader}>
                                    <button style={styles.catalogBackButton} className="catalog-back-button" onClick={() => setSelectedCatalogCategory(null)} aria-label="Volver a categorías">‹</button>
                                    <h2 style={styles.catalogModalTitle}>{selectedCatalogCategory.name}</h2>
                                </div>
                                 <div className="modal-scroll-area" style={{flex: 1, minHeight: 0, overflowY: 'auto'}}>
                                     <div style={styles.catalogProductGrid}>
                                        {selectedCatalogCategory.products.map((product) => (
                                            <div key={product.name} style={{...styles.catalogProductCard, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '150px'}} className="catalog-product-card">
                                                <div style={styles.catalogProductContent}>
                                                    <h4 style={styles.catalogProductName}>{product.name}</h4>
                                                    <p style={styles.catalogProductDescription}>{product.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                     </div>
                                 </div>
                            </>
                        )}
                    </div>
                </div>
            )}

        </main>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
