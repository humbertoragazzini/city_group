"use client";

export function SpotLight({ lightRef }: any) {
  return (
    <pointLight
      position={[-200, 0, 25]}
      rotation={[0, 0, 0]}
      ref={lightRef}
      color={"grey"}
      intensity={200000}
      castShadow
      shadow-mapSize={1024}
    />
  );
}
