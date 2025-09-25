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
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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


const GlowIcon: React.FC<{ children: React.ReactNode; color1: string; color2: string }> = ({ children, color1, color2 }) => (
    <div style={{
        width: 64, height: 64, borderRadius: '50%',
        display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',
        background: `radial-gradient(circle, ${color1} 0%, transparent 70%)`,
    }}>
        <div style={{ color: 'white', width: 32, height: 32, position: 'relative', zIndex: 2 }}>{children}</div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', boxShadow: `0 0 20px 5px ${color2}`, opacity: 0.5 }}/>
    </div>
);

const IllustrationDecentralized: React.FC<{ style?: CSSProperties }> = ({ style }) => (
    <div style={{ ...style, position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', borderRadius: '12px', boxShadow: '0 0 40px #8B5CF6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
    image: string;
    features: string[];
    details: string;
    gallery: GalleryItem[];
}

interface ProductExample {
    name: string;
    description: string;
    image: string;
}

interface DomoticsFeature {
    title: string;
    icon: React.ReactNode;
    color1: string;
    color2: string;
    modalTitle: string;
    modalDescription: string;
    modalImage: string;
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
    const [galleryViewer, setGalleryViewer] = useState<{ items: GalleryItem[]; startIndex: number } | null>(null);
    
    const sectionRefs = {
        'Inicio': useRef<HTMLDivElement>(null),
        'Nosotros': useRef<HTMLDivElement>(null),
        'Servicios': useRef<HTMLDivElement>(null),
        'Proyectos': useRef<HTMLDivElement>(null),
        'Contáctanos': useRef<HTMLDivElement>(null),
    };

    const projectsRef = useRef<HTMLDivElement>(null);

    const handleGalleryNav = (direction: 'next' | 'prev') => {
        if (galleryViewer) {
            const { items, startIndex } = galleryViewer;
            const newIndex = (startIndex + (direction === 'next' ? 1 : -1) + items.length) % items.length;
            setGalleryViewer({ items, startIndex: newIndex });
        }
    };

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
                if (galleryViewer) {
                    setGalleryViewer(null);
                } else if (selectedFeature) {
                    setSelectedFeature(null);
                } else if (selectedProject) {
                    setSelectedProject(null);
                } else if (selectedService) {
                    setSelectedService(null);
                }
            }
            if (galleryViewer) {
                if (e.key === 'ArrowRight') handleGalleryNav('next');
                if (e.key === 'ArrowLeft') handleGalleryNav('prev');
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
    }, [galleryViewer, selectedProject, selectedFeature, selectedService]);

    const domoticsFeaturesData: DomoticsFeature[] = [
        { 
            title: 'Iluminación Inteligente', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>, 
            color1: 'rgba(99, 102, 241, 0.4)', 
            color2: '#6366F1',
            modalTitle: 'Control Lumínico Total',
            modalDescription: 'Desde la calidez de una cena romántica hasta la energía de una mañana productiva, ajusta la intensidad y el color de cada luz. Crea escenas personalizadas que se activan con tu voz, un toque en la app o automáticamente según la hora del día.',
            modalImage: 'https://images.unsplash.com/photo-1617999192498-4c1b9a9f9f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Tiras LED RGBW', description: 'Crea ambientes dinámicos y acentúa la arquitectura de tu espacio con millones de colores.', image: 'https://images.unsplash.com/photo-1588275261522-92147386d26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Switches Inteligentes', description: 'Controla tus luces existentes desde cualquier lugar y crea programaciones horarias.', image: 'https://images.unsplash.com/photo-1627223402232-212a02931599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Bombillas Regulables', description: 'Ajusta el brillo y la temperatura del color para cada momento, desde luz fría para trabajar hasta cálida para relajarte.', image: 'https://images.unsplash.com/photo-1620042457476-85b5428a58a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
        { 
            title: 'Climatización Avanzada', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l2.121 2.121L12 6.243 9.879 4.121 12 2zm0 20l-2.121-2.121L12 17.757l2.121 2.122L12 22zM2 12l2.121-2.121L6.243 12l-2.122 2.121L2 12zm20 0l-2.121 2.121L17.757 12l2.122-2.121L22 12zM5.636 5.636l1.414 1.414L8.464 8.464 7.05 7.05 5.636 5.636zm12.728 12.728l-1.414-1.414L15.536 15.536l1.414 1.414-1.414-1.414zM5.636 18.364l1.414-1.414L8.464 15.536 7.05 16.95l-1.414 1.414zm12.728-12.728l-1.414 1.414L15.536 8.464l1.414-1.414 1.414 1.414z"></path></svg>, 
            color1: 'rgba(59, 130, 246, 0.4)', 
            color2: '#3B82F6',
            modalTitle: 'Confort Climático Inteligente',
            modalDescription: 'Nuestro sistema aprende tus preferencias y se anticipa a tus necesidades. Geofencing activa el clima ideal antes de que llegues a casa y los sensores optimizan el consumo energético, garantizando confort absoluto con máxima eficiencia.',
            modalImage: 'https://images.unsplash.com/photo-1588214332159-4a3b1a0f9b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Termostato Inteligente', description: 'Aprende tus rutinas y optimiza la calefacción y el aire acondicionado para ahorrar energía.', image: 'https://images.unsplash.com/photo-1521782462922-9318536b6d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Controlador de A/C', description: 'Convierte tu aire acondicionado tradicional en un dispositivo inteligente controlable desde tu móvil.', image: 'https://images.unsplash.com/photo-1617103996237-703083b16335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Sensores de Temperatura', description: 'Asegura una temperatura precisa y homogénea en cada habitación de tu hogar.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
        { 
            title: 'Entretenimiento Inmersivo', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
            color1: 'rgba(236, 72, 153, 0.4)', 
            color2: '#EC4899',
            modalTitle: 'Cine en Casa, Sonido Envolvente',
            modalDescription: 'Distribuye audio y video 4K a cualquier habitación. Inicia tu película favorita en el salón y termínala en tu dormitorio sin interrupciones. Calibramos cada sistema para una acústica perfecta, creando una experiencia verdaderamente inmersiva.',
            modalImage: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Matriz de Video 4K', description: 'Distribuye cualquier fuente de video (Apple TV, Blu-ray) a cualquier pantalla de la casa en calidad 4K.', image: 'https://images.unsplash.com/photo-1606228379983-52431ea4193f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Altavoces Arquitectónicos', description: 'Sonido de alta fidelidad que se integra perfectamente en paredes y techos, desapareciendo visualmente.', image: 'https://images.unsplash.com/photo-1618366712173-8451f5s3c193a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Control Remoto Universal', description: 'Un solo mando para gobernarlos a todos. Controla tu TV, sistema de sonido, luces y más.', image: 'https://images.unsplash.com/photo-1557088426-111166b2a3c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
        { 
            title: 'Seguridad Incondicional', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>, 
            color1: 'rgba(139, 92, 246, 0.4)', 
            color2: '#8B5CF6',
            modalTitle: 'Tranquilidad, Donde Quiera Que Estés',
            modalDescription: 'Vigila tu hogar con cámaras de alta definición, recibe alertas de movimiento en tiempo real y controla accesos de forma remota. Simula presencia cuando estás fuera y duerme tranquilo sabiendo que tu hogar está protegido 24/7.',
            modalImage: 'https://images.unsplash.com/photo-1589982352634-7132e088c3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Cámaras IP con IA', description: 'Reconocimiento inteligente de personas, vehículos y paquetes para evitar falsas alarmas.', image: 'https://images.unsplash.com/photo-1544828383-7d63a1215286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Cerradura Inteligente', description: 'Acceso sin llaves mediante código, huella dactilar o tu móvil. Otorga accesos temporales a distancia.', image: 'https://images.unsplash.com/photo-1583267746897-1cf43958AD8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Sensores de Apertura', description: 'Recibe alertas instantáneas en tu móvil si una puerta o ventana se abre inesperadamente.', image: 'https://images.unsplash.com/photo-1587302923023-a5f1e0a8b417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
        { 
            title: 'Eficiencia Energética', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, 
            color1: 'rgba(16, 185, 129, 0.4)', 
            color2: '#10B981',
            modalTitle: 'Hogar Sostenible, Ahorro Inteligente',
            modalDescription: 'Monitorea tu consumo en tiempo real y deja que el sistema tome decisiones inteligentes. Apaga luces olvidadas, ajusta el termostato y optimiza el uso de electrodomésticos. Reduce tu huella de carbono y tu factura eléctrica sin esfuerzo.',
            modalImage: 'https://images.unsplash.com/photo-1624953901718-e21e875b38a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Medidor de Consumo', description: 'Monitorea el gasto energético de toda tu casa o de circuitos individuales en tiempo real.', image: 'https://images.unsplash.com/photo-1633596683411-193910de1251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Enchufes Inteligentes', description: 'Controla y programa el encendido/apagado de cualquier electrodoméstico desde tu móvil.', image: 'https://images.unsplash.com/photo-1620809748805-776a5a3a0058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Controlador de Cargas', description: 'Gestiona dispositivos de alto consumo, como calentadores, para que funcionen en horas de menor coste energético.', image: 'https://images.unsplash.com/photo-1558991341-c1170b208e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
        { 
            title: 'Acceso por Voz y Remoto', 
            icon: <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>, 
            color1: 'rgba(217, 70, 239, 0.4)', 
            color2: '#D946EF',
            modalTitle: 'Tu Voz es el Mando',
            modalDescription: 'Integramos los principales asistentes de voz para un control manos libres total. Desde apagar todas las luces al acostarte hasta pedir tu playlist favorita, tu hogar obedece tus palabras. Y con nuestra app, el control viaja contigo a cualquier parte del mundo.',
            modalImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            products: [
                { name: 'Hub de Automatización', description: 'El cerebro que unifica todos los dispositivos de diferentes marcas en un solo ecosistema cohesivo.', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Asistente de Voz', description: 'Integración nativa con Amazon Alexa, Google Assistant y Apple HomeKit para un control por voz natural.', image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
                { name: 'Interfaz Móvil Propia', description: 'Una app diseñada por y para ti, con la distribución y los controles que realmente necesitas.', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
            ]
        },
    ];
    
    const exclusiveFeaturesData = [
        { text: 'Software y hardware personalizados para tus necesidades exactas.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> },
        { text: 'Interfaces de usuario diseñadas exclusivamente para tu proyecto.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> },
        { text: 'Integración profunda y sin fisuras entre todos los sistemas.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> },
        { text: 'Plataforma escalable que crece y evoluciona contigo.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> },
    ];

    const projectsData: Project[] = [
        {
            title: 'Residencia "Armonía"',
            description: 'Integración completa de iluminación, climatización y seguridad, controlada desde una interfaz única desarrollada por ioniq.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            features: ['Iluminación', 'Climatización', 'Seguridad'],
            details: `
                <h2>El Desafío: Elegancia y Simplicidad</h2>
                <p>El propietario de la Residencia "Armonía" buscaba una solución que unificara todos los sistemas de su hogar sin comprometer la estética minimalista del diseño de interiores. El principal reto fue integrar dispositivos de múltiples fabricantes (iluminación, audio, seguridad y climatización) en una sola plataforma intuitiva y fácil de usar para toda la familia.</p>
                <h2>Nuestra Solución: Un Cerebro Central a Medida</h2>
                <p>Desarrollamos un controlador central y una aplicación móvil personalizada bajo la marca ioniq. Esto nos permitió crear una comunicación fluida entre todos los dispositivos. Se instalaron sensores de presencia y luminosidad que automatizan las luces y la temperatura, aprendiendo de las rutinas de los habitantes para maximizar el confort y la eficiencia energética. El cableado se ocultó meticulosamente para mantener la pureza visual de cada habitación.</p>
                <h2>Resultado: Un Hogar que Responde</h2>
                <p>El resultado es un hogar que parece anticipar las necesidades de sus ocupantes. Con un solo toque, se activan "escenas" como "Noche de cine" o "Buenos días", ajustando luces, cortinas, temperatura y música. El cliente destacó la sencillez de la interfaz como el mayor logro, permitiendo que la tecnología avanzada se sienta completamente natural y accesible.</p>
            `,
            gallery: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1631482015387-a8c5b331f13f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1631482015387-a8c5b331f13f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
            ]
        },
        {
            title: 'Corporativo "Nexus"',
            description: 'Oficinas inteligentes con gestión energética optimizada y automatización de salas de reuniones para máxima eficiencia.',
            image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            features: ['Eficiencia Energética', 'Automatización', 'Gestión'],
            details: `
                <h2>El Desafío: Productividad y Sostenibilidad</h2>
                <p>El Corporativo "Nexus" necesitaba modernizar sus instalaciones para reducir su huella de carbono y, al mismo tiempo, crear un entorno de trabajo más productivo. El reto era implementar un sistema de gestión de edificios (BMS) que no interrumpiera las operaciones diarias y que fuera escalable para futuras expansiones.</p>
                <h2>Nuestra Solución: Inteligencia Operativa</h2>
                <p>Implementamos una red de sensores IoT para monitorear en tiempo real el consumo de energía, la calidad del aire y la ocupación de los espacios. Nuestro software personalizado analiza estos datos para optimizar el uso del aire acondicionado y la iluminación, apagando sistemas en áreas desocupadas. Las salas de reuniones se equiparon con un sistema de reserva inteligente que prepara la sala automáticamente (proyector, luces, videoconferencia) minutos antes de una reunión programada.</p>
                <h2>Resultado: Un Espacio de Trabajo Eficiente</h2>
                <p>Tras seis meses, el Corporativo "Nexus" reportó una reducción del 35% en su consumo energético. La automatización de las salas de reuniones eliminó los tiempos de preparación técnica, aumentando la puntualidad y eficiencia de los equipos. La gestión centralizada permite al personal de mantenimiento resolver problemas de forma proactiva, a menudo antes de que los empleados los noten.</p>
            `,
            gallery: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80', thumbnail: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
            ]
        },
        {
            title: 'Penthouse "Vista"',
            description: 'Sistema de entretenimiento inmersivo con audio y video multi-zona, cortinas automatizadas y control total por voz.',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41fa2047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            features: ['Audio & Video', 'Control por Voz', 'Inmersivo'],
            details: `
                <h2>El Desafío: Entretenimiento sin Complicaciones</h2>
                <p>El dueño del Penthouse "Vista", un apasionado del cine y la música, quería un sistema de entretenimiento de alta fidelidad que se extendiera por toda la propiedad, pero sin la complejidad de múltiples controles remotos y sistemas dispares. La acústica del espacio, con grandes ventanales y techos altos, presentaba un desafío significativo para la calidad del sonido.</p>
                <h2>Nuestra Solución: Una Sinfonía Tecnológica</h2>
                <p>Diseñamos e instalamos un sistema de audio y video distribuido con fuentes centralizadas, permitiendo reproducir contenido diferente en cada zona o sincronizarlo en toda la casa. Realizamos un estudio acústico para calibrar los altavoces y colocar paneles discretos para una calidad de sonido óptima. Se integraron motores silenciosos para las cortinas y un sistema de control por voz que permite manejar todo, desde seleccionar una película hasta ajustar el volumen, con simples comandos.</p>
                <h2>Resultado: Inmersión Total</h2>
                <p>La experiencia es cinematográfica. El sistema de sonido envuelve al oyente y la calidad de video 4K es espectacular. La facilidad del control por voz ha sido el factor más elogiado, eliminando cualquier barrera tecnológica. El cliente ahora disfruta de su contenido favorito con una calidad y comodidad que superaron ampliamente sus expectativas.</p>
            `,
            gallery: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', thumbnail: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-big-screen-4235-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1519709026382-08c751a4a46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', thumbnail: 'https://images.unsplash.com/photo-1519709026382-08c751a4a46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
            ]
        },
        {
            title: 'Jardín "Edén"',
            description: 'Desarrollo a medida de un sistema de riego inteligente y paisajismo lumínico que se adapta a las condiciones climáticas.',
            image: 'https://images.unsplash.com/photo-1542254317-a83d0c9a8711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            features: ['Riego Inteligente', 'Iluminación Exterior', 'Adaptativo'],
            details: `
                <h2>El Desafío: Un Ecosistema Vivo y Autónomo</h2>
                <p>El proyecto "Edén" consistía en un extenso jardín con una variedad de plantas con diferentes necesidades hídricas. El cliente quería un sistema de riego y de iluminación que no solo fuera automático, sino verdaderamente inteligente: que se adaptara al clima en tiempo real para ahorrar agua y que realzara la belleza del paisaje por la noche.</p>
                <h2>Nuestra Solución: Tecnología que Nutre</h2>
                <p>Creamos un sistema a medida que integra sensores de humedad en el suelo y una estación meteorológica local. El software, desarrollado por ioniq, cruza estos datos con pronósticos del tiempo para decidir exactamente cuánta agua usar y en qué zonas, evitando el riego en días de lluvia. Para la iluminación, diseñamos escenas lumínicas que cambian sutilmente a lo largo de la noche, destacando diferentes árboles y flores. Todo el sistema utiliza hardware resistente a la intemperie y de bajo consumo.</p>
                <h2>Resultado: Belleza Sostenible</h2>
                <p>El jardín está más saludable que nunca, y el consumo de agua se ha reducido en un 50% en comparación con un sistema de riego tradicional. Por la noche, el jardín se transforma en una obra de arte lumínica, creando una atmósfera mágica. El cliente puede monitorear y ajustar todo desde su tablet, pero rara vez lo necesita, ya que el sistema gestiona el jardín de forma autónoma y eficiente.</p>
            `,
            gallery: [
                { type: 'image', src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1446162947219-21669493c4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1446162947219-21669493c4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
                { type: 'image', src: 'https://images.unsplash.com/photo-1617172733983-21c6e45f1b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', thumbnail: 'https://images.unsplash.com/photo-1617172733983-21c6e45f1b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
            ]
        }
    ];
    
    const servicesData: Service[] = [
        {
            icon: <IconConsulting style={{width: '48px', height: '48px', color: '#8B5CF6'}}/>,
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
            icon: <IconInterface style={{width: '48px', height: '48px', color: '#8B5CF6'}}/>,
            title: "Interfaces Propias",
            description: "Desarrollamos interfaces de control intuitivas y personalizadas que te dan el control total de tu espacio.",
            modalTitle: "Control a tu Medida",
            modalDescription: "La experiencia de usuario lo es todo. Por eso creamos nuestra propia capa de software, una interfaz diseñada exclusivamente para ti, que unifica todos los sistemas bajo un control simple y elegante.",
            modalDetails: [
                "Una sola app para controlar iluminación, clima, audio/video, seguridad y más.",
                "Diseño gráfico personalizado que refleja la estética de tu hogar o marca.",
                "Creación de escenas complejas que se activan con un solo toque (ej: 'Modo Cine', 'Llegar a Casa').",
                "Interfaces adaptadas a diferentes usuarios: desde un control simple para niños hasta vistas avanzadas para administradores.",
                "Compatibilidad total con control por voz (Alexa, Google Assistant, Siri)."
            ]
        },
        {
            icon: <IconSupport style={{width: '48px', height: '48px', color: '#8B5CF6'}}/>,
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
            background: 'rgba(22, 22, 50, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            position: 'relative',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '30px 40px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(10, 10, 30, 0.6)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
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
            color: 'white',
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
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
            opacity: 0.8,
            marginBottom: '30px',
        },
        ctaButton: {
            background: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'background-color 0.3s ease, color 0.3s ease',
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
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '25px',
            borderRadius: '16px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        serviceTitle: {
            fontSize: '1.1rem',
            fontWeight: 600,
            margin: '10px 0 5px 0',
        },
        serviceDescription: {
            fontSize: '0.85rem',
            fontWeight: 300,
            opacity: 0.8,
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
            background: 'rgba(255, 255, 255, 0.08)',
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
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            transition: 'background-color 0.3s ease',
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
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            padding: '12px',
            color: 'white',
            fontSize: '0.9rem',
            fontFamily: "'Poppins', sans-serif",
        },
        formTextarea: {
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            padding: '12px',
            color: 'white',
            fontSize: '0.9rem',
            fontFamily: "'Poppins', sans-serif",
            minHeight: '120px',
            resize: 'vertical',
        },
        mobileMenuContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
        },
        mobileMenuHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        },
        mobileNav: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            flex: 1,
        },
        mobileNavLink: {
            textDecoration: 'none',
            color: 'white',
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
            border: '1px solid rgba(255, 255, 255, 0.15)',
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
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        combinedStatCard: {
            display: 'flex',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '20px 30px',
            width: '100%',
            maxWidth: '600px',
            background: 'rgba(255,255,255,0.04)',
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
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '0 15px',
        },
        statLabel: {
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '8px',
        },
        statValue: {
            fontSize: '1.8rem',
            fontWeight: 600,
            color: 'white',
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
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
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
            color: 'rgba(255, 255, 255, 0.9)',
        },
        securitySectionContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: '40px',
            width: '100%',
            maxWidth: '1000px',
            marginTop: '40px',
            textAlign: 'left',
        },
        securityIllustrationContainer: {
            flex: 1,
            minWidth: isMobile ? '100%' : '300px',
        },
        securityTextContainer: {
            flex: 1.5,
        },
        securityFeatureList: {
            listStyle: 'none',
            padding: 0,
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px',
        },
        securityFeatureItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.8)',
        },
        securityFeatureIcon: {
            color: '#8B5CF6',
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
            background: 'rgba(25, 25, 40, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            padding: '30px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '85vh',
            overflowY: 'auto',
            position: 'relative',
            color: 'white',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
        modalCloseButton: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
            zIndex: 10
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
        socialIconsContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '30px',
        },
        socialIconLink: {
            color: 'white',
            textDecoration: 'none',
            transition: 'transform 0.3s ease, color 0.3s ease',
            display: 'inline-block',
        },
        gallerySectionContainer: {
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        },
        gallerySectionTitle: {
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '15px',
            color: '#93C5FD',
        },
        galleryGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '10px',
        },
        galleryItem: {
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            cursor: 'pointer',
            aspectRatio: '1 / 1',
        },
        galleryItemImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        galleryItemOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        },
        galleryItemPlayIcon: {
            width: '32px',
            height: '32px',
            color: 'white',
        },
        galleryViewerOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        },
        galleryViewerContent: {
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        galleryViewerMedia: {
            maxWidth: '90%',
            maxHeight: '90%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
        },
        galleryViewerNavButton: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.8rem',
            transition: 'background-color 0.3s ease',
            backdropFilter: 'blur(5px)',
            zIndex: 10,
        },
        galleryViewerCloseButton: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            lineHeight: 1,
            transition: 'background-color 0.3s ease',
            zIndex: 10,
        },
        galleryViewerCounter: {
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '16px',
            fontSize: '0.8rem',
        },
        productSectionContainer: {
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        },
        productSectionTitle: {
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '15px',
            color: '#93C5FD',
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
        },
        productCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
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
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.5,
        },
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.currentTarget.ariaCurrent !== 'page') {
            e.currentTarget.style.opacity = '0.7';
        }
    };
    const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.opacity = '1';
    };

    const handleButtonMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.color = 'black';
    };
    const handleButtonMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = 'white';
    };
    
    const handleSliderNavMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    };
    const handleSliderNavMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    };

    const handleSliderNav = (direction: 'prev' | 'next') => {
        const slider = projectsRef.current;
        if (slider) {
            const { scrollLeft, scrollWidth, clientWidth } = slider;
            const scrollAmount = clientWidth / 2;

            if (direction === 'next') {
                if (Math.abs(scrollWidth - clientWidth - scrollLeft) < 1) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            } else {
                if (scrollLeft < 1) {
                    slider.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            }
        }
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

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    };

    const navItems = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contáctanos'];


    return (
        <main style={{...styles.mainContainer, padding: isMobile ? '0' : '2rem' }}>
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
            
            <section style={{...styles.glassCard, ...(isMobile && {borderRadius: 0, height: '100%', maxHeight: '100vh', width: '100%', border: 'none'})}} className="scrollable-card">
                <header style={{...styles.header, ...(isMobile && {padding: '20px'})}}>
                    <div style={{...styles.logo, ...(isMobile && {fontSize: '1.2rem'})}}>ioniq</div>
                    {isMobile ? (
                        <IconMenu style={{width: '28px', height: '28px', cursor: 'pointer'}} onClick={() => setIsMenuOpen(true)} />
                    ) : (
                        <nav style={styles.nav}>
                            {navItems.map(item => (
                                 <a
                                    key={item}
                                    href={`#${item}`}
                                    style={activeSection === item ? { ...styles.navLink, ...styles.activeNavLink } : styles.navLink}
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    onClick={(e) => handleNavClick(e, item)}
                                    aria-current={activeSection === item ? 'page' : undefined}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}
                </header>
                
                {isMobile && isMenuOpen && (
                    <div style={styles.mobileMenuContainer} className="mobile-menu-container">
                        <div style={styles.mobileMenuHeader}>
                            <div style={{...styles.logo, fontSize: '1.2rem'}}>ioniq</div>
                            <IconClose style={{width: '28px', height: '28px', cursor: 'pointer'}} onClick={() => setIsMenuOpen(false)} />
                        </div>
                        <nav style={styles.mobileNav}>
                            {navItems.map(item => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    style={styles.mobileNavLink}
                                    onClick={(e) => {
                                        handleNavClick(e, item);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}

                <div style={{...styles.contentContainer, ...(isMobile && {padding: '0 20px 20px 20px'})}}>
                    <div id="Inicio" ref={sectionRefs['Inicio']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                        <AnimatedText as="h2" text="DOMÓTICA & TECNOLOGÍA AVANZADA" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'}), paddingBottom: '10px', borderBottom: '2px solid rgba(255, 255, 255, 0.8)', marginBottom: '10px'}} />
                        <AnimatedText as="h1" text="Habitat Inteligente" style={{...styles.title, ...(isMobile && {fontSize: '2.5rem'})}} />
                        <AnimatedText as="p" text="Transformamos espacios ordinarios en ecosistemas inteligentes y personalizados. Vive el futuro, hoy." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                        <button
                            style={styles.ctaButton}
                            onMouseOver={handleButtonMouseOver}
                            onMouseOut={handleButtonMouseOut}
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
                            onMouseEnter={() => setHoveredStat('devices')}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <p style={styles.statLabel}>Dispositivos Conectados</p>
                            <p style={styles.statValue}>1,200+</p>
                        </div>
                        <div style={styles.statSeparator} />
                        <div
                            style={{
                                ...styles.statItem,
                                transform: hoveredStat === 'scenes' ? 'scale(1.05)' : (hoveredStat === 'devices' ? 'scale(0.95)' : 'scale(1)'),
                                opacity: hoveredStat === 'devices' ? 0.7 : 1,
                            }}
                            onMouseEnter={() => setHoveredStat('scenes')}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <p style={styles.statLabel}>Escenas Automatizadas</p>
                            <p style={styles.statValue}>50,000+</p>
                        </div>
                    </div>

                    <div id="Nosotros" ref={sectionRefs['Nosotros']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
                        <AnimatedText as="h2" text="Nuestra Filosofía" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                        <AnimatedText as="h1" text="INNOVACIÓN Y PERSONALIZACIÓN" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                        <AnimatedText as="p" text="En ioniq, no solo instalamos sistemas domóticos; creamos ecosistemas inteligentes a la medida de tu estilo de vida. Nuestra fortaleza es el desarrollo propio, garantizando soluciones exclusivas, una integración perfecta y una experiencia de usuario inigualable." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                    </div>

                    <div style={styles.domoticsSectionWrapper}>
                        <div style={styles.securitySectionContainer}>
                            <div style={styles.securityIllustrationContainer}>
                                <IllustrationDecentralized />
                            </div>
                            <div style={styles.securityTextContainer}>
                                <AnimatedText as="h1" text="Exclusividad y Desarrollo Propio" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'}), textAlign: 'left'}} />
                                <AnimatedText as="p" text="Nuestro mayor diferenciador es la capacidad de desarrollo in-house. No nos limitamos a integrar productos; creamos soluciones a medida que garantizan una experiencia única, cohesiva y perfectamente alineada con tu visión." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'}), textAlign: 'left', maxWidth: 'none'}} />
                                <ul style={styles.securityFeatureList}>
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

                    <div style={styles.domoticsSectionWrapper}>
                        <AnimatedText as="h1" text="Control Total, Experiencia Única" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                        <AnimatedText as="p" text="Más que productos, ofrecemos soluciones. Escuchamos tus necesidades y las transformamos en realidad con desarrollo propio, creando un entorno inteligente diseñado exclusivamente para tu máxima satisfacción." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                        
                        <div style={styles.featureGrid}>
                           {domoticsFeaturesData.map((feature, index) => (
                               <div key={index} style={styles.featureCard} 
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

                    <div id="Servicios" ref={sectionRefs['Servicios']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'})}}>
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
                                            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                                            opacity: servicesVisible ? 1 : 0,
                                            transform: servicesVisible ? (isHovered ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(20px)',
                                            transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.3s ease-out, background-color 0.3s ease-out`,
                                        }}
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
                                                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%), url(${project.image})`,
                                            }}
                                        >
                                            <div style={{ ...styles.projectColumnContent, opacity: isActive ? 1 : 0 }} id={`project-content-${index}`}>
                                                <h2 style={{...styles.projectTitle, fontSize: '1.2rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{project.title}</h2>
                                                <p style={{...styles.description, fontSize: '0.85rem', marginBottom: '15px', maxWidth: '100%', textAlign: 'left', textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{project.description}</p>
                                                <div style={{...styles.projectFeaturesContainer, marginBottom: '20px'}}>
                                                    {project.features.map((feature, fIndex) => (
                                                        <span key={fIndex} style={styles.projectFeatureTag}>{feature}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div style={{ ...styles.projectColumnTitleVertical, left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%) rotate(180deg)', opacity: isActive ? 0 : 0.8 }}>
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
                                                <img src={project.image} alt={project.title} style={styles.projectImage} />
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

                    <div id="Contáctanos" ref={sectionRefs['Contáctanos']} style={{...styles.section, ...(isMobile && {padding: '40px 10px', minHeight: 'auto'}), borderBottom: 'none'}}>
                        <AnimatedText as="h2" text="¿Listo para empezar?" style={{...styles.subtitle, ...(isMobile && {fontSize: '0.8rem'})}} />
                        <AnimatedText as="h1" text="Contáctanos" style={{...styles.sectionTitle, ...(isMobile && {fontSize: '2rem'})}} />
                        <AnimatedText as="p" text="Envíanos un mensaje y nuestro equipo se pondrá en contacto contigo para explorar cómo podemos transformar tu espacio." style={{...styles.description, ...(isMobile && {fontSize: '0.85rem'})}} />
                        <form style={styles.contactForm} onSubmit={handleFormSubmit}>
                            <input type="text" placeholder="Nombre" style={styles.formInput} required />
                            <input type="email" placeholder="Email" style={styles.formInput} required />
                            <textarea placeholder="Tu mensaje" style={styles.formTextarea} required></textarea>
                            <button
                                type="submit"
                                style={{...styles.ctaButton, width: '100%'}}
                                onMouseOver={handleButtonMouseOver}
                                onMouseOut={handleButtonMouseOut}
                            >
                                ENVIAR MENSAJE
                            </button>
                        </form>
                         <div style={styles.socialIconsContainer}>
                            <a href="#" style={styles.socialIconLink} aria-label="Instagram" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#E4405F';}} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'white';}}>
                                <IconInstagram style={{ width: '28px', height: '28px' }} />
                            </a>
                            <a href="#" style={styles.socialIconLink} aria-label="WhatsApp" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#25D366';}} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'white';}}>
                                <IconWhatsApp style={{ width: '28px', height: '28px' }} />
                            </a>
                            <a href="#" style={styles.socialIconLink} aria-label="X" onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.color = '#CCCCCC';}} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.color = 'white';}}>
                                <IconX style={{ width: '26px', height: '26px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            {selectedProject && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div style={styles.modalContent} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} onClick={() => setSelectedProject(null)} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'} aria-label="Cerrar detalles del proyecto">&times;</button>
                        <img src={selectedProject.image} alt={selectedProject.title} style={styles.modalImage}/>
                        <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                        <div className="project-details-content" dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
                        
                        <div style={styles.gallerySectionContainer}>
                            <h3 style={styles.gallerySectionTitle}>Galería del Proyecto</h3>
                            <div style={styles.galleryGrid}>
                                {selectedProject.gallery.map((item, index) => (
                                    <div 
                                        key={index} 
                                        style={styles.galleryItem}
                                        onClick={() => setGalleryViewer({ items: selectedProject.gallery, startIndex: index })}
                                        onMouseEnter={(e) => {
                                            const img = e.currentTarget.querySelector('img');
                                            if (img) img.style.transform = 'scale(1.1)';
                                            const overlay = e.currentTarget.querySelector('div[data-overlay]');
                                            if (overlay) (overlay as HTMLDivElement).style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            const img = e.currentTarget.querySelector('img');
                                            if (img) img.style.transform = 'scale(1)';
                                            const overlay = e.currentTarget.querySelector('div[data-overlay]');
                                            if (overlay) (overlay as HTMLDivElement).style.opacity = '0';
                                        }}
                                    >
                                        <img src={item.thumbnail} alt={`Galería ${selectedProject.title} ${index + 1}`} style={styles.galleryItemImage} />
                                        {item.type === 'video' && (
                                            <div data-overlay style={{...styles.galleryItemOverlay, opacity: 0}}>
                                                <IconPlay style={styles.galleryItemPlayIcon} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {galleryViewer && (
                <div style={styles.galleryViewerOverlay} className="gallery-viewer-overlay" onClick={() => setGalleryViewer(null)}>
                     <button 
                        style={{...styles.galleryViewerCloseButton, ...{':hover': {backgroundColor: 'rgba(255, 255, 255, 0.2)'}}}}
                        onClick={(e) => { e.stopPropagation(); setGalleryViewer(null); }} 
                        aria-label="Cerrar galería">&times;</button>

                    <button 
                        style={{...styles.galleryViewerNavButton, left: isMobile ? '5px' : '30px'}}
                        onClick={(e) => { e.stopPropagation(); handleGalleryNav('prev'); }} 
                        aria-label="Anterior">‹</button>

                    <div style={styles.galleryViewerContent} onClick={(e) => e.stopPropagation()}>
                        {galleryViewer.items[galleryViewer.startIndex].type === 'image' ? (
                            <img src={galleryViewer.items[galleryViewer.startIndex].src} style={styles.galleryViewerMedia} alt=""/>
                        ) : (
                            <video src={galleryViewer.items[galleryViewer.startIndex].src} style={styles.galleryViewerMedia} controls autoPlay loop/>
                        )}
                    </div>
                     <div style={styles.galleryViewerCounter}>
                        {galleryViewer.startIndex + 1} / {galleryViewer.items.length}
                    </div>

                    <button 
                        style={{...styles.galleryViewerNavButton, right: isMobile ? '5px' : '30px'}} 
                        onClick={(e) => { e.stopPropagation(); handleGalleryNav('next'); }}
                        aria-label="Siguiente">›</button>
                </div>
            )}

            {selectedFeature && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedFeature(null)}>
                    <div style={{...styles.modalContent, maxWidth: '700px'}} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} onClick={() => setSelectedFeature(null)} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'} aria-label="Cerrar detalles de la característica">&times;</button>
                        <img src={selectedFeature.modalImage} alt={selectedFeature.modalTitle} style={styles.modalImage}/>
                        <h2 style={styles.modalTitle}>{selectedFeature.modalTitle}</h2>
                        <p style={{...styles.description, maxWidth: 'none', textAlign: 'left', opacity: 0.9, marginBottom: 0}}>{selectedFeature.modalDescription}</p>
                    
                        {selectedFeature.products && selectedFeature.products.length > 0 && (
                            <div style={styles.productSectionContainer}>
                                <h3 style={styles.productSectionTitle}>Productos de Ejemplo</h3>
                                <div style={styles.productGrid}>
                                    {selectedFeature.products.map((product, index) => (
                                        <div key={index} style={styles.productCard}>
                                            <img src={product.image} alt={product.name} style={styles.productImage} />
                                            <div style={styles.productCardContent}>
                                                <h4 style={styles.productName}>{product.name}</h4>
                                                <p style={styles.productDescription}>{product.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {selectedService && (
                <div style={styles.modalOverlay} className="modal-overlay" onClick={() => setSelectedService(null)}>
                    <div style={{...styles.modalContent, maxWidth: '600px'}} className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} onClick={() => setSelectedService(null)} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'} aria-label="Cerrar detalles del servicio">&times;</button>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                            {selectedService.icon}
                            <h2 style={{...styles.modalTitle, marginBottom: 0, textAlign: 'center'}}>{selectedService.modalTitle}</h2>
                        </div>
                        <p style={{...styles.description, maxWidth: 'none', textAlign: 'center', opacity: 0.9, marginBottom: '20px'}}>{selectedService.modalDescription}</p>
                        
                        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {selectedService.modalDetails.map((detail, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#8B5CF6', marginTop: '3px' }}>
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </main>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);