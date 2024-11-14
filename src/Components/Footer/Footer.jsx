
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer class="bg-blue-950 text-white py-10 px-4 md:px-20">
    <div class="container mx-auto flex flex-col md:flex-row justify-between">
      {/* <!-- Logo Section --> */}
      <div class="mb-8 md:mb-0">
        <img src="image.png" alt="Logo" />
        {/* <p class="text-gray-400">Your Company Tagline Here</p> */}
      </div>
  
      {/* <!-- Quick Links Section --> */}
      <div class="mb-8 md:mb-0">
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#about" class="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#services" class="text-gray-400 hover:text-white">Submissions</a></li>
          <li><a href="#blog" class="text-gray-400 hover:text-white">Registrations</a></li>
          <li><a href="#home" class="text-gray-400 hover:text-white">Accomodation</a></li>
          <li><a href="#contact" class="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
  
      {/* <!-- Social Media Icons Section --> */}
      <div>
        <h3 class="text-4xl font-semibold mb-4">ICETCT&nbsp;&nbsp;2025</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
          <FaFacebookF size={24} />

          </a>
          <a href="#" class="text-gray-400 hover:text-white">
          <FaTwitter size={24} />

          </a>
          <a href="#" class="text-gray-400 hover:text-white">
          <FaInstagram size={24} />

          </a>
          <a href="#" class="text-gray-400 hover:text-white">
          <FaLinkedinIn size={24} />

          </a>
        </div>
      </div>
    </div>
  
    {/* <!-- Copyright Section --> */}
    <hr className="mt-14"></hr>
    <div class="text-center text-gray-500 mt-10">
      &copy; {new Date().getFullYear()}  KIET Group Of Institutions,Delhi NCR,Ghaziabad. <br></br>All Rights Reserved.
    </div>
  </footer>
  
  )
}
