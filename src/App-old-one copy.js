
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
// import './App.css';
import { BoxGeometry, Mesh, MeshLambertMaterial } from 'three';
import { Suspense } from 'react';
import { extend } from '@react-three/fiber'



const Box =() =>{
  return (
    <mesh>
    <boxGeometry attach="geometry" args={[1, 1, 1]} />
    <meshBasicMaterial attach="material" color='hotpink'  />
   </mesh>
  )
}



const App =() => {
  return (

    <Canvas>
     <Suspense fallback={null}>
     <Box  position={[0, 0, 0]} />
     <OrbitControls />
    
		{/* <Stars position={[-1.2, 0, -6]}/> */}

     </Suspense>
    </Canvas>
  
  );
}

export default App;


