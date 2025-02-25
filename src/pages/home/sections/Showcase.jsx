import HelmetImage1 from '../../../images/showhelmet3.png';
import HelmetImage2 from '../../../images/showhelmet2.png';
import HelmetImage3 from '../../../images/showhelmet1.png';

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="w-full py-20 bg-white"
      style={{ fontFamily: 'Times New Roman' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Product Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={HelmetImage1}
              alt="Real-Time Tracking"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-green-700 leading-relaxed">
              Stay updated with precise real-time location tracking, ensuring fast
              emergency responses when it matters most.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={HelmetImage2}
              alt="Low-Light Sensors"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Low-Light Sensors
            </h3>
            <p className="text-green-700 leading-relaxed">
              Improve visibility in dim environments with automatic low-light
              sensors, enhancing safety during nighttime operations.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={HelmetImage3}
              alt="Durable Design"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Durable Design
            </h3>
            <p className="text-green-700 leading-relaxed">
              Built for tough environments, the helmets combine durability with
              cutting-edge technology for maximum protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
