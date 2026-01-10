import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          We are a creative development team focused on building clean, scalable
          and user-friendly web applications. Our mission is to deliver
          high-quality digital products that help businesses grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">
              We focus on clean code and modern design standards.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-600 text-sm">
              Fast loading and optimized user experience.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className=" text-gray-600 text-sm">
              Our mission is to deliver high-quality digital products that help
              businesses grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
