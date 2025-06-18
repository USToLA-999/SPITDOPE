/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DSC from '../../assets/DSC.jpeg';
import nextgenparty from '../../assets/nextgenparty.png';
import seedhemaut from '../../assets/seedhemaut.png';

gsap.registerPlugin(ScrollTrigger);

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${className} transition-transform duration-300 ease-out`}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ src, title }) => {
    return (
        <div className="relative mb-5 w-full overflow-hidden rounded-lg">
            <img
                src={src}
                alt={title}
                className="rounded-lg"
                width={300}
                height={300}
            />
            <div className="absolute bottom-2 w-full py-4 flex justify-center items-center">
                <h1 className="orbitron font-bold text-2xl text-center" style={{ color: '#FFF' }}>
                    {title}
                </h1>
            </div>
        </div>
    );
};

const Event = () => {
    useEffect(() => {
        const elements = gsap.utils.toArray('.event-animated');

        gsap.fromTo(
            elements,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.container-event',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <div className="container-event tagbox py-10 px-4 min-h-full">
            <div className="container mx-auto">
                <div className="w-full h-full">
                    {/* Headline */}
                    <div className="text-center">
                        <h1 className="orbitron font-bold text-4xl sm:text-5xl">
                            Spit Events: <span className="text-purple-800">Karname</span>
                        </h1>
                    </div>

                    {/* Responsive Card Grid */}
                    <div className="flex sm:flex-row md:flex-row flex-col justify-center items-center w-full gap-8 mt-10">
                        <BentoTilt className="mx-auto event-animated">
                            <BentoCard src={DSC} title="SDI: Delhi 101 " />
                        </BentoTilt>
                        <BentoTilt className="mx-auto event-animated">
                            <BentoCard src={nextgenparty} title="SDI: NEXT GEN." />
                        </BentoTilt>
                        <BentoTilt className="mx-auto event-animated">
                            <BentoCard src={seedhemaut} title="SDI: Block Party" />
                        </BentoTilt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
