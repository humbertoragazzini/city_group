// context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppState {
  isMenuOpen: boolean;
  language: "EN" | "ES" | "CH" | "IT";
}

interface AppContextProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>({
    isMenuOpen: false,
    language: "EN",
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
