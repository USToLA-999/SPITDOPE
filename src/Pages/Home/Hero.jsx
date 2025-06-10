
import image from '../../assets/group.png'

const Hero = () => {
    return (
        <div className="main-container-box hero-box">
            <div className="container pt-5 pb-5 mx-auto ">
                <div className="socials-box-corner h-full w-full">
                    {/* <video src={videobaner} muted loop autoPlay></video> */}
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero