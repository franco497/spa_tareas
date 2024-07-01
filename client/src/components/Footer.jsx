import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {

  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#5D9C59] text-yellow-50 transition">
      <div className="relative top-0 left-0 w-[100%] overflow-hidden">
        <svg data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="relative block h-[600px] fill-[#b9f8f4]"></path>
        </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-pink-500">Footer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
              vel ipsa reiciendis corporis similique dolor earum aut itaque.
            </p>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
              Creativity
            </li>
            <li className="my-4 list-none">Website Guidlines & Ideas</li>
            <li className="my-4 list-none">Tips & Tricks</li>
            <li className="my-4 list-none">photography</li>
          </div>

          <div>
            <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
              Creativity</li>
            <li className="my-4 list-none">Guidlines & Ideas</li>
            <li className="my-4 list-none">Tips & Tricks</li>
            <li className="my-4 list-none">photography</li>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-pink-500 py-2 uppercase">Contact</h2>
            <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
            <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
            <div className="flex space-x-4">
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                <FaGithub />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                <FaLinkedinIn />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                <FaTwitter />
              </a>
              <a
                className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-full flex items-center justify-center mb-5">
            <form className="w-96 relative">
              <input type="email" placeholder=""
                className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none 
                            focus:border border-pink-800" />
              <button
                type="Submit"
                className="bg-pink-400 px-8 py-2 rounded-full text-white
                                 absolute top-0 right-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <h6 className="text-center">&copy; Copyright © 2024 - All right reserved by UnMomentum {Year}</h6>
      </div>
    </footer>
  );
};

export default Footer;

/*
<div class="custom-shape-divider-top-1719722421">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>

--
.custom-shape-divider-top-1719722421 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1719722421 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
}

.custom-shape-divider-top-1719722421 .shape-fill {
    fill: #B0EC8A;
}

// For tablet devices
@media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-top-1719722421 svg {
        width: calc(100% + 1.3px);
        height: 88px;
    }
}

/// For mobile devices
@media (max-width: 767px) {
    .custom-shape-divider-top-1719722421 svg {
        width: calc(100% + 1.3px);
        height: 91px;
    }
}





*/