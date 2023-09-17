'use client'
import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <h1 data-text="Hover and wave 🌊" className="text-7xl relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-sky-400 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave">
      Hover and wave 🌊
    </h1>
  </div>
 )
}

export default Loading