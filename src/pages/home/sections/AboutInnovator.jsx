import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Box, Paper, Avatar } from '@mui/material';
import { Engineering, School, Psychology, Lightbulb } from '@mui/icons-material';
import innovatorImage from '../../../images/innovator.png';

export default function About() {
  const achievements = [
    {
      icon: <School fontSize="large" className="text-amber-600" />,
      title: 'Educational Excellence',
      description: 'HND and B-TECH in Electrical and Electronic Engineering from Takoradi Technical University'
    },
    {
      icon: <Psychology fontSize="large" className="text-amber-600" />,
      title: 'Teaching Experience',
      description: 'Served as a Teaching Assistant, sharing knowledge with students and faculty'
    },
    {
      icon: <Engineering fontSize="large" className="text-amber-600" />,
      title: 'Technical Expertise',
      description: '12+ years of experience in IC Programming and Design'
    },
    {
      icon: <Lightbulb fontSize="large" className="text-amber-600" />,
      title: 'Innovation Focus',
      description: 'Pioneering solutions in worker protection and safety technology'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography 
            variant="h2" 
            component="h2" 
            className="text-4xl md:text-5xl font-bold mb-4"
            sx={{ 
              background: 'linear-gradient(to right, #1565C0, #0D47A1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Meet the Innovator
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-2xl mx-auto mb-6">
            Discover the journey and innovations of John Assuah, a pioneer in safety technology from Sekondi-Takoradi.
          </Typography>
          <Box className="w-24 h-1 bg-blue-600 mx-auto"></Box>
        </motion.div>

        <Grid container spacing={8} alignItems="center">
          {/* Innovator Image - Left side on desktop */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Box 
                className="absolute inset-0 bg-blue-100 rounded-full transform rotate-6"
                sx={{ zIndex: 0 }}
              ></Box>
              <Box 
                className="absolute inset-0 bg-amber-100 rounded-full transform -rotate-6"
                sx={{ zIndex: 0 }}
              ></Box>
              <Box 
                component="img"
                src={innovatorImage}
                alt="John Assuah"
                className="relative rounded-full w-full aspect-square object-cover shadow-xl border-4 border-white"
                sx={{ zIndex: 1 }}
              />
              <Box 
                className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                sx={{ zIndex: 2 }}
              >
                <Typography variant="h6">Founder & CEO</Typography>
                <Typography variant="body2">Assuah's Robotics</Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Content - Right side on desktop */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Paper elevation={2} className="p-6 rounded-xl bg-white">
                <Typography variant="h4" className="text-blue-800 font-bold mb-4">
                  Professional Journey
                </Typography>
                <Typography variant="body1" className="text-gray-700 leading-relaxed">
                  John Assuah is the visionary founder of Assuah Robotics, bringing his expertise as an electrical/electronic engineer to innovate tech gadgets that enhance lives. His journey began at Takoradi Technical Institute in 2007, mentored by Nana Mburaenu (Mr. Joseph Abaidoo Myles).
                </Typography>
              </Paper>

              <Box className="bg-blue-800 text-white p-6 rounded-xl shadow-lg">
                <Typography variant="h5" className="font-bold mb-3">
                  Vision & Impact
                </Typography>
                <Typography variant="body1" className="leading-relaxed">
                  John's groundbreaking solutions set new standards in worker protection, blending technology with practical safety measures. His consultancy expertise spans professionals from HND holders to PhD experts, making a significant impact across the engineering spectrum.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <Typography variant="h4" className="text-center font-bold text-gray-800 mb-10">
            Achievements & Expertise
          </Typography>
          
          <Grid container spacing={4}>
            {achievements.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper 
                    elevation={3} 
                    className="h-full p-6 rounded-xl text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <Avatar 
                      className="mx-auto mb-4 bg-blue-50 text-blue-600"
                      sx={{ width: 64, height: 64 }}
                    >
                      {item.icon}
                    </Avatar>
                    <Typography variant="h6" className="font-bold mb-2 text-blue-800">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600">
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Box className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-amber-50 p-8 rounded-xl relative">
            <Box className="text-6xl text-blue-200 absolute top-4 left-4">"</Box>
            <Typography variant="h5" className="italic text-gray-700 relative z-10 px-8">
              My mission is to create technology that not only protects workers but empowers them to perform at their best, knowing they are safe in any environment.
            </Typography>
            <Box className="text-6xl text-blue-200 absolute bottom-4 right-4">"</Box>
            <Typography variant="subtitle1" className="mt-4 font-semibold text-blue-800">
              - John Assuah
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
