"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Phone, Mail, Clock, MapPin, Briefcase, Clock4, Handshake } from 'lucide-react';

const HomePage = () => {
  const services = [
    { title: 'Carpentry', description: "We create custom woodwork and installations tailored to your home's needs. From door installations to intricate fittings, our craftsmanship ensures every piece is both functional and beautiful.", image: '/carpentry.jpg' },
    { title: 'Extensions', description: "Looking to expand your living space? Our team specializes in building seamless extensions that blend perfectly with your home's existing design. Whether it's an extra room, a larger kitchen, or a home office, we can bring your vision to life.", image: '/extensions.jpg' },
    { title: 'Bathroom Builds', description: "Transform your bathroom into a modern oasis with our renovation services. From initial design to the finishing touches, we handle every detail to create a space that's both stylish and functional.", image: '/tiling.jpg' },
    { title: 'Plastering', description: "Our plastering services ensure smooth and durable finishes for your walls and ceilings. Whether it's a new build or repairing existing surfaces, we guarantee a flawless result.", image: '/plastering.jpeg' },
    { title: 'House Repairs', description: "From fixing everyday wear and tear to addressing larger issues, our general maintenance and repair services keep your home in top condition. No job is too small or too big for us to handle.", image: '/house_repairs.jpeg' }
  ];

  const reasons = [
    { title: 'High Quality work', description: 'We strive to deliver the highest possible quality for our clients.' },
    { title: 'Always On Time', description: 'We will never leave you waiting.' },
    { title: 'Professional services', description: 'We find pride in our ability to keep everything professional.' }
  ];

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 text-center bg-gradient-to-br from-red-600 to-red-300 text-white" id="home">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="mb-6 text-6xl font-bold">
            JF Home Improvements
          </h1>
          <p className="mb-8 text-xl">
            A family-run business since 2021, delivering quality home renovations 
            with years of experience and craftsmanship.
          </p>
          <p className="text-xl font-semibold mb-8">
            We specialize in{' '}
            <span className="italic">
            <TypeAnimation
                sequence={[
                  'Carpentry',
                  2000,
                  'Extensions',
                  2000,
                  'Bathroom Builds',
                  2000,
                  'Tiling',
                  2000,
                  'Plastering',
                  2000,
                  'House Repairs',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block px-8 py-4 font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-red-500 transition-all transform hover:scale-105"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-8 text-gray-600 flex-wrap">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>086 457 9781</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>jack@jfhomeimprovementss.ie</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Mon-Sat: 8am-6pm</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Borris-in-Ossory</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-lg border border-red-500 shadow-xl overflow-hidden"
              >
                <div className="w-full aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100 px-4" id="why-us">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="overflow-hidden"
              >
                <div className="flex justify-center">
                  <div className="p-5 bg-white rounded-full border-2 border-blue-400 shadow-2xl">
                    {index === 0 && <Briefcase className="w-16 h-16 text-black"/>}
                    {index === 1 && <Clock4 className="w-16 h-16 text-black"/>}
                    {index === 2 && <Handshake className="w-16 h-16 text-black"/>}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <p className="text-xl mb-8 text-gray-600">
              Ready to transform your home? Get in touch for a quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <Phone className="w-6 h-6 text-red-500 mr-3" />
                <div className="text-left">
                  <p className="font-semibold text-black">Call Us</p>
                  <p className="text-gray-800">086 457 9781</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-red-500 mr-3" />
                <div className="text-left">
                  <p className="font-semibold text-black">Email Us</p>
                  <p className="text-black">jack@jfhomeimprovementss.ie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JF Home Improvements</h3>
              <p className="text-gray-400">Transforming homes with quality craftsmanship since 2021.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  086 457 9781
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jack@jfhomeimprovementss.ie
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Borris-in-Ossory
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 8am - 6pm</li>
                <li>Saturday: 8am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JF Home Improvements. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
