import { ReactNode } from "react";
import { ThemeProvider } from "../app/context/ThemeContext";
import "../app/globals.css"; // Import your global styles
import NavBar from "./components/NavBar";

export const metadata = {
  title: 'BrainBuster',
  description: 'An awesome quiz app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar /> {/* This ensures NavBar gets access to ThemeContext */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
