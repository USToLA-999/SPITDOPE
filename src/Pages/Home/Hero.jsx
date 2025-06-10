import banner from  '../../assets/bannervideo.mp4'


const Hero = () => {
    return (
        <div className="main-container-box hero-box">
            <div className="container pt-5 pb-5 mx-auto ">
                <div className="socials-box-corner h-full w-full">
                    <video autoPlay muted loop >
                        <source src={banner} type="video/mp4" />
                    </video>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero