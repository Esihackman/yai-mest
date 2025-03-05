import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#004721] mb-4 tracking-tight">
            Contact The Innovator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to revolutionize safety in your workplace? Let's discuss how our intellingent hand washing machine can protect your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Details */}
          <div className="space-y-8 lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg space-y-6 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[#004721]">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                If you're interested in learning more about our innovative intellingent hand washing machine or have any inquiries,
                we're here to help. Our team is ready to discuss how our technology can enhance safety in
                your home and industrial environments.
              </p>
              <div className="space-y-6 text-lg">
                <a href="mailto:assuahrobotics@example.com" 
                   className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <Mail className="text-[#009c4a] w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-[#004721]">assurobotics@gmail.com
                  </span>
                </a>
                <a href="tel:+233123456789"
                   className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <Phone className="text-[#009c4a] w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-[#004721]">+233200404997 / +233200404993
                  </span>
                </a>
                <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <MapPin className="text-[#009c4a] w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-[#004721]">Sekondi-Takoradi, Ghana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-[#004721] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009c4a]/20 focus:border-[#009c4a] transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009c4a]/20 focus:border-[#009c4a] transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder=""
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#009c4a]/20 focus:border-[#009c4a] transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full bg-[#009c4a] hover:bg-[#004721] text-white px-6 py-4 rounded-2xl text-lg font-medium shadow-lg 
                  transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}