import { Suspense, useState } from 'react';
// import { WindowLayout } from './Layout';
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei'
import moonTexture from '@/assets/moon.jpg';
import starsBG from '@/assets/starsbg.jpg';

function Ball() {
  return (
    <>
      <mesh scale={2.8}>
        <sphereGeometry args={[1, 15, 15]} />
        <meshBasicMaterial wireframe={true} />
      </mesh>
    </>
  );
}

export const Three3DBall = () => {
  return (
    <Canvas
      style={{
        height: 600,
      }}
    >
      <Ball />
      <OrbitControls autoRotate enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  )
};