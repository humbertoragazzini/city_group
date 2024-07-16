"use client";

import { AppProvider } from "@/context/AppContext";

export default function AppWraper({ children }: any) {
  return <AppProvider>{children}</AppProvider>;
}

AppWraper.displayName = "AppWraper";
