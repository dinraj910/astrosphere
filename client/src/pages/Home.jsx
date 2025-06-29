import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import bgImg from '../assets/galaxy_bg.jpg';

const Home = () => {
  console.log("Background image URL:", bgImg);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        textAlign: 'center',
        px: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Galaxy background image */}
      <img
        src={bgImg}
        alt="Galaxy"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,    // <-- Lower opacity to make it dark
          zIndex: -10,
          filter: 'brightness(1.1) contrast(1.2)',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          opacity: 0.1,   // <-- adjust to make it darker or lighter
          zIndex: -1,
        }}
        
      ></div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          🌌 Welcome to AstroSphere
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Explore the cosmos like never before. Real-time space data, planets, missions, and more.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ marginTop: '2rem' }}
      >
        <Button variant="contained" color="primary" size="large">
          BEGIN YOUR JOURNEY
        </Button>
      </motion.div>
    </Box>

  );
};

export default Home;
