import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html color="black" center>
      {progress} % loaded
    </Html>
  );
}
