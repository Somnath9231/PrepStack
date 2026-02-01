import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const CodeBrackets = ({ position, color = '#00D9FF' }) => {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y = Math.sin(time * 0.5 + position[0]) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Left bracket */}
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.2, 0.4, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.2, -0.4, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      {/* Right bracket */}
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 0.4, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, -0.4, 0]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

const StackLayers = ({ position, color = '#B026FF' }) => {
  const groupRef = useRef(null)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2
      groupRef.current.position.y = position[1] + Math.cos(time * 0.5) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {[0, 0.2, 0.4].map((offset, i) => (
        <mesh key={i} position={[0, offset, 0]}>
          <boxGeometry args={[0.6, 0.1, 0.6]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.4}
            opacity={1 - offset * 0.5}
            transparent
          />
        </mesh>
      ))}
    </group>
  )
}

const FloatingCube = ({ position, color = '#00D9FF' }) => {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5 + position[1]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

const EnhancedScene3D = () => {
  return (
    <Canvas className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCube position={[-2, 1, 0]} color="#00D9FF" />
      <FloatingCube position={[2, -1, 0]} color="#B026FF" />
      <FloatingCube position={[0, 2, -1]} color="#00FFFF" />
      <CodeBrackets position={[-1, -2, -0.5]} color="#00D9FF" />
      <CodeBrackets position={[1, 2, -0.5]} color="#B026FF" />
      <StackLayers position={[0, -1, -1]} color="#00FFFF" />
    </Canvas>
  )
}

export default EnhancedScene3D
