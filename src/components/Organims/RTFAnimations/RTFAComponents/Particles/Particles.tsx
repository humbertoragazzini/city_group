//@ts-nocheck
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react";
import particlesVertexShader from "../../Shaders/particles/vertex.glsl";
import particlesFragmentShader from "../../Shaders/particles/fragment.glsl";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useFrame } from "@react-three/fiber";

export default function Particles({ scale }: any) {
    const { scene } = useGLTF("/RTFA/Models/models.glb");
    const pathname = usePathname();
    const bufferGRef = useRef(null);
    const pointsRef = useRef(null);
    const shaderMaterialRef = useRef();
    const particles = useRef({
        maxCount: 0,
        currentIndex: 0,
        nextIndex: 0,
    });
    const uniforms = useMemo(
        () => ({
            uSize: { value: 0.025 },
            uResolution: {
                value: new THREE.Vector2(
                    window.innerWidth * window.devicePixelRatio,
                    window.innerHeight * window.devicePixelRatio
                ),
            },
            uMixFactor: { value: 0 },
            uColorA: { value: new THREE.Color("#ffff55") },
            uColorB: { value: new THREE.Color("#5500ff") },
        }),
        []
    );

    useLayoutEffect(() => {
        const positions = scene.children
            .filter((child: any) => child.geometry)
            .map((child: any) => child.geometry.attributes.position);
        particles.current.maxCount = Math.max(
            ...positions.map((pos) => pos.count)
        );

        const sizesArray = new Float32Array(particles.current.maxCount);

        for (let i = 0; i < particles.current.maxCount; i++) {
            sizesArray[i] = Math.random(); // Generates a random number between 0 and 1.0
        }

        particles.current.positions = positions.map(
            (pos) => new THREE.Float32BufferAttribute(pos.array, 3)
        );

        if (positions.length > 0) {
            bufferGRef.current.setAttribute("position", positions[0]);
            bufferGRef.current.setAttribute(
                "aPositionTarget",
                positions[1] || positions[0]
            );
            bufferGRef.current.setAttribute(
                "aSizes",
                new THREE.BufferAttribute(sizesArray, 1)
            );
            bufferGRef.current.attributes.position.needsUpdate = true;
        }
        gsap.fromTo(
            pointsRef.current.rotation,
            { x: 0, y: 0, z: 0 },
            { x: 500, y: 350, z: 200, duration: 10000, yoyo: true, repeat: -1 }
        );
    }, [scene]);

    useEffect(() => {
        const handleResize = () => {
            uniforms.uResolution.value.set(
                window.innerWidth * window.devicePixelRatio,
                window.innerHeight * window.devicePixelRatio
            );
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        console.log(particles.current);
        switch (pathname) {
            case "/":
                bufferGRef.current.setAttribute(
                    "position",
                    particles.current.positions[particles.current.currentIndex]
                );
                bufferGRef.current.setAttribute(
                    "aPositionTarget",
                    particles.current.positions[0]
                );
                particles.current.currentIndex = 0;
                bufferGRef.current.attributes.position.needsUpdate = true;
                gsap.fromTo(
                    uniforms.uMixFactor,
                    { value: 0 },
                    { value: 1, duration: 3 }
                );
                break;
            case "/AboutUs":
                bufferGRef.current.setAttribute(
                    "position",
                    particles.current.positions[particles.current.currentIndex]
                );
                bufferGRef.current.setAttribute(
                    "aPositionTarget",
                    particles.current.positions[1]
                );
                particles.current.currentIndex = 1;
                bufferGRef.current.attributes.position.needsUpdate = true;
                gsap.fromTo(
                    uniforms.uMixFactor,
                    { value: 0 },
                    { value: 1, duration: 3 }
                );
                break;
            case "/ContactUs":
                bufferGRef.current.setAttribute(
                    "position",
                    particles.current.positions[particles.current.currentIndex]
                );
                bufferGRef.current.setAttribute(
                    "aPositionTarget",
                    particles.current.positions[2]
                );
                particles.current.currentIndex = 2;
                bufferGRef.current.attributes.position.needsUpdate = true;
                gsap.fromTo(
                    uniforms.uMixFactor,
                    { value: 0 },
                    { value: 1, duration: 3 }
                );
                break;
            case "/OurServices":
                bufferGRef.current.setAttribute(
                    "position",
                    particles.current.positions[particles.current.currentIndex]
                );
                bufferGRef.current.setAttribute(
                    "aPositionTarget",
                    particles.current.positions[3]
                );
                particles.current.currentIndex = 3;
                bufferGRef.current.attributes.position.needsUpdate = true;
                gsap.fromTo(
                    uniforms.uMixFactor,
                    { value: 0 },
                    { value: 1, duration: 3 }
                );
                break;
            default:
                console.log("No matching path.");
        }
    }, [pathname]);

    return (
        <points scale={scale} position={[0, 0, -2]} ref={pointsRef}>
            <bufferGeometry ref={bufferGRef}></bufferGeometry>
            <shaderMaterial
                ref={shaderMaterialRef}
                vertexShader={particlesVertexShader}
                fragmentShader={particlesFragmentShader}
                uniforms={uniforms}
                frustumCulled={false}
                side={THREE.DoubleSide}
            />
        </points>
    );
}
