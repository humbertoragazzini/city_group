// @ts-nocheck

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import particlesVertexShader from "../../Shaders/particles/vertex.glsl";
import particlesFragmentShader from "../../Shaders/particles/fragment.glsl";

export default function Particles({ scale }: any) {
	const [theObject, setTheObject] = useState<THREE.Points | null>(null);
	const { scene } = useGLTF("/RTFA/Models/models.glb");

	useEffect(() => {
		const particles: any = {
			maxCount: 0,
			positions: [],
			geometry: null,
			material: null,
		};

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
			pixelRatio: Math.min(window.devicePixelRatio, 2),
		};

		// Extracting positions from the GLTF
		const positions = scene.children
			.filter((child: any) => child.geometry)
			.map((child: any) => child.geometry.attributes.position);

		if (positions.length > 0) {
			particles.maxCount = Math.max(...positions.map((pos) => pos.count));

			const sizesArray = new Float32Array(particles.maxCount).fill(1.0);
			particles.positions = positions.map(
				(pos) => new THREE.Float32BufferAttribute(pos.array, 3)
			);

			// Geometry
			particles.geometry = new THREE.BufferGeometry();
			particles.geometry.setAttribute("position", particles.positions[0]);
			particles.geometry.setAttribute(
				"aPositionTarget",
				particles.positions[1] || particles.positions[0]
			);
			particles.geometry.setAttribute(
				"aSizes",
				new THREE.BufferAttribute(sizesArray, 1)
			);

			// Material
			particles.material = new THREE.ShaderMaterial({
				vertexShader: particlesVertexShader,
				fragmentShader: particlesFragmentShader,
				uniforms: {
					uSize: { value: 0.05 },
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

			// Points
			particles.points = new THREE.Points(
				particles.geometry,
				particles.material
			);
			particles.points.frustumCulled = false;

			// Set the points to the state
			setTheObject(particles.points);

			// method
			particles.morph = (index) => {
				// update attributes
				particles.geometry.attributes.position =
					particles.positions[particles.index];
				particles.geometry.attributes.aPositionTarget =
					particles.positions[index];

				// animate mixFactor
				gsap.fromTo(
					particles.material.uniforms.uMixFactor,
					{ value: 0 },
					{ value: 1, duration: 3, ease: "lineal" }
				);

				// particles index
				particles.index = index;
			};

			particles.morph0 = () => {
				particles.morph(0);
			};
			particles.morph1 = () => {
				particles.morph(1);
			};
			particles.morph2 = () => {
				particles.morph(2);
			};
			particles.morph3 = () => {
				particles.morph(3);
			};
		}
		let counter = 0;
		setInterval(() => {
			particles.morph(counter);
			counter == 3 ? (counter = 0) : counter++;
		}, 5500);
		console.log(particlesVertexShader);
		console.log(particlesFragmentShader);
	}, [scene]);

	return (
		<group scale={scale}>
			{theObject && <primitive scale={0.05} object={theObject} />}
		</group>
	);
}
