import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import Rig from '../components/fiber/Rig'

export default function About() {
  return (
    <>
      {" "}
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Rig>
        <Text
          color="black"
          anchorX="center"
          anchorY="middle"
          fontSize={0.19}
          scale={1.2}
          maxWidth={5.68}
          curveRadius={3.6}
          outlineWidth={0.0001}
          outlineOpacity={1}
          outlineColor="whitesmoke"
          outlineOffsetX={-0.02}
          outlineOffsetY={0.01}
          outlineBlur={0.05}
          strokeOpacity={0.52}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        </Rig>
      </Canvas>
    </>
  );
}
