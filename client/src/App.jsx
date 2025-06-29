// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StarBackground from './components/StarBackground';


function App() {
  return (
    <>
    <StarBackground />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

