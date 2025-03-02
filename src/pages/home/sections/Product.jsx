import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Box, Button, Divider, Card, CardContent } from '@mui/material';
import { Engineering, HealthAndSafety, Visibility, Battery90, Speed, Bluetooth, ArrowForward, Check, ElectricBolt, Sensors, SettingsRemote } from '@mui/icons-material';

// Import product images
// Note: These imports assume the images are in the correct location
// If you get errors, you may need to adjust the import paths
import helmetImg from '../../../images/showhelmet2.png';
import safetyGearImg from '../../../images/showhelmet4.png';
import workGlovesImg from '../../../images/showhelmet6.png';

// Showcase images
import HelmetImage1 from '../../../images/product1.png';
import HelmetImage2 from '../../../images/product2.png';
import HelmetImage3 from '../../../images/product3.png';
import HelmetImage4 from '../../../images/showhelmet1.png';
import HelmetImage5 from '../../../images/showhelmet3.png';
import HelmetImage6 from '../../../images/showhelmet5.png';


export default function Product() {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Main products data
  const products = [
    {
      id: 'tracking-helmet',
      name: 'Smart Safety Helmet',
      tagline: 'Advanced Electronic Protection with Real-time Tracking',
      description: 'Our flagship safety helmet integrates custom-designed electronic circuits for comprehensive tracking and sensor technology, developed by John Assuah using his expertise in electrical engineering and IC programming.',
      image: helmetImg,
      features: [
        'Custom-designed IC for real-time GPS tracking with 1m accuracy',
        'Proprietary low-light sensor system with automatic illumination',
        'Impact-resistant carbon fiber shell with integrated circuit protection',
        'Energy-efficient power management system with 48-hour battery life',
        'Emergency SOS beacon with instant alerts to safety personnel',
        'Integrated communication system with noise cancellation'
      ],
      specs: [
        { icon: <ElectricBolt />, label: 'Power System', value: 'Custom IC design' },
        { icon: <Speed />, label: 'Response Time', value: '< 0.5 seconds' },
        { icon: <Bluetooth />, label: 'Connectivity', value: '4G LTE & Bluetooth 5.0' },
        { icon: <Engineering />, label: 'Material', value: 'Carbon fiber composite' }
      ],
      color: 'blue',
      showcaseFeatures: [
        {
          image: HelmetImage1,
          title: "Proprietary Tracking System",
          description: "Custom-designed electronic circuits provide precise real-time location tracking with minimal power consumption, ensuring worker safety in hazardous environments.",
          features: ["Custom IC Design", "Energy Efficient", "Emergency Alerts"]
        },
        {
          image: HelmetImage2,
          title: "Advanced Sensor Array",
          description: "Integrated sensor system designed by John Assuah detects environmental hazards and automatically adjusts lighting for optimal visibility in any condition.",
          features: ["Environmental Monitoring", "Adaptive Lighting", "Hazard Detection"]
        }
      ]
    },
    {
      id: 'advanced-safety-gear',
      name: 'Electronic Safety Vest',
      tagline: 'Enhanced Protection with Integrated Circuit Technology',
      description: 'A comprehensive safety solution featuring custom-programmed microcontrollers that monitor environmental conditions and worker vital signs, developed using John Assuah\'s expertise in electrical engineering.',
      image: safetyGearImg,
      features: [
        'Embedded microcontroller system for real-time monitoring',
        'Custom-designed sensor array for environmental hazard detection',
        'Integrated vital sign monitoring with alert thresholds',
        'Reinforced protective materials with embedded circuit pathways',
        'Energy-efficient design with extended battery life',
        'Wireless connectivity to central safety monitoring systems'
      ],
      specs: [
        { icon: <Sensors />, label: 'Sensor Array', value: 'Custom designed' },
        { icon: <Speed />, label: 'Alert Time', value: '< 1.2 seconds' },
        { icon: <Bluetooth />, label: 'Connectivity', value: 'Mesh network capable' },
        { icon: <Engineering />, label: 'Circuit Design', value: 'Proprietary IC' }
      ],
      color: 'amber',
      showcaseFeatures: [
        {
          image: HelmetImage3,
          title: "Integrated Circuit Protection",
          description: "Our safety gear incorporates John Assuah's innovative circuit designs that withstand harsh environments while maintaining reliable performance.",
          features: ["Ruggedized Electronics", "Environmental Resistance", "Reliable Performance"]
        },
        {
          image: HelmetImage4,
          title: "Advanced Communication System",
          description: "Custom-designed communication circuits ensure clear transmission even in noisy industrial environments, a direct application of John's expertise in electronic engineering.",
          features: ["Noise Filtering Circuits", "Signal Amplification", "Long-range Capability"]
        }
      ]
    },
    {
      id: 'durable-work-gloves',
      name: 'Smart Safety Gloves',
      tagline: 'Tactile Protection with Embedded Sensor Technology',
      description: 'High-tech work gloves featuring miniaturized electronic sensors designed by John Assuah that detect hazardous conditions while maintaining dexterity and comfort for industrial workers.',
      image: workGlovesImg,
      features: [
        'Embedded temperature sensors with haptic feedback alerts',
        'Micro-circuit reinforced palm and finger areas for cut resistance',
        'Conductive fiber technology for enhanced grip and touchscreen use',
        'Integrated moisture and chemical detection sensors',
        'Wireless connectivity to safety helmet and vest systems',
        'Energy-harvesting technology for extended operation'
      ],
      specs: [
        { icon: <SettingsRemote />, label: 'Sensor Type', value: 'Micro-electronic array' },
        { icon: <Visibility />, label: 'Alert System', value: 'Haptic and visual' },
        { icon: <HealthAndSafety />, label: 'Protection', value: 'Level 5 cut resistance' },
        { icon: <Battery90 />, label: 'Power', value: 'Energy harvesting' }
      ],
      color: 'green',
      showcaseFeatures: [
        {
          image: HelmetImage5,
          title: "Thermal Detection Circuits",
          description: "Miniaturized temperature sensing circuits designed by John Assuah provide immediate feedback about dangerous thermal conditions while maintaining glove flexibility.",
          features: ["Micro-circuit Design", "Instant Feedback", "Precision Sensing"]
        },
        {
          image: HelmetImage6,
          title: "Smart Material Integration",
          description: "John's expertise in electronic engineering enables the seamless integration of conductive materials and sensing circuits within flexible glove structures.",
          features: ["Conductive Fabrics", "Flexible Circuits", "Seamless Integration"]
        }
      ]
    }
  ];

  const getColorClass = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
        light: 'bg-blue-100',
        gradient: 'from-blue-600 to-blue-800'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        button: 'bg-amber-600 hover:bg-amber-700',
        light: 'bg-amber-100',
        gradient: 'from-amber-600 to-amber-800'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
        light: 'bg-green-100',
        gradient: 'from-green-600 to-green-800'
      }
    };
    
    return colorMap[color][type];
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography 
            variant="h2" 
            className="text-4xl md:text-5xl font-bold mb-4"
            sx={{ 
              background: 'linear-gradient(to right, #1565C0, #0D47A1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Electronic Safety Innovations
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-3xl mx-auto">
            Cutting-edge electronic protection technology designed by John Assuah, leveraging his expertise in electrical engineering and IC programming
          </Typography>
          <Box className="w-24 h-1 bg-blue-600 mx-auto mt-6"></Box>
        </motion.div>

        {/* Products with Integrated Showcase */}
        {products.map((product, productIndex) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: productIndex * 0.1 }}
            className="mb-24"
          >
            {/* Product Header */}
            <Box className="text-center mb-8">
              <Typography 
                variant="h3" 
                className="font-bold mb-2"
                sx={{ color: productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981' }}
              >
                {product.name}
              </Typography>
              <Typography variant="h6" className="text-gray-600 mb-2">
                {product.tagline}
              </Typography>
              <Box 
                className="w-16 h-1 mx-auto"
                sx={{ 
                  backgroundColor: productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981'
                }}
              ></Box>
            </Box>

            {/* Main Product Card */}
            <Grid container spacing={4} className="mb-12">
              <Grid item xs={12} md={6}>
                <Card 
                  className={`h-full shadow-lg overflow-hidden border-t-4 ${getColorClass(product.color, 'border')}`}
                  sx={{ borderRadius: '16px' }}
                >
                  <Box className="relative">
                    <Box 
                      component="img"
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                  </Box>
                  
                  <CardContent className="p-6">
                    <Typography variant="body1" className="text-gray-700 mb-6">
                      {product.description}
                    </Typography>
                    
                    <Typography variant="subtitle2" className="font-bold mb-3 flex items-center">
                      <HealthAndSafety className="mr-2" fontSize="small" />
                      Key Features
                    </Typography>
                    
                    <Box className="mb-6">
                      {product.features.map((feature, idx) => (
                        <Box key={idx} className="flex items-start mb-2">
                          <Box 
                            component="span" 
                            className={`w-5 h-5 rounded-full ${getColorClass(product.color, 'light')} flex items-center justify-center mr-2 flex-shrink-0 mt-0.5`}
                          >
                            ✓
                          </Box>
                          <Typography variant="body2" className="text-gray-700">
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    {/* CTA Button */}
                    <Box className="flex justify-between items-center">
                      <Button 
                        variant="contained" 
                        className={getColorClass(product.color, 'button')}
                        onClick={() => setExpandedProduct(expandedProduct === productIndex ? null : productIndex)}
                      >
                        {expandedProduct === productIndex ? 'Show Less' : 'View Specifications'}
                      </Button>
                      {/* <Button 
                        variant="text" 
                        className={getColorClass(product.color, 'text')}
                        endIcon={<ArrowForward />}
                      >
                        Request Quote
                      </Button> */}
                    </Box>
                    
                    {/* Expanded Details */}
                    {expandedProduct === productIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6"
                      >
                        <Divider className="my-4" />
                        
                        {/* Technical Specs */}
                        <Typography variant="subtitle2" className="font-bold mb-3">
                          Technical Specifications
                        </Typography>
                        <Grid container spacing={2}>
                          {product.specs.map((spec, idx) => (
                            <Grid item xs={6} key={idx}>
                              <Box className="p-3 bg-white border border-gray-200 rounded-lg">
                                <Box className="flex items-center mb-1">
                                  {spec.icon}
                                  <Typography variant="body2" className="ml-2 text-gray-500">
                                    {spec.label}
                                  </Typography>
                                </Box>
                                <Typography variant="body2" className="font-medium">
                                  {spec.value}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              
              {/* Product Showcase Features */}
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  className="font-bold mb-4"
                  sx={{ color: productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981' }}
                >
                  Engineering Highlights
                </Typography>
                
                <Grid container spacing={3}>
                  {product.showcaseFeatures.map((feature, featureIndex) => (
                    <Grid item xs={12} key={featureIndex}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onMouseEnter={() => setHoveredCard(`${productIndex}-${featureIndex}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Card 
                          className="overflow-hidden rounded-xl shadow-md transition-all duration-300"
                          sx={{ position: 'relative' }}
                        >
                          <Box 
                            className="absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-300 z-10"
                            sx={{ 
                              background: `linear-gradient(to top, ${
                                productIndex === 0 ? 'rgba(21, 101, 192, 0.8)' : 
                                productIndex === 1 ? 'rgba(245, 158, 11, 0.8)' : 
                                'rgba(16, 185, 129, 0.8)'
                              }, transparent)`,
                              opacity: hoveredCard === `${productIndex}-${featureIndex}` ? 1 : 0
                            }}
                          />
                          
                          <Grid container>
                            <Grid item xs={12} sm={4}>
                              <Box 
                                component="img"
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                                sx={{ 
                                  minHeight: '180px',
                                  transform: hoveredCard === `${productIndex}-${featureIndex}` ? 'scale(1.05)' : 'scale(1)',
                                  transition: 'transform 0.3s ease-in-out'
                                }}
                              />
                            </Grid>
                            
                            <Grid item xs={12} sm={8}>
                              <CardContent className="p-4 relative z-20">
                                <Typography 
                                  variant="h6" 
                                  className="font-bold mb-2 transition-colors duration-300"
                                  sx={{ 
                                    color: hoveredCard === `${productIndex}-${featureIndex}` ? 'white' : 
                                      productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981'
                                  }}
                                >
                                  {feature.title}
                                </Typography>
                                
                                <Typography 
                                  variant="body2" 
                                  className="mb-3 transition-colors duration-300"
                                  sx={{ 
                                    color: hoveredCard === `${productIndex}-${featureIndex}` ? 'rgba(255, 255, 255, 0.9)' : '#666'
                                  }}
                                >
                                  {feature.description}
                                </Typography>
                                
                                <Box className="space-y-1">
                                  {feature.features.map((featureItem, idx) => (
                                    <Box 
                                      key={idx} 
                                      className="flex items-center"
                                      sx={{ 
                                        color: hoveredCard === `${productIndex}-${featureIndex}` ? 'rgba(255, 255, 255, 0.8)' : '#666'
                                      }}
                                    >
                                      <Check 
                                        className="mr-1 transition-colors duration-300" 
                                        fontSize="small"
                                        sx={{ 
                                          color: hoveredCard === `${productIndex}-${featureIndex}` ? 'white' : 
                                            productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981'
                                        }}
                                      />
                                      <Typography variant="body2" className="text-sm">
                                        {featureItem}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </CardContent>
                            </Grid>
                          </Grid>
                          
                          <Box 
                            className="absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-300"
                            sx={{ 
                              backgroundColor: productIndex === 0 ? '#1565C0' : productIndex === 1 ? '#F59E0B' : '#10B981',
                              transform: hoveredCard === `${productIndex}-${featureIndex}` ? 'scaleX(1)' : 'scaleX(0)'
                            }}
                          />
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            
            {/* Divider between products */}
            {productIndex < products.length - 1 && (
              <Box 
                className="w-full h-px my-8 mx-auto max-w-4xl opacity-50"
                sx={{ 
                  background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)'
                }}
              ></Box>
            )}
          </motion.div>
        ))}

        {/* Testimonial
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Box className="p-8 rounded-2xl bg-blue-50 relative">
            <Box className="text-6xl text-gray-200 absolute top-4 left-4">"</Box>
            <Typography variant="h5" className="text-gray-700 italic text-center relative z-10 px-8">
              John Assuah's electronic safety innovations have revolutionized how we approach worker protection in our construction sites. His expertise in circuit design and sensor integration has created solutions that are both highly effective and reliable in demanding environments.
            </Typography>
            <Box className="text-6xl text-gray-200 absolute bottom-4 right-4">"</Box>
            <Box className="flex items-center justify-center mt-6">
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <Box>
                <Typography variant="subtitle1" className="font-semibold">
                  Michael Osei
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Safety Director, Ghana Construction Ltd.
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div> */}
      </Container>
    </section>
  );
}