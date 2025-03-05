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
    batteryLife: "168+ hours on full charge",
    solarInput: "15-20V DC solar compatibility",
    powerConsumption: "Low-power smart operation",
    chargingTime: "4-6 hours to full charge"
  },
  construction: [
    { feature: "Aircraft-Grade Aluminum Frame", description: "Corrosion-resistant and durable" },
    { feature: "IP65 Water & Dust Protection", description: "Suitable for harsh environments" },
    { feature: "Impact-Resistant Housing", description: "Reinforced structural integrity" },
    { feature: "Smart Maintenance Design", description: "Easy access for servicing" }
  ],
  smartFeatures: [
    {
      icon: <TouchApp />,
      title: "Touchless Operation",
      description: "Advanced proximity sensors eliminate contact points"
    },
    {
      icon: <WaterDrop />,
      title: "Smart Dispensing",
      description: "Precise control of water and soap delivery"
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
      icon: <BatteryFull />,
      title: "Power Management",
      description: "Intelligent energy conservation"
    },
    {
      icon: <WbSunny />,
      title: "Solar Ready",
      description: "Renewable energy integration"
    }
  ],
  technicalSpecs: {
    sensors: "Multi-zone infrared proximity detection",
    processor: "ARM Cortex-M4 microcontroller",
    connectivity: "Optional WiFi/Bluetooth module",
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
            <Grid item xs={12} md={6}>
              <Box className="relative h-full">
                <Box 
                  component="img"
                  src={handwashImg1}
                  alt="Intelligent Hand Washing Machine"
                  className="w-full h-full object-cover"
                  sx={{ minHeight: '400px' }}
                />
              </Box>
            </Grid>

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
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ProductSection;
