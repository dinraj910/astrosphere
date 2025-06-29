import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

const Hero = () => {
  return (
    <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stars
          radius={100}        // Star field sphere radius
          depth={50}          // Star field depth
          count={5000}        // Number of stars
          factor={4}          // Size factor
          saturation={0}
          fade
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        {/* Later: add planets here */}
      </Canvas>

      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" sx={{ textShadow: '0 0 10px #00f, 0 0 20px #0ff' }}>
          🌌 Welcome to AstroSphere
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Dive into a 3D cosmic journey
        </Typography>
        <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
          Begin Your Journey
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
