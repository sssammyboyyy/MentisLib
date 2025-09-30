"use client"

import { useEffect, useRef } from "react"

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw abstract geometric pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid of subtle lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)"
      ctx.lineWidth = 1

      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2, size: 80, rotation: 0 },
        { x: canvas.width * 0.85, y: canvas.height * 0.3, size: 60, rotation: 45 },
        { x: canvas.width * 0.75, y: canvas.height * 0.7, size: 100, rotation: 30 },
        { x: canvas.width * 0.25, y: canvas.height * 0.8, size: 70, rotation: 15 },
      ]

      shapes.forEach((shape, index) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate((shape.rotation * Math.PI) / 180)

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 + index * 0.02})`
        ctx.lineWidth = 2

        // Draw hexagon
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i
          const x = shape.size * Math.cos(angle)
          const y = shape.size * Math.sin(angle)
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()

        ctx.restore()
      })
    }

    drawPattern()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
