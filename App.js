import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function App() {

  function Box(props) {
    const [active, setActive] = useState(false);

    return (
      <mesh  {...props}
      onClick={(event) => setActive(!active)}
      scale={active ? 1.5 : 1}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#ff0040'} />
        <ambientLight />
        <pointLight position={[12, 12, 12]} />
      </mesh>
    );
  }

  return <Canvas>
        <Box position={[1, 1.2, 0]} />
        <Box position={[-1, 1.2, 0]} />
        <Box position={[1, -1.2, 0]} />
        <Box position={[-1, -1.2, 0]} />
  </Canvas>;
}
