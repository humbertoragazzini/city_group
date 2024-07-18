import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";

export default function GlassHScreen({ children }: any) {
  return (
    <div className="relative backdrop-blur-lg bg-[rgba(10,10,10,0.3)] md:bg-transparent md:backdrop-blur-none">
      <GlassMorphism></GlassMorphism>
      {children}
    </div>
  );
}

GlassHScreen.displayName = "GlassHScreen";
