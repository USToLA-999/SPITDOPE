import { IoMdMicrophone  } from 'react-icons/io';

const RefundPolicy = () => {
  return (
    <div className="maindivcontainer maincontainer pt-5 pb-5">
      <div className="container mx-auto">
        <div className="innertermsbox mt-10">
          <div className="headline text-center">
            <h1 className="text-6xl   jersey-15-regular">
              <span className="span">Refund Policy</span>
            </h1>
          </div>
        </div>

        <div className="alltermsbox pt-5 mx-auto w-11/12">
          <div className="reciewbox mt-10 font-bold poppins-regular">Effective Date: 15/June/2025</div>

          <div className="paraboxlinesbox mt-5 poppins-regular">
            <p>
              At SpitDope, we strive to provide you with high-quality merchandise and a smooth shopping experience. Please read our refund policy carefully before making any purchases.
            </p>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>1. No Refunds on Digital Products</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                All digital products (e.g., music downloads, digital artwork, or content access) are non-refundable. Once a digital purchase is made, it is considered final and cannot be returned or refunded under any circumstances.
              </p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>2. Refunds on Physical Merchandise</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                Refunds on physical items (e.g., t-shirts, hoodies, accessories) will only be processed under the following conditions:
              </p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Item is damaged or defective upon arrival.</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Wrong item or size shipped by us.</li>
              </ul>
              <p className="mt-4">Refund requests must be made within <strong>7 days</strong> of receiving your order.</p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>3. How to Request a Refund</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>To request a refund, email us at <strong>SpitDope@gmail.com</strong> with:</p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Order ID and date of purchase</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Clear pictures of the damaged/incorrect item</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Brief description of the issue</li>
              </ul>
              <p className="mt-4">Once approved, we will initiate your refund or send a replacement as per your choice.</p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>4. Non-Refundable Conditions</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>We do not offer refunds under the following circumstances:</p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Change of mind after purchase</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Wrong size ordered by customer</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone className="min-w-[20px] mt-1 flex-shrink-0 " size={20} color="purple" />Late refund requests (after 7 days of delivery)</li>
              </ul>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>5. Refund Processing Time</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>Once your refund is approved, it will be processed within <strong>5-7 business days</strong>. Refunds will be issued to the original payment method used during the purchase.</p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head  jersey-15-regular text-2xl">
              <h1>6. Contact Us</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>If you have any questions regarding your order or this refund policy, feel free to reach out to us:</p>
              <p>📧 Email: SpitDope@gmail.com</p>
              <p>🌐 Website: www.spitdope.in</p>
              <p>📱 Instagram: @SpitDopeInc</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
