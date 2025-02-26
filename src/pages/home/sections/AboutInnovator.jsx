import React from 'react';
import InnovatorImage from '../../../images/innovator.png';
import { Award, Lightbulb, Brain, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-800 mb-4 tracking-tight">
            Meet the Innovator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the journey and innovations of John Assuah, a pioneer in safety technology.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Main content grid with image on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content section */}
          <div className="space-y-12 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl shadow-lg space-y-4">
              <h3 className="text-3xl font-bold text-amber-800">Professional Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                John Assuah is the visionary founder of Assuah's Robotics, bringing his expertise as an electrical/electronic engineer to innovate tech gadgets that enhance lives. His journey began at Takoradi Technical Institute in 2007, mentored by Nana Mburaenu (Mr. Joseph Abaidoo Myles).
              </p>
            </div>

            {/* Achievement and impact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[{
                icon: <Award className="w-8 h-8 text-amber-500 mb-3" />,
                title: 'Educational Excellence',
                description: 'HND and B-TECH in Electrical and Electronic Engineering from Takoradi Technical University'
              }, {
                icon: <Brain className="w-8 h-8 text-amber-500 mb-3" />,
                title: 'Teaching Experience',
                description: 'Served as a Teaching Assistant, sharing knowledge with students and faculty'
              }, {
                icon: <PenTool className="w-8 h-8 text-amber-500 mb-3" />,
                title: 'Technical Expertise',
                description: '12+ years of experience in IC Programming and Design'
              }, {
                icon: <Lightbulb className="w-8 h-8 text-amber-500 mb-3" />,
                title: 'Innovation Focus',
                description: 'Pioneering solutions in worker protection and safety technology'
              }].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center">
                  {item.icon}
                  <h4 className="font-semibold text-xl mb-2 text-amber-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Impact statement centered */}
            <div className="bg-amber-800 text-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Impact & Vision</h3>
              <p className="leading-relaxed max-w-3xl mx-auto">
                John's groundbreaking solutions set new standards in worker protection, blending technology with practical safety measures. His consultancy expertise spans professionals from HND holders to PhD experts, making a significant impact across the engineering spectrum.
              </p>
            </div>
          </div>

          {/* Image section on the right */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-amber-200 rounded-tr-[4rem] rounded-bl-[4rem] -rotate-6"></div>
            <img
              src={InnovatorImage}
              alt="John Assuah working on electronics"
              className="relative w-full h-[600px] object-cover rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
