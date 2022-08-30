import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { TextureLoader, NearestFilter } from "three";
import { BufferAttribute } from "three";
import gsap from "gsap";
const Scene = () => {

  let scrollY = window.scrollY;

  let currSection = 0;
  const cursor = {
    x: 0,
    y: 0,
  };


  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currSection = 0
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / window.innerHeight);
      if (newSection !== currSection) {
        currSection = newSection;
      gsap.to(meshOne.current.rotation, {
          duration: 1.5,
          ease: "power2.inOut",
          x: "+= 2.5",
          y: "+=2.5",
          z:'+= 1.5'
        });
      }
    });
  },[currSection])

  
  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5;
    cursor.y = e.clientY / window.innerHeight - 0.5;
  });

  const distance = 4;
  const meshOne = useRef(null);
  const camera = useRef(null);
  const group = useRef(null);
 

  let prevTime = 0;
  
  const count = 200;
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] =
        distance * 0.5 - Math.random() * distance * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return new BufferAttribute(positions, 3);
  }, [count]);

  useFrame(({ clock }) => {
    const deltaTime = clock.getElapsedTime() - prevTime;
    prevTime = clock.getElapsedTime();
    camera.current.position.y = (-scrollY / window.innerHeight) * 4;
    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;
    group.current.position.y +=
      (parallaxY - group.current.position.y) * 5 * deltaTime;
    group.current.position.x +=
      (parallaxX - group.current.position.x) * 5 * deltaTime;
      meshOne.current.rotation.x += deltaTime * 0.1;
      meshOne.current.rotation.y += deltaTime * 0.15;
    
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
      <directionalLight position={[1, 1, 0]} color="white" />
      <points>
        <bufferGeometry>
          <bufferAttribute attach={"attributes-position"} {...points} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color={0xffeded} sizeAttenuation={true} />
      </points>
      <mesh ref={meshOne} position={[1.3, -distance * 0, 0]}>
        <torusGeometry
          args={[1, 0.4, 16, 100]}
          position={[0, distance * 0, 0]}
        />
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
        zIndex:0
      }}
    >
      <Scene />
    </Canvas>
  );
};

export default Background;
