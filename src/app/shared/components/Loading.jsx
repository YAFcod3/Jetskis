"use client";
import React from "react";

function Loading() {
  return (
    <div className="relative" style={{ top: "86px" }}>
      <div className="py-24 h-screen">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loading;
