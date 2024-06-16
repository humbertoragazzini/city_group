import { Box } from "@react-three/drei";

export default function BasicBox() {
  return (
    <Box position={[-1.2, 0, 0]}>
      <meshStandardMaterial attach="material" color="orange" />
    </Box>
  );
}
