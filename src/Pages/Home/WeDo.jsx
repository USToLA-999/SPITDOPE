import team from '../../assets/Lend-a-hand3.png'

const WeDo = () => {
  return (
    <div className="maincontainer relative wedo">
      <div className="container mx-auto pt-5 ">
        <div className="innerbox mt-5 w-full ">
          <div className="headlinerbox flex justify-center align-center mt-5">
            <h1 className="bebas-neue-regular  sm:text-6xl text-4xl">
              Lend a Hand
            </h1>
          </div>
          <div className="paralines  w-full flex sm:px-0 px-5 justify-start  sm:mt-16 mt-8  ">
            <div className="parabox sm:w-2/4 sm:pe-5 sm:px-10 ">
              <p className="bebas-neue-regular  text-5xl">
                Be the force to our emerging talent to travel the journey from ‘Passion’ to ‘Platform’
              </p>
            </div>
          </div>
          <div className="readmore mt-5 w-full sm:pe-0 sm:px-10 px-5  ">
            <p className='jersey-15-regular text-2xl underline '>Learn More  </p>
          </div>
        </div>
        <div className="mx-auto  imagecontainer sm:-mt-40 relative mt-5 ">
          <div className="full-image-box   mx-auto">
            <img src={team} alt="iamge" width={1000}  className='content-centerw-full mx-auto  strech' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDo