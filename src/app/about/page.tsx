import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-screen-lg">
        {/* Section 1: Our Story */}
        <div className="my-12 flex flex-wrap gap-6 justify-between">
          <div className="block">
            <h2 className="text-4xl font-semibold mb-4 ">Our Story</h2>
            <p className="text-gray-700  max-w-2xl mx-auto">
              Founded in 2024, our journey began with a mission to revolutionize
              the tech industry by creating innovative solutions that enhance
              everyday life. Over the years, we have grown into a dynamic and
              forward-thinking company, always staying true to our values of
              integrity, customer focus, and continuous improvement. Our story
              is one of passion, innovation, and commitment to excellence.
            </p>
          </div>
          <div className="w-1/4 ">
            <img
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
              alt="Team Member"
              className=" rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="mb-12 sm:mt-20 ">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 text-center">
            Founded in 2024, our journey began with a mission to revolutionize
            the tech industry by creating innovative solutions that enhance
            everyday life. Over the years, we have grown into a dynamic and
            forward-thinking company, always staying true to our values of
            integrity, customer focus, and continuous improvement. Our story is
            one of passion, innovation, and commitment to excellence.
          </p>
        </div>

        {/* Section 3: Our Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://placehold.co/600x400/png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://placehold.co/600x400/png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://placehold.co/600x400/png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Bob Johnson</h3>
              <p className="text-gray-600">CFO</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="https://placehold.co/600x400/png"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Davis</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>

        {/* Section 4: Our Values */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div>
              <div className=" w-24 h-24 rounded-full bg-gray-100 border border-slate-100 shadow-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of integrity in all of our
                actions.
              </p>
            </div>
            <div>
              <div className=" w-24 h-24 rounded-full bg-gray-100 border border-slate-100 shadow-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We pursue new creative ideas that have the potential to change
                the world.
              </p>
            </div>
            <div>
              <div className=" w-24 h-24 rounded-full bg-gray-100 border border-slate-100 shadow-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, aiming to exceed
                expectations.
              </p>
            </div>
            <div>
              <div className=" w-24 h-24 rounded-full bg-gray-100 border border-slate-100 shadow-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Customer Commitment
              </h3>
              <p className="text-gray-700">
                We develop relationships that make a positive difference in our
                customers' lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
