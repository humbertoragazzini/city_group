import GlassMorphism from "@/components/Organims/RTFAnimations/RTFAComponents/GlassMorphism/GlassMorphism";

export default function GlassHScreen({ children }: any) {
  return (
    <div className="backdrop-blur-sm bg-[rgba(10,10,10,0.3)] xl:bg-transparent xl:backdrop-blur-none">
      <GlassMorphism></GlassMorphism>
      {children}
    </div>
  );
}

GlassHScreen.displayName = "GlassHScreen";
