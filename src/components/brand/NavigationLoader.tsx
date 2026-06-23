"use client";

import { useEffect, useState } from "react";
import { PageLoader } from "@/components/brand/PageLoader";

const INITIAL_MS = 1400;
const EXIT_MS = 400;

export function NavigationLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setExiting(true), INITIAL_MS);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, INITIAL_MS + EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {visible && <PageLoader exiting={exiting} />}
      {children}
    </>
  );
}
