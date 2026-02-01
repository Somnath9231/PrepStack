import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const FloatingCube = ({ position, color = '#00D9FF' }) => {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      
      // Floating animation
      const time = state.clock.elapsedTime
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

export default FloatingCube
