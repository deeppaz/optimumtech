import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  BakeShadows,
  Bounds,
  useBounds,
  OrbitControls,
  ContactShadows,
  useGLTF,
  Stage,
  Text,
  ScrollControls,
  Scroll
} from "@react-three/drei";
import OverlayPages from "../pages/Overlay";
import GPU from "../components/gltf/GPU";
import CPU from "../components/gltf/CPU";
import Rig from "../components/fiber/Rig";
import Loader from "../components/loader";

// function Caption({ children }) {
//   const { width } = useThree((state) => state.viewport)
//   return (
//     <Text
//       position={[0, 0, -5]}
//       lineHeight={0.8}
//       font="/Ki-Medium.ttf"
//       fontSize={width / 8}
//       material-toneMapped={false}
//       anchorX="center"
//       anchorY="middle">
//       {children}
//     </Text>
//   )
// }

export default function Main() {
  return (
    <>
      <OverlayPages />
      <Canvas camera={{ fov: 30 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={1} />
        <hemisphereLight
          color="#ffffff"
          groundColor="#b9b9b9"
          position={[-7, 25, 13]}
          intensity={1}
        />
        <Suspense fallback={<Loader />}>
          <Stage>
            <GPU
              name="Headphones"
              url="/GPU/final.glb"
              position={[50, 0, -5]}
              rotation={[4, 1, 0]}
              scale={30}
            />
            <CPU
              name="Rocket003"
              url="/CPU/final.glb"
              position={[1, 5, -25]}
              rotation={[12, 1, 0]}
              scale={4}
            />
            <GPU
              name="VR_Headset"
              url="/GPU/final.glb"
              position={[7, -15, 28]}
              rotation={[1, 0, -1]}
              scale={20}
            />
            <CPU
              name="Rocket0023"
              url="/CPU/final.glb"
              position={[50, -25, 60]}
              rotation={[10, 1, 0]}
              scale={4}
            />
          </Stage>

          <BakeShadows />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
          makeDefault
          autoRotate
          autoRotateSpeed={0.7}
        />
      </Canvas>
    </>
  );
}
