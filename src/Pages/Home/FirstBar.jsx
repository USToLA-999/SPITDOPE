import { useEffect } from 'react';
import cypher from '../../assets/cypher.png';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const FirstBar = () => {
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const elements = gsap.utils.toArray('.animated-div');
            elements.forEach((el, index) => {
                gsap.fromTo(
                    el,
                    { x: index % 2 === 0 ? '-100vw' : '100vw', opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        });

        mm.add("(max-width: 1023px)", () => {
            const elements = gsap.utils.toArray('.animated-div');
            elements.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="sub-containerbox tagbox overflow-x-hidden">
            <div className="container mx-auto pt-5 pb-5">
                <div className="grid lg:grid-cols-2 gap-8 justify-center items-center grid-cols-1">
                    {/* Left Image */}
                    <div className="mx-auto imagecontainer mt-5 mb-5 w-full flex justify-center">
                        <div className="full-image-box w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-2 sm:px-0 animated-div">
                            <img
                                src={cypher}
                                alt="cypher"
                                width={500}
                                height={500}
                                className="content-center rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="content-box whitespace-break-spaces sm:mt-10 mt-5 mb-5 animated-div">
                        <div className="innercontentlinebox mx-auto">
                            <div className="headliner-box sm:pe-5 sm:px-5 px-2">
                                <h1 className="orbitron font-bold lg:text-start md:text-center sm:text-center text-5xl">
                                    Spitdope: <span className="spanmain">home of delhi hiphop</span>
                                </h1>
                            </div>
                            <div className="paraline-content mt-5 sm:pe-5 sm:px-5 pe-5 px-5 mx-auto mb-2">
                                <p className="poppins-regular lg:text-start md:text-center sm:text-center text-xl">
                                    Welcome to SpitDope, the ultimate destination for hip-hop culture in Delhi! We’re a community of passionate artists, producers, and fans dedicated to keeping the real sound of the city alive. From raw cyphers to sick beats, SpitDope is where fresh talent, bold voices, and the heartbeat of Delhi’s hip-hop scene collide. Whether you're an aspiring rapper, a beatmaker, or just a lover of the culture, SpitDope is your home to connect, create, and thrive in the world of hip-hop. Join us and let’s make some noise!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstBar;
