import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';


export default function App() {
  const [active, setActive] = useState(false);
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [position, setPosition] = useState(0);
  const [click, setClick] = useState(false);
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);

  const myMesh = useRef();

  function Box(props) {

    useFrame(() => {
      //const a = clock.getElapsedTime()
      //myMesh.current.rotation.y = 


      myMesh.current.rotation.y = locationX/20;
      myMesh.current.rotation.x = locationY/20;
   
      
    })
    
    return (
      <mesh  {...props}
      onClick={(event) => setActive(!active)}
      ref={myMesh}
      onPointerMove={(e) => {setLocationX(e.locationX); setLocationY(e.locationY)}}
      rotation={[0, 0, 0]}
      >
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color={'#4b176d'} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </mesh>
    );
  }

  return <Canvas>
        <Box position={[0, 0, 0]} />
  </Canvas>;
}
