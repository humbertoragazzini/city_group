"use client";
import Nav from "@/components/Organims/NavBar/CornerNav";
import Language from "./Language";
import NavBarLBTN from "./NavBarLBTN";

interface iReducedNavBar {
  transforBar: boolean;
  handleOpenMenu: () => void;
}

export default function ReducedNavBar({
  transforBar,
  handleOpenMenu,
}: iReducedNavBar) {
  return (
    <>
      <Nav></Nav>
    </>
  );
}

ReducedNavBar.displayName = "ReducedNavBar";
