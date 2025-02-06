import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import gsap from "gsap";
import particlesVertexShader from "../../Shaders/particles/vertex.glsl";
import particlesFragmentShader from "../../Shaders/particles/fragment.glsl";
import { useGLTF } from "@react-three/drei";
export default function Particles({ scale }: any) {
	function Model({ url }: { url: string }) {
		const { scene } = useGLTF(url);

		const particles = {
			index: 0,
			positions: [] as THREE.BufferAttribute[],
			geometry: null as THREE.BufferGeometry | null,
			material: null as THREE.ShaderMaterial | null,
			points: null as THREE.Points | null,
		};

		const sizes = {
			width: typeof window !== "undefined" ? window.innerWidth : 1920,
			height: typeof window !== "undefined" ? window.innerHeight : 1080,
			pixelRatio:
				typeof window !== "undefined"
					? Math.min(window.devicePixelRatio, 2)
					: 1,
		};
		console.log(sizes);
		const positions = scene.children
			.filter((child) => (child as THREE.Mesh).geometry)
			.map((child) => (child as THREE.Mesh).geometry.attributes.position);
		console.log(positions);
		if (positions.length > 0) {
			particles.index = 0;
			particles.positions = positions.map(
				(pos) => new THREE.Float32BufferAttribute(pos.array, 3)
			);

			const sizesArray = new Float32Array(positions[0].count).fill(1.0);

			particles.geometry = new THREE.BufferGeometry();
			particles.geometry.setAttribute(
				"position",
				particles.positions[particles.index]
			);
			particles.geometry.setAttribute(
				"aPositionTarget",
				particles.positions[3] || particles.positions[0]
			);
			particles.geometry.setAttribute(
				"aSizes",
				new THREE.BufferAttribute(sizesArray, 1)
			);

			particles.material = new THREE.ShaderMaterial({
				vertexShader: particlesVertexShader,
				fragmentShader: particlesFragmentShader,
				uniforms: {
					uSize: { value: 0.2 },
					uResolution: {
						value: new THREE.Vector2(
							sizes.width * sizes.pixelRatio,
							sizes.height * sizes.pixelRatio
						),
					},
					uMixFactor: { value: 0 },
					uColorA: { value: new THREE.Color("#ffff55") },
					uColorB: { value: new THREE.Color("#5500ff") },
				},
				blending: THREE.AdditiveBlending,
				depthWrite: false,
			});

			particles.points = new THREE.Points(
				particles.geometry,
				particles.material
			);
			particles.points.frustumCulled = false;
		}
		console.log(particles.points);
		return <primitive object={particles.points || scene} />;
	}

	return (
		<group scale={scale}>
			<mesh scale={0.5}>
				<Model url="/RTFA/Models/models.glb" />
			</mesh>
		</group>
	);
}
