import React from "react";
import Image from "next/image";
import Cta from "@/components/cta";

const LandingPage = () => {
  return (
    <div className="bg-white  min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center w-full py-32 px-4 sm:px-0">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-600 mb-6 drop-shadow-lg">
            Supercharge Your Workflow
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 px-4 sm:px-0 w-full py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full sm:h-72 h-32 rounded-lg shadow-md overflow-hidden sm:mb-5 mb-3">
                <Image
                  src="https://images.pexels.com/photos/10330570/pexels-photo-10330570.jpeg"
                  width={445}
                  height={384}
                  alt="nature"
                  className=" w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nature is beauty</h3>
              <p className="text-gray-600">
                The beauty of nature lies not only in its grand spectacles but
                also in its smallest details. The delicate petals of a blooming
                flower, the intricate patterns on a butterfly's wings, and the
                gentle rustling of leaves in the wind all contribute to the
                serene and profound beauty that surrounds us.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full sm:h-72 h-32 rounded-lg shadow-md overflow-hidden sm:mb-5 mb-3">
                <Image
                  src="https://images.pexels.com/photos/25561075/pexels-photo-25561075/free-photo-of-a-single-red-poppy-is-in-the-middle-of-a-field.jpeg"
                  width={445}
                  height={384}
                  alt="nature"
                  className=" w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flower spread love</h3>
              <p className="text-gray-600">
                The beauty of nature lies not only in its grand spectacles but
                also in its smallest details. The delicate petals of a blooming
                flower, the intricate patterns on a butterfly's wings, and the
                gentle rustling of leaves in the wind all contribute to the
                serene and profound beauty that surrounds us.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full sm:h-72 h-32 rounded-lg shadow-md overflow-hidden sm:mb-5 mb-3">
                <Image
                  src="https://images.pexels.com/photos/18715722/pexels-photo-18715722/free-photo-of-lesser-bougainvillea-red-flowers.jpeg"
                  width={445}
                  height={384}
                  alt="nature"
                  className=" w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nature is beauty</h3>
              <p className="text-gray-600">
                The beauty of nature lies not only in its grand spectacles but
                also in its smallest details. The delicate petals of a blooming
                flower, the intricate patterns on a butterfly's wings, and the
                gentle rustling of leaves in the wind all contribute to the
                serene and profound beauty that surrounds us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
};

export default LandingPage;
