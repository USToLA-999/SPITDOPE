import { IoMdMicrophone } from 'react-icons/io';

const CancellationPolicy = () => {
  return (
    <div className="maindivcontainer maincontainer pt-5 pb-5">
      <div className="container mx-auto">
        <div className="innertermsbox mt-10">
          <div className="headline text-center">
            <h1 className="text-5xl jersey-15-regular">
              <span className="span">Cancellation Policy</span>
            </h1>
          </div>
        </div>

        <div className="alltermsbox pt-5 mx-auto w-11/12">
          <div className="reciewbox mt-10 font-bold">Effective Date: 15/June/2025</div>

          <div className="paraboxlinesbox mt-5 poppins-regular">
            <p>
              At SpitDope, we understand that plans can change. This Cancellation Policy outlines the terms and conditions under which orders can be canceled. Please review it carefully before placing your order.
            </p>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>1. Cancellation Window</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                Orders for physical merchandise can be canceled within <strong>6 hours</strong> of placing the order. After this window, the order is processed and shipped, and cancellation is no longer possible.
              </p>
              <p className="mt-2">
                For digital products (music, downloads, content access), cancellation is not applicable once the order is confirmed.
              </p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>2. How to Cancel an Order</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>To cancel your order within the allowed time frame, please email us at:</p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone size={20} color="purple" />📧 <strong>SpitDope@gmail.com</strong></li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone size={20} color="purple" />Include your <strong>Order ID</strong> and the reason for cancellation</li>
              </ul>
              <p className="mt-4">We will confirm the cancellation via email if the request is eligible.</p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>3. Cancellation After Dispatch</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                Once your order is shipped, it cannot be canceled. In such cases, you may initiate a return (if eligible) after receiving the product as per our Return/Refund Policy.
              </p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>4. Order Rejection at Delivery</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                If you refuse to accept the delivery of a confirmed order without prior cancellation, a cancellation charge may be levied to cover shipping and handling costs.
              </p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>5. Exceptions</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>Cancellations are not allowed for:</p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone size={20} color="purple" />Customized or pre-ordered items</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone size={20} color="purple" />Limited edition merchandise</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone size={20} color="purple" />Digital downloads</li>
              </ul>
              <p className="mt-4">These products are made-to-order or delivered instantly and thus not eligible for cancellation.</p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>6. Cancellation Charges</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>
                We do not charge any cancellation fees if the request is made within the allowed window. However, orders canceled after shipment may incur charges related to logistics and processing.
              </p>
            </div>
          </div>

          <div className="section mt-5">
            <div className="head jersey-15-regular text-2xl">
              <h1>7. Contact Us</h1>
            </div>
            <div className="paraliners poppins-regular">
              <p>If you have any questions about your order or need help with a cancellation request, contact us:</p>
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

export default CancellationPolicy;
