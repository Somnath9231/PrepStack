import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const FloatingShape = ({ position, color, shape = 'box' }) => {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'box' ? (
        <boxGeometry args={[0.5, 0.5, 0.5]} />
      ) : shape === 'sphere' ? (
        <sphereGeometry args={[0.3, 16, 16]} />
      ) : (
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
      )}
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <FloatingShape position={[-3, 2, -2]} color="#00D9FF" shape="box" />
        <FloatingShape position={[3, -2, -2]} color="#B026FF" shape="sphere" />
        <FloatingShape position={[0, 3, -1]} color="#00FFFF" shape="torus" />
        <FloatingShape position={[-2, -3, -2]} color="#00D9FF" shape="sphere" />
        <FloatingShape position={[2, 1, -1]} color="#B026FF" shape="box" />
      </Canvas>
    </div>
  )
}

export default Background3D
