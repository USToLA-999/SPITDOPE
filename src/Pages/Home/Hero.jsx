


const Hero = () => {
    return (
        <div className="main-container-box hero-box">
            <div className="container  mx-auto ">
                <div className="socials-box-corner sm:flex hidden h-full w-full">
                    <video autoPlay muted loop playsInline className="" >
                        <source src='https://res.cloudinary.com/dz1dqwf2y/video/upload/v1749622257/xuxp6zylbfsytosgtx7t.mp4' type="video/mp4" />
                    </video>
                    
                </div>
                <div className="socials-box-corner sm:hidden flex h-full w-full">
                    <video autoPlay muted loop playsInline className="" >
                        <source src='https://res.cloudinary.com/dz1dqwf2y/video/upload/v1749626394/bannerphone_1_hq6snd.mp4' type="video/mp4" />
                    </video>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero