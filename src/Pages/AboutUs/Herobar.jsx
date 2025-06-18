/* eslint-disable react/no-unescaped-entities */
import { PiMicrophoneStageDuotone } from 'react-icons/pi'
import spitdope from '../../assets/spitdope.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsMusicNoteList } from 'react-icons/bs';
import { History } from './History';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Herobar = () => {
    const timelinerRef = useRef([]);

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

        return () => mm.revert();
    }, []);

    return (
        <div className="maincontainer overflow-x-hidden pt-5">
            <div className="container mx-auto px-4">
                <div className="innerconatiner mx-auto max-w-screen-xl">
                    <div className="headlinerbox mt-8 mb-5 mx-auto">
                        <div className="contentbox text-center animated-div" ref={timelinerRef}>
                            <h1 className='orbitron font-bold text-5xl'>What is Spitdope: <span className='span'>parichay</span></h1>
                        </div>
                        <div className="paralinebox mt-5 text-center animated-div">
                            <p className='poppins-regular text-lg'>
                               Welcome to Spitdope, the home of raw talent, lyrical finesse, and unfiltered expression. Founded in 2014 by hip-hop visionaries MC Kode, Encore, and MC Snub, Spitdope was born out of a shared love for the culture, the craft, and the community that drives hip-hop forward.
                            </p>
                        </div>
                        <div className="missionbox mt-8 animated-div">
                            <p className="orbitron font-bold text-5xl text-center">Our Mission</p>
                        </div>
                        <div className="paralinebox mt-5 text-center animated-div">
                            <p className='poppins-regular text-lg'>
                               At Spitdope, we believe in creating a platform where voices can be heard, stories can be shared, and creativity knows no bounds. Our mission is to empower artists, uplift the hip-hop community, and provide a space for underground and mainstream talents alike to shine. We are dedicated to keeping the essence of hip-hop alive while pushing the culture into the future.
                            </p>
                        </div>
                        <div className="missionbox mt-8 animated-div">
                            <p className="orbitron font-bold text-5xl text-center">What We Do</p>
                        </div>
                        <div className="paralinebox mt-5 text-center">
                            {[
                                "Artists and MCs:  A place where wordsmiths can share their bars, battle it out, and collaborate.",
                                "Music and Media:  Showcasing the best of hip-hop—from underground anthems to global hits.",
                                "Events and Cyphers: Organizing battles, open mics, and workshops that bring the community together.",
                                "Culture and Inspiration: Celebrating the roots of hip-hop while embracing its evolution."
                            ].map((text, i) => (
                                <div key={i} className="firtspoint mt-4 flex items-center justify-center gap-4 animated-div">
                                    <p className='text-2xl'><PiMicrophoneStageDuotone /></p>
                                    <p className='poppins-regular text-lg'><span className="span"><b>{text.split(":")[0]}:</b></span>{text.split(":")[1]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="missionbox mt-8 animated-div">
                            <p className="orbitron font-bold text-5xl text-center">Why SpitDope</p>
                        </div>
                        <div className="paralinebox mt-5 text-center animated-div">
                            <p className='poppins-regular text-lg'>
                                We’re more than just a website; we’re a movement. Since our inception, Spitdope has been at the forefront of fostering hip-hop talent and bringing people together through music and art. Whether you're an aspiring rapper, a seasoned lyricist, or simply a fan of the culture, Spitdope is your go-to destination.
                            </p>
                        </div>
                        <div className="missionbox mt-8 animated-div">
                            <p className="orbitron font-bold text-5xl text-center">Join the Movement</p>
                        </div>
                        <div className="paralinebox mt-5 text-center animated-div">
                            <p className='poppins-regular text-lg'>Hip-hop isn’t just music—it’s a lifestyle, a voice, and a revolution. At Spitdope, we invite you to be part of this journey. Let’s continue to elevate the art form, one rhyme at a time</p>
                            <p className='poppins-regular text-lg mt-2 '>Stay connected. Stay Spitdope.</p>
                            <img src={spitdope} alt="" width={100} height={100} className='mx-auto mt-5' />
                        </div>
                    </div>
                </div>

                <div className="timelinebox mx-auto px-2 mt-12">
                    <VerticalTimeline lineColor='purple'>
                        {History.map((history, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work orbitron"
                                contentStyle={{ color: 'black' }}
                                contentArrowStyle={{ borderRight: '7px solid rgb(189, 50, 227)' }}
                                date={history.Date}
                                iconStyle={{ background: 'rgb(189, 50, 227)', color: '#fff' }}
                                icon={<BsMusicNoteList />}
                                dateClassName='text-black orbitron'
                                position={index % 2 === 0 ? 'left' : 'right'}
                            >
                                <h3 className="vertical-timeline-element-title orbitron text-3xl">{history.name}</h3>
                                <h4 className="vertical-timeline-element-subtitle poppins-regular">Delhi, Hauj khaz</h4>
                                <p className='poppins-regular'>{history.Desc}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Herobar;
