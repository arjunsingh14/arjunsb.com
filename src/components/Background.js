import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { PerspectiveCamera  } from '@react-three/drei'
import { TextureLoader, NearestFilter} from "three";

const Scene = () => {
  let scrollY = window.scrollY
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY
  })
  const distance = 4;
  const meshOne = useRef(null);
  const meshTwo = useRef(null);
  const meshThree = useRef(null);
  const camera = useRef(null)
  const meshArrays = [meshOne, meshTwo, meshThree];
  useFrame(({ clock }) => {
    camera.current.position.y = - scrollY / window.innerHeight * 4
    for (const mesh of meshArrays) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });
  const gradient = useLoader(TextureLoader, "texture1.jpg");
  gradient.magFilter = NearestFilter;
  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[0, 0, 6]}
        fov={35}
        near={0.1}
        far={100}
      />
      <directionalLight position={[1, 1, 0]} />
      <mesh ref={meshOne} position={[1.75, -distance * 0, 0]}>
        <torusGeometry
          args={[1, 0.4, 16, 100]}
          position={[0, distance * 0, 0]}
        />
        <meshToonMaterial gradientMap={gradient} color="#ffeded" />
      </mesh>
      <mesh ref={meshTwo} position={[-1.75, -distance * 1, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshToonMaterial gradientMap={gradient} color="#ffeded" />
      </mesh>
      <mesh ref={meshThree} position={[1.75, -distance * 2, 0]}>
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
        <meshToonMaterial gradientMap={gradient} color="#ffeded" />
      </mesh>
    </>
  );
};

const Background = () => {
  return (
    <Canvas
      className="webgl"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        outline: "none",
        overflow: "none",
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default Background;
