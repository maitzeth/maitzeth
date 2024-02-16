import { Suspense } from 'react';
import { WindowLayout } from './Layout';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei'
import moonTexture from '@/assets/moon.jpg';
import starsBG from '@/assets/starsbg.jpg';

function RotatingMoon() {
  const [colorMap] = useLoader(TextureLoader, [moonTexture]);

  return (
    <>
      <OrbitControls autoRotate />
      <ambientLight intensity={0.1}  />
      {/* <directionalLight /> */}
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
  return (
    <WindowLayout title="Three JS Playground" className="p-0">
      <Canvas
        style={{
          backgroundImage: `url(${starsBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          maxHeight: 600,
        }}
      >
        <Suspense fallback={null}>
          <RotatingMoon />
        </Suspense>
      </Canvas>
    </WindowLayout>
  )
};