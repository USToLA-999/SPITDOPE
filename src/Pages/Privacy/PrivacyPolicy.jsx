/* eslint-disable react/no-unescaped-entities */
import { IoMdMicrophone } from 'react-icons/io';

const PrivacyPolicy = () => {
  return (
    <div className="maindivcontainer maincontainer pt-5 pb-5">
      <div className="container mx-auto">
        <div className="innertermsbox mt-10">
          <div className="headline text-center">
            <h1 className='text-5xl font-bold'><span className="span">Privacy Policy</span></h1>
          </div>
        </div>

        <div className="alltermsbox pt-5 mx-auto w-11/12 max-auto">
          <div className="reciewbox mt-10 font-bold">
            Effective Date: 15/June/2025
          </div>

          <div className="paraboxlinesbox mt-5">
            <p>At SpitDope ("we", "us", "our"), your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.spitdope.in, engage with our community, or purchase our seasonal merchandise.</p>
            <p>By using our website, you consent to the practices described in this policy.</p>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>1. Information We Collect</h1>
            </div>
            <div className="paraliners">
              <p>We may collect personal and non-personal information such as:</p>
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Name, email address, shipping address, and payment details.</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Device, browser, IP address, and usage data.</li>
              </ul>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>2. How We Use Your Information</h1>
            </div>
            <div className="paraliners">
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />To process and ship orders.</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Send transactional and promotional emails (if opted-in).</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Improve website performance and user experience.</li>
              </ul>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>3. Cookies and Tracking</h1>
            </div>
            <div className="paraliners">
              <p>We use cookies and similar technologies to track user activity. You can disable cookies through your browser, but this may affect functionality.</p>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>4. Data Sharing</h1>
            </div>
            <div className="paraliners">
              <p>We do not sell or rent your personal data. Data may be shared with third-party processors like payment gateways and shipping providers under strict confidentiality agreements.</p>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>5. Data Security</h1>
            </div>
            <div className="paraliners">
              <p>We use secure servers, encryption, and access controls to protect your personal data. However, no system is 100% secure.</p>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>6. Your Rights</h1>
            </div>
            <div className="paraliners">
              <ul className="mx-5">
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Request access or deletion of your data.</li>
                <li className="mt-2 flex gap-1 items-center"><IoMdMicrophone color="purple" size={20} />Withdraw consent for marketing communications.</li>
              </ul>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>7. Children's Privacy</h1>
            </div>
            <div className="paraliners">
              <p>Our website is not intended for users under 13. We do not knowingly collect data from minors.</p>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>8. Changes to This Policy</h1>
            </div>
            <div className="paraliners">
              <p>We may update this Privacy Policy from time to time. Changes are effective once posted on this page with the updated effective date.</p>
            </div>
          </div>

          <div className="privacy-section mt-5">
            <div className="head font-bold">
              <h1>9. Contact Us</h1>
            </div>
            <div className="paraliners">
              <p>For any questions or concerns regarding this policy:</p>
              <p>📧 Email: spitdope@gmail.com</p>
              <p>🌐 Website: www.spitdope.in</p>
              <p>📱 Instagram: @SpitDopeInc</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;