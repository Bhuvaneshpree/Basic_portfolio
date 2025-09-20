'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from "@/components/common/Navigation";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <Navigation />
      {children}
      <ScrollToTop />
    </ParallaxProvider>
  );
}
