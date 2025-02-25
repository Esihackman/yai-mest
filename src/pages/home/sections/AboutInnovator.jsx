import React from 'react';
import InnovatorImage from '../../../images/innovator.png';
import { Award, Lightbulb, Brain, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Meet the Innovator
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-200 rounded-tr-[4rem] rounded-bl-[4rem] -rotate-6"></div>
            <img
              src={InnovatorImage}
              alt="John Assuah working on electronics"
              className="relative w-full h-[600px] object-cover rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl"
            />
          </div>

          {/* Content section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Professional Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                John Assuah is the visionary founder of Assuah's Robotics, bringing his expertise as an electrical/electronic engineer to innovate tech gadgets that enhance people's lives. His journey began at Takoradi Technical Institute in 2007, where he honed his talents under the mentorship of Nana Mburaenu (Mr. Joseph Abaidoo Myles).
              </p>
            </div>

            {/* Achievement cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Award className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Educational Excellence</h4>
                <p className="text-sm text-gray-600">HND and B-TECH in Electrical and Electronic Engineering from Takoradi Technical University</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Brain className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Teaching Experience</h4>
                <p className="text-sm text-gray-600">Served as a Teaching Assistant, sharing knowledge with students and faculty</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <PenTool className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Technical Expertise</h4>
                <p className="text-sm text-gray-600">12+ years experience in IC Programming and Design</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Lightbulb className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Innovation Focus</h4>
                <p className="text-sm text-gray-600">Pioneering solutions in worker protection and safety technology</p>
              </div>
            </div>

            {/* Impact statement */}
            <div className="bg-amber-800 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Impact & Vision</h3>
              <p className="leading-relaxed">
                His groundbreaking solutions continue to set new standards in worker protection, bridging technology with practical safety solutions that make a lasting impact. As an Electronic Project Consultant, John's expertise has been invaluable to professionals across the engineering spectrum, from HND holders to PhD certified experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
