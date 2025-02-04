"use client";

import { AppProvider } from "@/context/AppContext";
import MainBG from "@/components/Organims/RTFAnimations/MainBG";
export default function AppWraper({ children }: any) {
  return (
    <AppProvider>
      <MainBG></MainBG>
      {children}
    </AppProvider>
  );
}

AppWraper.displayName = "AppWraper";
