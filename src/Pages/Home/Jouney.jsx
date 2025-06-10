
import nextgen from '../../assets/nextgen.png'


const Jouney = () => {


  return (
    <div className="sub-containerbox jouney-con max-w-full">
            <div className="container mx-auto pt-5 pb-5 ">
                <div className="  grid lg:grid-cols-2  gap-8  justify-center  grid-cols-1   ">
                    <div className="content-box backbp whitespace-break-spaces mt-2 mb-2">
                        <div className="innercontentlinebox sm:w-5/6    lg:mx-auto md:mx-5 ">
                            <div className="headliner-box  sm:pe-0 sm:px-0 pe-5 px-5 mt-5 ">
                                <h1 className="bebas-neue-regular  sm:text-6xl text-4xl">
                                    Journey: spitDope se Beast Mode
                                </h1>
                            </div>
                            <div className="paraline-content mt-5 sm:pe-5 sm:px-0 pe-5 px-5 mx-auto mb-2">
                                <p className="bebas-neue-regular  text-2xl">
                                    A journey of relentless growth, from raw talent to unstoppable force. SpitDope marks the humble beginnings of creative expression, fueled by passion and authenticity. With dedication, hustle, and an unyielding drive, the transformation to "Beast Mode" reflects mastery, dominance, and an unshakable impact. It's a testament to ambition, evolution, and conquering limits.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mx-auto imagecontainer mt-5 mb-5 flex items-center">
                        <div className="full-image-box mx-auto mt-5  ">
                            <img  src={nextgen} alt="iamge" width={500} height={500} className='content-center' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Jouney