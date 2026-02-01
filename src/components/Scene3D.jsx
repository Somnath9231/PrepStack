import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import FloatingCube from './FloatingCube'

const Scene3D = () => {
  return (
    <Canvas className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCube position={[-2, 1, 0]} color="#00D9FF" />
      <FloatingCube position={[2, -1, 0]} color="#B026FF" />
      <FloatingCube position={[0, 2, -1]} color="#00FFFF" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default Scene3D
