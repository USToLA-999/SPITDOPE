import { PiMicrophoneStageDuotone } from 'react-icons/pi'
import spitdope from '../../assets/spitdope.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { BiWater } from 'react-icons/bi';

import { BsMusicNoteList } from 'react-icons/bs';
import { History } from './History';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Herobar = () => {
    const timelinerRef= useRef([]);

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
                            start: 'top 80%',
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
                    { x: 0, opacity: 0, scale: 0.9 },
                    {
                        x: 0,
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

        return () => mm.revert(); // Cleanup
    }, []);

    


    return (
        <div className="maincontainer overflow-hidden pt-5 ">
            <div className="container mx-auto">
                <div className="innerconatiner mx-auto">
                    <div className="headlinerbox mt-8 mb-5 mx-auto overflow-x-hidden">
                        <div className="contentbox text-center overflow-x-hidden animated-div " ref={timelinerRef}>
                            <h1 className='bebas-neue-regular  text-6xl'>What is Spitdope: <span className='span'>parichay</span></h1>
                        </div>
                        <div className="paralinebox mt-5 text-center overflow-x-hidden animated-div">
                            <p className='bebas-neue-regular  text-2xl'>Welcome to Spitdope, the home of raw talent, lyrical finesse, and unfiltered expression. Founded in 2014 by hip-hop visionaries MC Kode, Encore, and MC Snub, Spitdope was born out of a shared love for the culture, the craft, and the community that drives hip-hop forward.</p>
                        </div>
                        <div className="missionbox mt-8 overflow-x-hidden animated-div">
                            <p className="bebas-neue-regular text-6xl text-center ">
                                Our Mission
                            </p>
                        </div>
                        <div className="paralinebox mt-5 text-center overflow-x-hidden animated-div ">
                            <p className='bebas-neue-regular  text-2xl'>At Spitdope, we believe in creating a platform where voices can be heard, stories can be shared, and creativity knows no bounds. Our mission is to empower artists, uplift the hip-hop community, and provide a space for underground and mainstream talents alike to shine. We are dedicated to keeping the essence of hip-hop alive while pushing the culture into the future.</p>
                        </div>
                        <div className="missionbox mt-8 animated-div overflow-x-hidden">
                            <p className="bebas-neue-regular text-6xl text-center ">
                                What We Do
                            </p>
                        </div>
                        <div className="paralinebox mt-5 text-centeroverflow-x-hidden ">
                            <div className="firtspoint overflow-x-hidden flex items-center text-center justify-center gap-4 animated-div">
                                <p className='text-2xl '><PiMicrophoneStageDuotone /></p>
                                <p className='bebas-neue-regular  text-2xl'><span className="span"><b>Artists and MCs:</b></span> A place where wordsmiths can share their bars, battle it out, and collaborate.</p>
                            </div>
                            <div className="firtspoint overflow-x-hidden mt-4 flex items-center text-center justify-center animated-div gap-4">
                                <p className='text-2xl '><PiMicrophoneStageDuotone /></p>
                                <p className='bebas-neue-regular  text-2xl'><span className="span"><b>Music and Media:</b></span> Showcasing the best of hip-hop—from underground anthems to global hits.</p>
                            </div>
                            <div className="firtspoint overflow-x-hidden mt-4 flex items-center text-center justify-center animated-div gap-4">
                                <p className='text-2xl '><PiMicrophoneStageDuotone /></p>
                                <p className='bebas-neue-regular  text-2xl'><span className="span"><b>Events and Cyphers:</b></span> Organizing battles, open mics, and workshops that bring the community together.</p>
                            </div>
                            <div className="firtspoint overflow-x-hidden mt-4 flex items-center text-center animated-div justify-center gap-4">
                                <p className='text-2xl '><PiMicrophoneStageDuotone /></p>
                                <p className='bebas-neue-regular  text-2xl'><span className="span"><b>Culture and Inspiration:</b></span> Celebrating the roots of hip-hop while embracing its evolution.</p>
                            </div>
                        </div>
                        <div className="missionbox mt-8 overflow-x-hidden animated-div">
                            <p className="bebas-neue-regular text-6xl text-center ">
                                Why SpitDope
                            </p>
                        </div>
                        <div className="paralinebox mt-5 overflow-x-hidden text-center animated-div ">
                            <p className='bebas-neue-regular  text-2xl'>We’re more than just a website; we’re a movement. Since our inception, Spitdope has been at the forefront of fostering hip-hop talent and bringing people together through music and art. Whether you're an aspiring rapper, a seasoned lyricist, or simply a fan of the culture, Spitdope is your go-to destination.</p>
                        </div>
                        <div className="missionbox mt-8 overflow-x-hidden animated-div">
                            <p className="bebas-neue-regular text-6xl text-center ">
                                Join the Movement
                            </p>
                        </div>
                        <div className="paralinebox mt-5 overflow-x-hidden text-center animated-div ">
                            <p className='bebas-neue-regular  text-2xl'>Hip-hop isn’t just music—it’s a lifestyle, a voice, and a revolution. At Spitdope, we invite you to be part of this journey. Let’s continue to elevate the art form, one rhyme at a time.</p>
                            <p className='bebas-neue-regular mt-2  text-2xl'>Stay connected. Stay Spitdope.</p>
                            <img src={spitdope} alt="" width={100} height={100} className='text-center mt-5 mx-auto' />
                        </div>
                    </div>
                </div>
                <div className="-mt-6">
                    <div className="timelinebox mx-auto">
                        {History.map((history, index) => (
                            <div className="" key={index}>
                                <VerticalTimeline lineColor='purple' >
                                    <VerticalTimelineElement
                                        
                                        className="vertical-timeline-element--work  bebas-neue-regular"
                                        contentStyle={{ color: 'black' }}
                                        contentArrowStyle={{ borderRight: '7px solid rgb(189, 50, 227)' }}
                                        date={history.Date}
                                        iconStyle={{ background: 'rgb(189, 50, 227)', color: '#fff' }}
                                        icon={<BsMusicNoteList />}
                                        dateClassName='text-black bebas-neue-regular '
                                        position={index % 2 ? "right" : "left "}
                                    >
                                        <h3 className="vertical-timeline-element-title bebas-neue-regular text-3xl">{history.name}</h3>
                                        <h4 className="vertical-timeline-element-subtitle bebas-neue-regular">Delhi, Hauj khaz</h4>
                                        <p className='bebas-neue-regular'>
                                            {history.Desc}
                                        </p>
                                    </VerticalTimelineElement>

                                </VerticalTimeline>


                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Herobar