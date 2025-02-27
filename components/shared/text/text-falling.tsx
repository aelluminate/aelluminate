"use client"

import * as React from "react"
import Matter from "matter-js"
import { cn } from "@/lib/utils" // Import the cn function

interface TextFallingProps {
  text?: string
  highlightWords?: string[]
  trigger?: "auto" | "scroll" | "click" | "hover"
  backgroundColor?: string
  wireframes?: boolean
  gravity?: number
  mouseConstraintStiffness?: number
  fontSize?: string
  className?: string; // Add className to props interface
}

export const TextFalling: React.FC<TextFallingProps> = ({
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  className, // Destructure className from props
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const textRef = React.useRef<HTMLDivElement | null>(null)
  const canvasContainerRef = React.useRef<HTMLDivElement | null>(null)

  const [effectStarted, setEffectStarted] = React.useState(false)

  React.useEffect(() => {
    if (!textRef.current) return
    const words = text.split(" ")

    const newHTML = words
      .map((word) => {
        const isHighlighted = highlightWords.some((hw) => word.startsWith(hw))
        return `<span
          class="${cn(
            "inline-block",
            "mx-[2px]",
            "select-none",
            isHighlighted ? "text-secondary" : ""
          )}"
        >
          ${word}
        </span>`
      })
      .join(" ")

    textRef.current.innerHTML = newHTML
  }, [text, highlightWords])

  React.useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true)
      return
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [trigger])

  React.useEffect(() => {
    if (!effectStarted) return

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter

    if (!containerRef.current || !canvasContainerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const width = containerRect.width
    const height = containerRect.height

    if (width <= 0 || height <= 0) return

    const engine = Engine.create()
    engine.world.gravity.y = gravity

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    })

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    }
    const boundaryMargin = 50
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width - boundaryMargin * 2,
      50,
      boundaryOptions,
    )
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height - boundaryMargin * 2,
      boundaryOptions,
    )
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height - boundaryMargin * 2,
      boundaryOptions,
    )
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width - boundaryMargin * 2,
      50,
      boundaryOptions,
    )

    if (!textRef.current) return
    const wordSpans = textRef.current.querySelectorAll("span")
    const wordBodies = [...wordSpans].map((elem) => {
      const rect = elem.getBoundingClientRect()

      const x = rect.left - containerRect.left + rect.width / 2
      const y = rect.top - containerRect.top + rect.height / 2

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      })
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0,
      })
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05)

      return { elem, body }
    })

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute"
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`
      elem.style.transform = "none"
    })

    const mouse = Mouse.create(containerRef.current)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    })
    render.mouse = mouse

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ])

    const runner = Runner.create()
    Runner.run(runner, engine)
    Render.run(render)

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position
        const w = body.bounds.max.x - body.bounds.min.x
        const h = body.bounds.max.y - body.bounds.min.y
        elem.style.left = `${x - w / 2}px`
        elem.style.top = `${y - h / 2}px`
        elem.style.transform = `rotate(${body.angle}rad)`
      })
      Matter.Engine.update(engine)
      requestAnimationFrame(updateLoop)
    }
    updateLoop()

    // Fix: Capture the current value of canvasContainerRef.current
    const currentCanvasContainer = canvasContainerRef.current

    return () => {
      Render.stop(render)
      Runner.stop(runner)
      // Fix: Use the captured value in the cleanup function
      if (render.canvas && currentCanvasContainer) {
        currentCanvasContainer.removeChild(render.canvas)
      }
      World.clear(engine.world, false)
      Engine.clear(engine)
    }
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness])

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 h-full w-full overflow-hidden ",
        className
      )}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseOver={trigger === "hover" ? handleTrigger : undefined}
    >
      <div ref={textRef} />

      <div className="absolute left-0 top-0 z-0" ref={canvasContainerRef} />
    </div>
  )
}

TextFalling.displayName = "TextFalling"