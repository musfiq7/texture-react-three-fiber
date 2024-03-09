
import React, { useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture,OrbitControls } from '@react-three/drei'



const Cube = ({position,color,size}) =>{
  const colorTexture = useTexture('./textures/ganges_river_pebbles_diff_4k.jpg')
  // const colorTexture = useTexture('./textures/aman.jpg')
  const ref = useRef();
  const [isClicked,setIsClicked] = useState(false);
  
  useFrame((state,delta) =>{
    ref.current.rotation.x += delta 
    ref.current.rotation.y += delta 
    // ref.current.position.z += delta 
  })
  return(
    <>
    <mesh position={[0,0,0]} ref={ref} onClick={() =>setIsClicked(!isClicked)} scale={isClicked ? 2 : 1} >
      <boxGeometry args={size} />
      {/* <torusKnotGeometry/> */}
      {/* <meshStandardMaterial color={isClicked?'green' : color} /> */}
      {/* <meshStandardMaterial color={isClicked?'hotpink' : color} /> */}
      <boxGeometry/>
      <meshBasicMaterial map={colorTexture} />
      <OrbitControls/>
    </mesh>
    </>
  )
  
}

function App() {
  return (
   <div className='hold'>
    {/* <Hold/> */}
    {/* <h1>hello,world</h1> */}
    <div className='left'>
      <h1>This is left</h1>
    </div>
    <div className='right'>
      {/* <h1>This is right</h1> */}
      <Canvas camera={{ position: [0,20,0] , fov: 10}}>
        {/* <ambientLight/> */}
        <directionalLight position={[0,2,0]} intensity={0.9}/>
       <Cube position={[1,0,0]} color={"blue"} size={[1,1,1]}/>

       


      </Canvas>
    </div>
   </div>
  )
}

export default App



// below part is for loading model............................................
//load gltf file..............................................................


// import React from 'react'

// import { Canvas } from '@react-three/fiber'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
// import { Suspense } from "react";


// const Model = () => {
//     const gltf = useLoader(GLTFLoader, "mushroom_new.glb")
//     return (
//         <>
//             <primitive  position={[0, 0, 0]} object={gltf.scene} />
//         </>
//     );
// };







// function App() {
//   return (
//     <>
//     <Canvas>
//         <Suspense>
//             <Model/>
//         </Suspense>

//     </Canvas>
    
//     </>
//   )
// }

// export default App


