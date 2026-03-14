"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loading from "./Loading";

const INITIAL_DELAY_MS = 450;
const ROUTE_DELAY_MS = 280;

export default function PageTransitionLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasMountedRef = useRef(false);
  const cycleRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  const routeKey = `${pathname}?${searchParams?.toString() ?? ""}`;

  useEffect(() => {
    cycleRef.current += 1;
    const currentCycle = cycleRef.current;
    setIsLoading(true);

    const delay = hasMountedRef.current ? ROUTE_DELAY_MS : INITIAL_DELAY_MS;
    const timer = setTimeout(() => {
      if (cycleRef.current !== currentCycle) return;
      setIsLoading(false);
      hasMountedRef.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [routeKey]);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}
