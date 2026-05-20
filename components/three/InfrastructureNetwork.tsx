"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const count = 1000;
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Node({ position, color, size = 0.15 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={color}
        emissiveIntensity={hovered ? 1 : 0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function Connection({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Line>(null);

  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  const material = useMemo(() => {
    return new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 });
  }, [color]);

  const line = useMemo(() => {
    return new THREE.Line(geometry, material);
  }, [geometry, material]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return <primitive ref={ref} object={line} />;
}

function ParticleField() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      dummy.position.set(
        particle.position[0] + Math.sin(state.clock.elapsedTime * particle.speed + i) * 2,
        particle.position[1] + Math.cos(state.clock.elapsedTime * particle.speed + i) * 2,
        particle.position[2]
      );
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function Network() {
  const nodes = useMemo(() => [
    { position: [0, 0, 0] as [number, number, number], color: "#00d4ff", size: 0.25 },
    { position: [3, 2, 1] as [number, number, number], color: "#7c3aed", size: 0.18 },
    { position: [-3, 1, -1] as [number, number, number], color: "#00d4ff", size: 0.18 },
    { position: [2, -2, 2] as [number, number, number], color: "#7c3aed", size: 0.15 },
    { position: [-2, -1, 1] as [number, number, number], color: "#00d4ff", size: 0.15 },
    { position: [4, 0, -2] as [number, number, number], color: "#10b981", size: 0.12 },
    { position: [-4, 2, 0] as [number, number, number], color: "#10b981", size: 0.12 },
    { position: [1, 3, -1] as [number, number, number], color: "#ff9f43", size: 0.12 },
    { position: [-1, -3, 2] as [number, number, number], color: "#ff9f43", size: 0.12 },
    { position: [0, 2, 3] as [number, number, number], color: "#00d4ff", size: 0.1 },
    { position: [0, -2, -3] as [number, number, number], color: "#7c3aed", size: 0.1 },
  ], []);

  const connections = useMemo(() => [
    { start: nodes[0].position, end: nodes[1].position, color: "#00d4ff" },
    { start: nodes[0].position, end: nodes[2].position, color: "#00d4ff" },
    { start: nodes[0].position, end: nodes[3].position, color: "#7c3aed" },
    { start: nodes[0].position, end: nodes[4].position, color: "#7c3aed" },
    { start: nodes[1].position, end: nodes[5].position, color: "#10b981" },
    { start: nodes[2].position, end: nodes[6].position, color: "#10b981" },
    { start: nodes[3].position, end: nodes[7].position, color: "#ff9f43" },
    { start: nodes[4].position, end: nodes[8].position, color: "#ff9f43" },
    { start: nodes[1].position, end: nodes[7].position, color: "#00d4ff" },
    { start: nodes[2].position, end: nodes[8].position, color: "#7c3aed" },
    { start: nodes[0].position, end: nodes[9].position, color: "#00d4ff" },
    { start: nodes[0].position, end: nodes[10].position, color: "#7c3aed" },
  ], [nodes]);

  return (
    <group>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} color={node.color} size={node.size} />
      ))}
      {connections.map((conn, i) => (
        <Connection key={i} start={conn.start} end={conn.end} color={conn.color} />
      ))}
      <ParticleField />
      <StarField />
    </group>
  );
}

export default function InfrastructureNetwork() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c3aed" />
        <Network />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
