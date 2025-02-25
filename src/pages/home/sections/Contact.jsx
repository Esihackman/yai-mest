import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#004721] mb-12">Contact the Innovator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section - Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#004721]">Get in Touch</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              If you are interested in learning more about our innovative tracking helmets or have any inquiries,
              feel free to reach out. We're happy to discuss how our technology can enhance safety in
              construction and industrial environments.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">assuahrobotics@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">+233 123 456 789</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">Sekondi-Takoradi, Ghana</span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#004721] mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#009c4a] hover:bg-[#004721] text-white px-6 py-3 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
