import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Build Modern Web Experiences
          </h1>
          <p className="text-gray-600 mb-6">
            We create fast, responsive and beautiful websites using modern
            technologies like React and Tailwind CSS.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 bg-black rounded-2xl opacity-90"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
