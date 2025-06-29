import { Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import bgImg from '../assets/galaxy_bg.jpg';
import '../App.css'; // Import the CSS file for global styles 
import Planets from './Planets'; // Import the Planets component  

const Home = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          px: 3,
          position: 'relative',
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
            opacity: 0.3,
            zIndex: -1,
          }}
        />

        {/* Hero content */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            🌌 Welcome to AstroSphere
          </Typography>
          <Typography variant="h5" sx={{ color: '#ddd' }}>
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

      {/* Planets Section */}
      <Planets />
    </Box>
  );
};

export default Home;
