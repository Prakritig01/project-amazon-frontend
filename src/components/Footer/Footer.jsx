import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from './../../assets/amazon_logo.png';

const BackToTop = () => {
  const navigate = useNavigate();
  const  handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button onClick={handleBackToTop} className='top-btn  w-[100%] p-2 bg-gray-600 text-white'>
      Back ToTop Component
    </button>
  )
}


const Connect = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4  w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Brand Logo */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">Amazon.in</h2>
            <p className="text-sm mt-2"></p>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-sm hover:text-blue-400">FAQ</a></li>
              <li><a href="/returns" className="text-sm hover:text-blue-400">Returns</a></li>
              <li><a href="/shipping" className="text-sm hover:text-blue-400">Shipping Info</a></li>
              <li><a href="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-center text-gray-400">
            &copy; 2025 Amazon.in. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-8">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Bottom = () => {
  return (
    <div>
      
      <div className="flex justify-center h-auto bg-slate-800 py-8">
        <div className="flex flex-wrap justify-between w-3/4 text-white">
          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Get to Know Us</span>
            <span>About Amazon</span>
            <span>Careers</span>
            <span>Press Releases</span>
            <span>Amazon Science</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Connect with Us</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Make Money with Us</span>
            <span>Sell on Amazon</span>
            <span>Sell under Amazon Accelerator</span>
            <span>Protect and Build Your Brand</span>
            <span>Amazon Global Selling</span>
            <span>Supply to Amazon</span>
            <span>Become an Affiliate</span>
            <span>Fulfilment by Amazon</span>
            <span>Advertise Your Products</span>
            <span>Amazon Pay on Merchants</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Let Us Help You</span>
            <span>Your Account</span>
            <span>Returns Centre</span>
            <span>Recalls and Product Safety Alerts</span>
            <span>100% Purchase Protection</span>
            <span>Amazon App Download</span>
            <span>Help</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[10vh] bg-slate-800 border-t border-white gap-9">
        <span className="text-2xl font-bold text-white">
          <img src={logo} alt="Amazon Logo" className="h-6 inline" />
        </span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <BackToTop/>
      <Bottom/>
      <Connect/>
    </div>
  )
}

export default Footer
