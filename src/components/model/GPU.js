import React from "react";

export default function GPU() {
  return (
    <div>
      {" "}
      <Stage environment="city" intensity={0.6}>
        <CPU url="/CPU/final.glb" position={[0, 0, -2]} scale={[1, 1, 1]} />
      </Stage>
    </div>
  );
}
