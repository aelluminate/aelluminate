"use client"

import * as React from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

// Hex color for the marker
const MARKER_HEX = "#fff2af"

// Function to convert hex code to RGB (normalized 0-1 for cobe)
function hexToRgb(hex: string): [number, number, number] | null {
  // Remove the hash if it's there
  hex = hex.replace("#", "")

  // Handle shorthand form (e.g. "03F")
  if (hex.length === 3) {
    hex =
      hex.charAt(0).toString() +
      hex.charAt(0).toString() +
      hex.charAt(1).toString() +
      hex.charAt(1).toString() +
      hex.charAt(2).toString() +
      hex.charAt(2).toString()
  }

  // Parse the hex values
  const rHex = hex.substring(0, 2)
  const gHex = hex.substring(2, 4)
  const bHex = hex.substring(4, 6)

  // Convert hex to decimal and then normalize to 0-1 range
  const r = parseInt(rHex, 16) / 255
  const g = parseInt(gHex, 16) / 255
  const b = parseInt(bHex, 16) / 255

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null // Or handle error as needed
  }

  return [r, g, b]
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1], // White base color (RGB)
  markerColor: hexToRgb(MARKER_HEX) || [1, 0, 0], // Converted Hex to RGB, fallback to red if conversion fails
  glowColor: [1, 1, 1], // White glow color (RGB)
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const phiRef = React.useRef(0)
  const widthRef = React.useRef(0)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const pointerInteracting = React.useRef<number | null>(null)
  const pointerInteractionMovement = React.useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  React.useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005
        state.phi = phiRef.current + rs.get()
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
