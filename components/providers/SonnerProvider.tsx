"use client";

import { Toaster } from "sonner";

export default function SonnerProvider() {
  return (
    <Toaster
      position="top-right"
      richColors
      theme="dark"
      toastOptions={{
        className: "text-sm",
      }}
    />
  );
}

