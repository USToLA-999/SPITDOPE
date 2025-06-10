// import nextgen from '../../assets/nextgen.png'
import cypher from '../../assets/cypher.png'

const FirstBar = () => {
  return (
    <div className="sub-containerbox tagbox">
        <div className="container mx-auto pt-5 pb-5">
        <div className=" grid lg:grid-cols-2  gap-8  justify-center items-center  grid-cols-1 ">
            <div className="mx-auto imagecontainer mt-5 mb-5">
                <div className="full-image-box mx-auto ">
                    <img src={cypher}  alt="iamge" width={500} height={500} className='content-center rounded-lg' />
                </div>
            </div>
            <div className="content-box whitespace-break-spaces sm:mt-10 mt-5 mb-5">
                <div className="innercontentlinebox mx-auto">
                    <div className="headliner-box  sm:pe-5 sm:px-5 px-2 ">
                        <h1 className="bebas-neue-regular  text-6xl">
                            Spitdope: home of delhi  hiphop
                        </h1>
                    </div>
                    <div className="paraline-content mt-5 sm:pe-5 sm:px-5 pe-5 px-5 mx-auto mb-2">
                        <p className="bebas-neue-regular  text-2xl">
                        Welcome to SpitDope, the ultimate destination for hip-hop culture in Delhi! We’re a community of passionate artists, producers, and fans dedicated to keeping the real sound of the city alive. From raw cyphers to sick beats, SpitDope is where fresh talent, bold voices, and the heartbeat of Delhi’s hip-hop scene collide. Whether you're an aspiring rapper, a beatmaker, or just a lover of the culture, SpitDope is your home to connect, create, and thrive in the world of hip-hop. Join us and let’s make some noise!
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FirstBar