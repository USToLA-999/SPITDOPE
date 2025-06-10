import { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const ComingSoon = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind sm: breakpoint
        };
        handleResize(); // Check on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <main>
            <div className="main-container overflow-hidden pt-2 backgroundbox">
                <div className="container mx-auto">
                    <div className="innerbox flex flex-col justify-center items-center">
                        <div className="titlebar mb-5">
                            <h3 className='jersey-15-regular text-4xl sm:text-6xl'>LAUNCHING SOON </h3>
                        </div>
                        <FlipClockCountdown
                            className="flip-clock"
                            to={new Date().getTime() + 98 * 24 * 3600 * 1000 + 5000}
                            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                            labelStyle={{
                                fontSize: isMobile ? 10 : 14,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                            }}
                            digitBlockStyle={{
                                width: isMobile ? 30 : 50,
                                height: isMobile ? 45 : 70,
                                fontSize: isMobile ? 20 : 36,
                                background: '#1F2937', // dark grey background
                                borderRadius: '6px',
                            }}
                            dividerStyle={{
                                color: 'white',
                                height: isMobile ? 1 : 2,
                            }}
                            separatorStyle={{
                                color: 'red',
                                size: '6px',
                            }}
                            duration={0.5}
                            renderOnServer={false}
                            renderMap={true}
                        >
                            Finished
                        </FlipClockCountdown>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ComingSoon