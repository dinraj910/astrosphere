// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Layout = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AstroSphere
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/iss">ISS</Button>
            <Button color="inherit" component={Link} to="/planets">Planets</Button>
            <Button color="inherit" component={Link} to="/apod">APOD</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
