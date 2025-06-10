import videobaner from '../../assets/bannervideo.mp4'

const Hero = () => {
    return (
        <div className="main-container-box hero-box">
            <div className="container pt-5 pb-5 mx-auto ">
                <div className="socials-box-corner h-full w-full">
                    <video src={videobaner} muted loop autoPlay></video>
                </div>
            </div>
        </div>
    )
}

export default Hero