import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { TextureLoader, NearestFilter } from "three";
import { BufferAttribute } from "three";
const Scene = () => {
  let scrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  });

  const cursor = {
    x: 0,
    y: 0,
  };

  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5;
    cursor.y = e.clientY / window.innerHeight - 0.5;
  });

  const distance = 4;
  const meshOne = useRef(null);
  const meshTwo = useRef(null);
  const meshThree = useRef(null);
  const camera = useRef(null);
  const group = useRef(null);
  const meshArrays = [meshOne, meshTwo, meshThree];

  let prevTime = 0

  const count = 200;
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = distance * 0.5 - Math.random() * distance * meshArrays.length;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return new BufferAttribute(positions, 3);
  }, [count]);

  useFrame(({ clock }) => {
    const deltaTime = clock.getElapsedTime() - prevTime
    prevTime = clock.getElapsedTime()
    camera.current.position.y = (-scrollY / window.innerHeight) * 4;
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;
    group.current.position.y += (parallaxY - group.current.position.y) * 5 * deltaTime;
    group.current.position.x += (parallaxX - group.current.position.x) * 5 * deltaTime;
    for (const mesh of meshArrays) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  const gradient = useLoader(TextureLoader, "texture1.jpg");
  gradient.magFilter = NearestFilter;

  

  return (
    <>
      <group ref={group}>
        <PerspectiveCamera
          ref={camera}
          makeDefault
          position={[0, 0, 5]}
          fov={35}
          near={0.1}
          far={100}
        />
      </group>
      <directionalLight position={[1, 1, 0]} />
      <points>
        <bufferGeometry>
          <bufferAttribute attach={"attributes-position"} {...points} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color={0xffeded} sizeAttenuation={true} />
      </points>
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
        overflow: "hidden",
      }}
    >
      <Scene />
    </Canvas>
    
  );
};

export default Background;
