import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";

const StarBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1f51ff,
      backgroundColor: 0x0b1a28,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100%", position: "fixed", zIndex: -20 }} />;
};

export default StarBackground;
