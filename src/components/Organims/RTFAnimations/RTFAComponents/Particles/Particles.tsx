export default function Particles({ scale }: any) {
	return (
		<group scale={scale}>
			<mesh scale={0.485} renderOrder={2} position={[0, 0, 1]}>
				<boxGeometry args={[2, 2, 1]}></boxGeometry>
				<meshStandardMaterial color={"red"}></meshStandardMaterial>
			</mesh>
		</group>
	);
}
