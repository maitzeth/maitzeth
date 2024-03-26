import { Suspense, useState } from 'react';
import { WindowLayout } from './Layout';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei'
import moonTexture from '@/assets/moon.jpg';
import starsBG from '@/assets/starsbg.jpg';

function RotatingMoon({ isRotating }: { isRotating: boolean }) {
  const [colorMap] = useLoader(TextureLoader, [moonTexture]);

  return (
    <>
      <OrbitControls autoRotate={isRotating} />
      <ambientLight intensity={0.08}  />
      <directionalLight color="white" position={[1, 1, 1]} />
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 200, 200]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
        />
      </mesh>
    </>
  );
}

export const Three = () => {    
  const [isRotating, setIsRotating] = useState(true);
  
  return (
    <WindowLayout title="Three JS Playground" className="p-0 relative">
      <button
        type="button"
        className="bg-white rounded-lg absolute top-5 left-1 z-10 px-10 py-2"
        onClick={() => {
          setIsRotating(!isRotating);
        }}
      >
        {isRotating ? 'Stop' : 'Start'} Rotation
      </button>
      <Canvas
        style={{
          backgroundImage: `url(${starsBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          maxHeight: 600,
        }}
      >
        <Suspense fallback={null}>
          <RotatingMoon isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </WindowLayout>
  )
};