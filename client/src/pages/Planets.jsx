import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const planets = [
  {
    name: "Mercury",
    image: "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
    description: "The smallest planet, closest to the Sun."
  },
  {
    name: "Venus",
    image: "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
    description: "A hot planet with a thick, toxic atmosphere."
  },
  {
    name: "Earth",
    image: "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
    description: "Our home planet, blue and full of life."
  },
  // Add more planets...
];

const Planets = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mt: 10 }}>
      {planets.map((planet) => (
        <Card key={planet.name} sx={{ maxWidth: 250, background: '#121212', color: 'white' }}>
          <CardMedia
            component="img"
            height="200"
            image={planet.image}
            alt={planet.name}
          />
          <CardContent>
            <Typography variant="h6">{planet.name}</Typography>
            <Typography variant="body2">{planet.description}</Typography>
            <Button variant="outlined" sx={{ mt: 1, borderColor: 'white', color: 'white' }}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Planets;
