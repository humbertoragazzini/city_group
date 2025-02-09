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
    });
    const uniforms = useMemo(
        () => ({
            uSize: { value: 0.01 },
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

        const sizesArray = new Float32Array(particles.current.maxCount).fill(
            1.0
        );

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
                break;
            case "/AboutUs":
                break;
            case "/ContactUs":
                break;
            case "/OurServices":
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
