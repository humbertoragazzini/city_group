"use client";
import { useAppContext } from "@/context/AppContext";
import Nav from "./CornerNav";

export default function ONavBar() {
  const context = useAppContext();

  return (
    <>
      {context.state.isMenuEnable && (
        <div className="fixed h-[0px] top-0 overflow-visible  z-50">
          <Nav></Nav>
        </div>
      )}
    </>
  );
}

ONavBar.displayName = "ONavBar";
