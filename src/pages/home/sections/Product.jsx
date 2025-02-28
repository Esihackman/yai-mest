import React, { useState } from "react";
import helmetImg from "../../../images/product1.png";
import safetyGearImg from "../../../images/product2.png";
import workGlovesImg from "../../../images/product3.png";

const products = [
  {
    id: 1,
    name: "Tracking Helmet",
    image: helmetImg,
    description: "Real-time location tracking and automatic low-light sensors.",
    details: "Our tracking helmet is designed for maximum safety, integrating GPS technology and auto-adjusting lighting to ensure visibility in hazardous environments. Perfect for construction and industrial sites."
  },
  {
    id: 2,
    name: "Advanced Safety Gear",
    image: safetyGearImg,
    description: "Enhanced protection with smart safety technology.",
    details: "This advanced safety gear set includes high-tech wearables with real-time monitoring, ensuring workers stay protected at all times. Smart sensors provide alerts for potential hazards."
  },
  {
    id: 3,
    name: "Durable Work Gloves",
    image: workGlovesImg,
    description: "High-quality gloves for maximum safety and grip.",
    details: "Our durable work gloves are made with reinforced materials to provide superior grip, protection, and comfort for prolonged use in tough environments."
  }
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDetails = (id) => {
    setSelectedProduct(selectedProduct === id ? null : id);
  };

  return (
    <section id="products" className="products bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover rounded-md" />
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button 
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => toggleDetails(product.id)}
              >
                {selectedProduct === product.id ? "Show Less" : "Learn More"}
              </button>
              {selectedProduct === product.id && (
                <p className="mt-4 text-gray-700">{product.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
