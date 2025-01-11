import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaBoxOpen, FaLock, FaRoute, FaUserAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  // Define the swiperRef to access the Swiper instance
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      swiper.slideNext(); // Slide to the next slide
    }, 4000); // Every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#3fb27f]">My Bucket</div>
          <div className="space-x-4 flex items-center">
            <a
              href="#introduction"
              className="text-gray-700 hover:text-[#3fb27f]"
            >
              Introduction
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#3fb27f]">
              Features
            </a>
            <a href="#results" className="text-gray-700 hover:text-[#3fb27f]">
              Results
            </a>
            <a
              href="#business-goals"
              className="text-gray-700 hover:text-[#3fb27f]"
            >
              Business Goals
            </a>
            <button className="bg-[#3fb27f] text-white py-2 px-4 rounded hover:bg-[#18835a]">
              <a href="http://localhost:5173/signin">Sign In</a>
            </button>
            <button className="bg-gray-100 text-[#3fb27f] py-2 px-4 rounded border border-[#3fb27f]  hover:bg-white">
              <a href="http://localhost:5173/signup">Sign Up</a>
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header
        className="bg-[#3fb27f] text-white w-full py-16"
        id="introduction"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Welcome to My Bucket</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Simplifying and securing parcel deliveries with smart IoT
            technology.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 flex-1">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            "My Bucket" is an innovative system designed to simplify and secure
            parcel deliveries using IoT technology and a user-friendly web
            application. By utilizing a smart, locked bucket near your door, we
            ensure your packages remain secure even when you’re not home.
          </p>
        </section>

        <section
          id="features"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Key Features */}
          <div className="bg-white shadow-md p-8 rounded-lg">
            <h3 className="text-xl font-medium text-[#3fb27f]">
              Why Choose My Bucket?
            </h3>
            <ul className="mt-6 text-gray-600 list-disc list-inside">
              <li>Eliminates missed deliveries.</li>
              <li>Prevents package theft.</li>
              <li>Reduces redelivery costs and delays.</li>
              <li>Improves user convenience and security.</li>
            </ul>
          </div>

          {/* Significance */}
          <div className="bg-white shadow-md p-8 rounded-lg">
            <h3 className="text-xl font-medium text-[#3fb27f]">
              Project Significance
            </h3>
            <p className="mt-6 text-gray-600">
              Our smart bucket integrates IoT technology, secure communication
              protocols, and GPS tracking to revolutionize the parcel delivery
              experience for both customers and delivery services.
            </p>
          </div>
        </section>

        {/* Advanced Features */}
        <section id="advanced-features" className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-lg font-medium text-[#3fb27f]">
                Real-Time Notifications
              </h4>
              <p className="mt-4 text-gray-600">
                Stay updated with live notifications for every parcel delivery.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-lg font-medium text-[#3fb27f]">
                GPS Tracking
              </h4>
              <p className="mt-4 text-gray-600">
                Monitor the live location of your deliveries with precision.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-lg font-medium text-[#3fb27f]">
                Secure Access
              </h4>
              <p className="mt-4 text-gray-600">
                Protect your packages with a robust locking system and secure
                communication.
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800">
            Expected Results
          </h2>
          <div className="mt-6 w-full h-[60vh]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className="h-full"
              ref={swiperRef} // Reference to control swiper programmatically
            >
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <FaBoxOpen className="text-6xl text-[#3fb27f] mb-4" />
                  <h3 className="text-xl font-medium text-gray-800">
                    Reduction in Missed Deliveries
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-lg">
                    With proactive notifications and smart locking mechanisms,
                    missed deliveries are minimized.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <FaLock className="text-6xl text-[#3fb27f] mb-4" />
                  <h3 className="text-xl font-medium text-gray-800">
                    Enhanced Parcel Security
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-lg">
                    Keep your packages safe with advanced locking systems until
                    authorized retrieval.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <FaRoute className="text-6xl text-[#3fb27f] mb-4" />
                  <h3 className="text-xl font-medium text-gray-800">
                    Optimized Delivery Routes
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-lg">
                    Real-time GPS tracking helps streamline delivery routes for
                    efficiency.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <FaUserAlt className="text-6xl text-[#3fb27f] mb-4" />
                  <h3 className="text-xl font-medium text-gray-800">
                    Improved User Experience
                  </h3>
                  <p className="mt-2 text-gray-600 max-w-lg">
                    Seamless interactions with intuitive web and mobile
                    applications.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Business Goals */}
        <section id="business-goals" className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Business Goals
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            The "My Bucket" project is designed to transform parcel delivery by
            focusing on several key business goals. These include enhancing
            customer satisfaction, improving operational efficiency, achieving
            market differentiation, and ensuring scalability for future growth.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-full text-center">
        <p className="text-sm">&copy; 2025 My Bucket. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
