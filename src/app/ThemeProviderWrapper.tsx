"use client";

import { ThemeProvider } from "../app/context/ThemeContext";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
