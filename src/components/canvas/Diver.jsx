import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const DiverModel = ({isMobile}) => {
  const computer = useGLTF('./diver3d/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor='black' />
      <pointLight intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.007 : 0.75}
        position={isMobile ? [0.01, 0.01, -0.5] : [0.01, 0.5, 0.01]}
        //rotation={isMobile ? [0.4, 1, -0.4] : [0.4, 1, -0.4]}
        rotation={isMobile ? [0.01, 2, 2] : [-0.6, 1, 0.5]}
      />
       <hemisphereLight intensity={0.8} groundColor='black'
        position={[0, -6, -1.5]}
       />
    </mesh>
  )
}

const DiverCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed = {0.25}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI /2}
          maxAzimuthAngle = {Math.PI / 2 + 1}
          minAzimuthAngle = {Math.PI / 2 -1}
          />
        <DiverModel isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default DiverCanvas
