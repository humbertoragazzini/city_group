// @ts-nocheck
"use client";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import particlesVertexShader from "../../Shaders/particles/vertex.glsl";
import particlesFragmentShader from "../../Shaders/particles/fragment.glsl";
import gsap from "gsap";
import { useRouter, usePathname } from "next/navigation";
export default function Particles({ scale }: any) {
	const [theObject, setTheObject] = useState<THREE.Points | null>(null);
	const { scene } = useGLTF("/RTFA/Models/models.glb");
	const pathname = usePathname();
	const groupRef = useRef(null);
	const meshRef = useRef(null);
	const materialRef = useRef(null);
	const bufferGRef = useRef(null);
	const pointsRef = useRef(null);
	const shaderMaterialRef = useRef();
	const particles: any = useRef({
		maxCount: 0,
		positions: [],
		geometry: null,
		material: null,
		morph: (number) => {},
	});

	useEffect(() => {
		const positions = scene.children
			.filter((child: any) => child.geometry)
			.map((child: any) => child.geometry.attributes.position);

		console.log(positions);
	}, []);

	return (
		<group scale={scale}>
			{/*theObject && (
				<primitive scale={0.13} ref={groupRef} object={theObject} />
			)*/}
			<mesh scale={0.08} ref={meshRef}>
				<points ref={pointsRef}>
					<bufferGeometry ref={bufferGRef}></bufferGeometry>
					<shaderMaterial
						ref={shaderMaterialRef}
						vertexShader={particlesVertexShader}
						fragmentShader={particlesFragmentShader}
						uniforms={{
							uSize: { value: 0.1 },
							uResolution: {
								value: new THREE.Vector2(
									window.innerWidth * window.devicePixelRatio,
									window.innerHeight * window.devicePixelRatio
								),
							},
							uMixFactor: { value: 0 },
							uColorA: { value: new THREE.Color("#ffff55") },
							uColorB: { value: new THREE.Color("#5500ff") },
						}}
						side={THREE.DoubleSide}
					/>
				</points>
			</mesh>
		</group>
	);
}
