// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import StarBackground from './components/StarBackground';


function App() {
  return (
    <>
    <StarBackground />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

