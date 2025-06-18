import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import CancellationPolicy from "./CancellationPolicy"


const Cancellation = () => {
  return (
    <>
        <div className="">
            <Navbar />
        </div>
        <CancellationPolicy />
        <Footer />
    </>
  )
}

export default Cancellation