/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import nextgen from '../../assets/nextgen.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Jouney = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const elements = gsap.utils.toArray('.journey-animated');
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
      const elements = gsap.utils.toArray('.journey-animated');
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
    <div className="sub-containerbox jouney-con max-w-full overflow-x-hidden">
      <div className="container mx-auto pt-5 pb-5">
        <div className="grid lg:grid-cols-2 gap-8 justify-center grid-cols-1">
          {/* Left content */}
          <div className="content-box whitespace-break-spaces sm:mt-10 mt-5 mb-5 journey-animated">
            <div className="innercontentlinebox mx-auto backbp">
              <div className="headliner-box sm:pe-5 sm:px-5 px-2">
                <h1 className="orbitron font-bold lg:text-start md:text-center sm:text-center text-5xl">
                  Journey: <span className="spanmain">SpitDope se Beast Mode</span>
                </h1>
              </div>
              <div className="paraline-content mt-5 sm:pe-5 sm:px-5 pe-5 px-5 mx-auto mb-2">
                <p className="poppins-regular lg:text-start md:text-center sm:text-center text-xl">
                  A journey of relentless growth, from raw talent to unstoppable force. SpitDope marks the humble beginnings of creative expression, fueled by passion and authenticity. With dedication, hustle, and an unyielding drive, the transformation to "Beast Mode" reflects mastery, dominance, and an unshakable impact. It's a testament to ambition, evolution, and conquering limits.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="mx-auto imagecontainer mt-5 mb-5 w-full flex justify-center journey-animated">
            <div className="full-image-box w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-2 sm:px-0 flex items-center">
              <img src={nextgen} alt="nextgen" width={500} height={500} className="content-center rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jouney;
