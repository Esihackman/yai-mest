import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Box, Paper, Avatar, Rating } from '@mui/material';
import { FormatQuote, Engineering, School, Factory, Construction } from '@mui/icons-material';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "John Assuah's electronic safety innovations have transformed our approach to worker protection. His custom-designed tracking systems have reduced workplace incidents by 78% in our mining operations.",
      author: "Dr. Kwame Mensah",
      position: "Head of Safety, Ghana Mining Corporation",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      rating: 5,
      icon: <Engineering fontSize="large" />,
      color: "blue"
    },
    {
      quote: "The Intelligent Hand-Washing Machine designed by Assuah's Robotics provides our workers with a seamless hygiene solution. The automated system ensures effective hand sanitization, significantly improving workplace safety standards.",
      author: "Abena Osei",
      position: "Project Manager, Accra Development Authority",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      rating: 5,
      icon: <Construction fontSize="large" />,
      color: "amber"
    },
    {
      quote: "As an educator, I've witnessed firsthand how John's innovations are inspiring the next generation of engineers. His electronic safety solutions demonstrate the perfect blend of technical expertise and practical application.",
      author: "Prof. Joseph Abaidoo",
      position: "Dean of Engineering, Takoradi Technical University",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
      rating: 5,
      icon: <School fontSize="large" />,
      color: "green"
    },
    {
      quote: "The integrated circuit technology in Assuah's safety vests has revolutionized how we monitor worker health in high-temperature environments. The precision of the sensors is remarkable.",
      author: "Emmanuel Darko",
      position: "Operations Director, West African Steel",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      rating: 5,
      icon: <Factory fontSize="large" />,
      color: "purple"
    }
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-700",
      amber: "from-amber-500 to-amber-700",
      green: "from-green-500 to-green-700",
      purple: "from-purple-500 to-purple-700"
    };
    return gradients[color];
  };

  const getColor = (color) => {
    const colors = {
      blue: "#1565C0",
      amber: "#F59E0B",
      green: "#10B981",
      purple: "#9333EA"
    };
    return colors[color];
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            className="text-4xl md:text-5xl font-bold mb-4"
            sx={{ 
              background: 'linear-gradient(to right, #1565C0, #0D47A1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Client Testimonials
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who have experienced the impact of our electronic safety innovations
          </Typography>
          <Box className="w-24 h-1 bg-blue-600 mx-auto mt-6"></Box>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper 
                  elevation={2} 
                  className="h-full p-6 rounded-xl overflow-hidden relative"
                >
                  <Box 
                    className={`absolute top-0 right-0 w-24 h-24 rounded-full -mt-12 -mr-12 bg-gradient-to-br ${getGradient(testimonial.color)} opacity-10`}
                  />
                  
                  <Box className="flex items-start mb-4">
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        mr: 2,
                        border: `2px solid ${getColor(testimonial.color)}`
                      }}
                    />
                    <Box>
                      <Typography variant="h6" className="font-bold">
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        {testimonial.position}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly size="small" className="mt-1" />
                    </Box>
                    <Box 
                      className="ml-auto p-2 rounded-full"
                      sx={{ 
                        color: getColor(testimonial.color),
                        backgroundColor: `${getColor(testimonial.color)}15`
                      }}
                    >
                      {testimonial.icon}
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" className="text-gray-700 italic mb-4 relative">
                    <FormatQuote 
                      sx={{ 
                        fontSize: 40, 
                        color: `${getColor(testimonial.color)}30`,
                        position: 'absolute',
                        top: -10,
                        left: -8,
                        transform: 'rotate(180deg)'
                      }} 
                    />
                    <span className="ml-6">{testimonial.quote}</span>
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </Container>
    </section>
  );
}
