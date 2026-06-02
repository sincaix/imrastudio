"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF(
    "/projects/homepage/3D Preview Asset.glb"
  );

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <primitive object={scene} scale={0.8} position={[0.8, 0, 0]} />
    </Float>
  );
}

export default function HeroModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
      />

      <Environment preset="city" />

      <Model />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={1.2}
        />
    </Canvas>
  );
}