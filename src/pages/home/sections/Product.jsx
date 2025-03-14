import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Container, Card, CardContent, Typography, Grid, Button, 
  Box, IconButton, Tooltip, Chip, Paper, Tabs, Tab
} from "@mui/material";
import { 
  CheckCircle, BatteryChargingFull, Verified, TouchApp, 
  WaterDrop, VolumeUp, Monitor, BatteryFull, WbSunny, 
  Lightbulb, Build, Speed, YouTube, ArrowForward, 
  VerifiedUser, EmojiObjects
} from "@mui/icons-material";
import { useInView } from 'react-intersection-observer';
import handwashImg1 from "../../../images/washing7.png";

const productDetails = {
  name: "Intelligent Hand Washing Machine",
  tagline: "Next-Generation Hygiene Technology",
  description: "Revolutionary touchless handwashing system with advanced sensors, real-time tracking, and sustainable solar-powered operation for optimal hygiene management.",
  powerSpecs: {
    batteryLife: " The battery can last for a week and some days when fully charged",
    solarInput: " Solar Panel Compatibility",
    powerConsumption: "Low-power smart operation",
    RechargeableLithiumIonBattery: " Long-lasting power with efficient energy use."
  },
  // certifications: [
  //   { name: "Ghana Standard Authority (GSA)", icon: <VerifiedUser /> },
  //   { name: "Energy Efficiency Certified", icon: <EmojiObjects /> },
  //   { name: "Quality Assurance Tested", icon: <CheckCircle /> }
  // ],
  construction: [
    { feature: "Water & Dust Resistant", description: "Sealed electronics to prevent damage." },
    { feature: " Rustproof & Corrosion", description: " Long lifespan in humid and high-traffic environments." },
    { feature: " Impact-Resistant Body", description: " Protects internal components from accidental falls or impacts" },
    { feature: " Low-Maintenance Design", description: " Easy-to-replace parts and refillable soap/tissue compartments." }
  ],
  smartFeatures: [
    {
      icon: <TouchApp />,
      title: "Touchless Operation",
      description: "Advanced proximity sensors eliminate contact points"
    },
    {
      icon: <BatteryFull />,
      title: "Power Management",
      description: "Intelligent energy conservation"
    },
    {
      icon: <WaterDrop />,
      title: "Smart Dispensing",
      description: "Precise control of water and soap delivery with minimal waste"
    },
    {
      icon: <VolumeUp />,
      title: "Voice Guidance",
      description: "Step-by-step washing instructions"
    },
    {
      icon: <Monitor />,
      title: "LCD Interface",
      description: "Visual guidance and system status"
    },
   
    {
      icon: <WbSunny />,
      title: "Solar Ready",
      description: "Renewable energy integration"
    }
  ],
  technicalSpecs: {
    WeightOfTheIntelligentHandWashingMachine: "11Kg",
    // processor: "ARM Cortex-M4 microcontroller",
    connectivity: "No Connection",
    waterSaving: "Up to 40% reduction in water usage",
    maintenance: "Smart monitoring with predictive alerts"
  }
};

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Container id="products" maxWidth="lg" className="py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Section */}
        <Box className="text-center mb-12">
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h2" 
              className="font-bold mb-4"
              sx={{ 
                background: 'linear-gradient(to right, #1565C0, #0D47A1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {productDetails.name}
            </Typography>
            <Typography variant="h5" className="text-gray-600 mb-6">
              {productDetails.tagline}
            </Typography>
            <Typography variant="body1" className="text-gray-600 max-w-3xl mx-auto">
              {productDetails.description}
            </Typography>
          </motion.div>
        </Box>

        {/* Main Product Display */}
        <Card elevation={4} className="mb-12 overflow-hidden rounded-xl">
          <Grid container>
            {/* Product Image Carousel */}
            <Grid item xs={12} md={6}>
              <Box className="relative h-full">
                <Box 
                  component="img"
                  src={handwashImg1}
                  alt="Intelligent Hand Washing Machine"
                  className="w-full h-full object-cover"
                  sx={{ minHeight: '400px' }}
                />
                <Box 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
               
              </Box>
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <Box className="p-6">
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  className="mb-6"
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab label="Features" />
                  <Tab label="Technical" />
                  <Tab label="Power" />
                </Tabs>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 0 && (
                      <Grid container spacing={3}>
                        {productDetails.smartFeatures.map((feature, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              onHoverStart={() => setHoveredFeature(index)}
                              onHoverEnd={() => setHoveredFeature(null)}
                            >
                              <Paper 
                                elevation={hoveredFeature === index ? 4 : 1}
                                className="p-4 h-full transition-all duration-300"
                              >
                                <Box className="flex items-start">
                                  <Box 
                                    className="p-2 rounded-full mr-3"
                                    sx={{ 
                                      backgroundColor: 'primary.main',
                                      color: 'white'
                                    }}
                                  >
                                    {feature.icon}
                                  </Box>
                                  <Box>
                                    <Typography variant="h6" className="font-semibold mb-1">
                                      {feature.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600">
                                      {feature.description}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Paper>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {activeTab === 1 && (
                      <Box>
                        {Object.entries(productDetails.technicalSpecs).map(([key, value], index) => (
                          <Box key={index} className="mb-4">
                            <Typography variant="subtitle2" className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </Typography>
                            <Typography variant="body1" className="font-medium">
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}

                    {activeTab === 2 && (
                      <Box>
                        {Object.entries(productDetails.powerSpecs).map(([key, value], index) => (
                          <Box key={index} className="mb-4">
                            <Typography variant="subtitle2" className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </Typography>
                            <Typography variant="body1" className="font-medium">
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid>
          </Grid>
        </Card>

       {/* Construction Details Section Title */}
       <Box className="text-center mb-8">
  <Typography variant="h4" className="font-bold text-blue-800">
    Durability Features
  </Typography>
  <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
    This ensures that the Intelligent Hand Washing Machine delivers high performance, sustainability, and long-term reliability while maintaining top-tier hygiene standards.
  </Typography>
</Box>


{/* Construction Details */}
<Grid container spacing={4} className="mb-12">
  {productDetails.construction.map((item, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Paper elevation={2} className="p-4 h-full">
          <Typography variant="h6" className="font-semibold mb-2">
            {item.feature}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {item.description}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  ))}
</Grid>


        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Paper 
            elevation={4}
            className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl"
          >
            <Typography variant="h4" className="font-bold mb-4">
              Experience the Future of Hand Hygiene
            </Typography>
            <Typography variant="body1" className="mb-6 max-w-2xl mx-auto">
              Watch our innovative hand washing machine in action and discover how it's revolutionizing hygiene standards.
            </Typography>
            <Box className="flex gap-4 justify-center">
              <Button
                variant="contained"
                size="large"
                className="bg-white text-blue-700 hover:bg-blue-50"
                startIcon={<YouTube />}
                href="https://www.youtube.com/results?search_query=assurob"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Demo
              </Button>
              
            </Box>
          </Paper>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ProductSection;