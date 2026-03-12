"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-sm px-6 text-center">
        <p className="mb-3 text-base font-semibold tracking-wide text-slate-200">
          Loading...
        </p>
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-800/80">
          <div className="h-full animate-progress rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
