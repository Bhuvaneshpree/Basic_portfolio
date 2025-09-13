'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from "@/components/common/Navigation";
import DarkModeToggle from "@/components/common/DarkModeToggle";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <Navigation />
      <DarkModeToggle />
      {children}
      <ScrollToTop />
    </ParallaxProvider>
  );
}
