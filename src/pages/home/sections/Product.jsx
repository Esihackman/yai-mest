export default function Product() {
  const features = [
    {
      id: 1,
      title: 'Real-Time Location Tracking',
      description:
        'Stay updated with the exact location of workers in real time, ensuring faster emergency responses and improved operational efficiency.',
      icon: '📍',
    },
    {
      id: 2,
      title: 'Automatic Low-Light Sensors',
      description:
        'Enhanced visibility in dimly lit environments with automatic low-light sensors, reducing risks in hazardous work areas.',
      icon: '💡',
    },
    {
      id: 3,
      title: 'Durable & Comfortable Design',
      description:
        'Built with robust materials for harsh environments while maintaining comfort for all-day wear.',
      icon: '🛡️',
    },
  ];

  return (
    <section
      id="products"
      className="w-full py-16 bg-white"
      style={{ fontFamily: 'Times New Roman' }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Products</h2>
        <p className="text-lg text-green-600 mb-12">
          Assuah Robotics’ safety helmets are designed with cutting-edge technology to
          protect workers in construction and industrial environments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-green-700">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-green-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
