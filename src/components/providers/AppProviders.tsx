"use client";

import { NavigationLoader } from "@/components/brand/NavigationLoader";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <NavigationLoader>{children}</NavigationLoader>;
}
