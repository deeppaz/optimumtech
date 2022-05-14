import React, { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model({ url, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Material}
        geometry={nodes.Object_2.geometry}
        material-envMapIntensity={0.8}
      />
      <mesh
        material={materials.Material_Untitled}
        geometry={nodes.Object_3.geometry}
        material-envMapIntensity={0.8}
      />
    </group>
  )
}
