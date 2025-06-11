
import nextgen from '../../assets/nextgen.png'


const Jouney = () => {


  return (
    <div className="sub-containerbox  jouney-con max-w-full">
            <div className="container mx-auto pt-5 pb-5 ">
                <div className="  grid lg:grid-cols-2  gap-8  justify-center  grid-cols-1   ">
                    <div className="content-box whitespace-break-spaces sm:mt-10 mt-5 mb-5">
                        <div className="innercontentlinebox mx-auto backbp">
                            <div className="headliner-box  sm:pe-5 sm:px-5 px-2 ">
                                <h1 className="bebas-neue-regular lg:text-start md:text-center sm:text-center  text-6xl">
                                    Journey: spitDope se Beast Mode
                                </h1>
                            </div>
                            <div className="paraline-content mt-5 sm:pe-5 sm:px-5 pe-5 px-5 mx-auto mb-2">
                                <p className="bebas-neue-regular lg:text-start md:text-center sm:text-center text-2xl">
                                   A journey of relentless growth, from raw talent to unstoppable force. SpitDope marks the humble beginnings of creative expression, fueled by passion and authenticity. With dedication, hustle, and an unyielding drive, the transformation to "Beast Mode" reflects mastery, dominance, and an unshakable impact. It's a testament to ambition, evolution, and conquering limits.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="mx-auto imagecontainer mt-5 mb-5 w-full flex justify-center">
                        <div className="full-image-box w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto px-2 sm:px-0 flex items-center">
                            <img  src={nextgen} alt="iamge" width={500} height={500} className='content-center rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Jouney