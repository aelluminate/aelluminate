import { BentoCard, BentoGrid, Globe, BackgroundInteractiveGridPattern } from "@/components/shared"
import { AnimatedBeamDemo } from "@/components/ui/animated-beam"

const features = [
  {
    name: "Reliable Foundation",
    description:
      "Build with confidence knowing your work is always secure and persistently saved. Focus on building solutions, we ensure your progress is never lost.",
    href: "/",
    cta: "Explore",
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 border-x border-tertiary/10",
    background: (
      <div className="absolute z-0 h-[1000px] w-full overflow-hidden border-none bg-primary transition-all duration-300 ease-out">
        <BackgroundInteractiveGridPattern className="inset-x-0 inset-y-[-30%] h-full skew-y-12 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 bg-gradient-to-t from-primary"></div>
      </div>
    ),
  },
  {
    name: "Unified Workflow",
    description:
      "Connect your essential tools and services for seamless workflows. Stop juggling apps and start building within a cohesive system.",
    href: "/",
    cta: "Explore",
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 border-b border-tertiary/10",
    background: (
      <div className="absolute h-full w-full overflow-hidden border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <AnimatedBeamDemo />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 bg-gradient-to-t from-primary"></div>
      </div>
    ),
  },
  {
    name: "Global Reach",
    description:
      "Expand your horizons with solutions designed for a global audience. Language is no barrier to building impactful, universally accessible applications.",
    href: "/",
    cta: "Explore",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 z-50",
    background: (
      <div className="absolute z-0 h-full w-full overflow-hidden border-none transition-all duration-300 ease-out">
        <Globe />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-96 bg-gradient-to-t from-primary"></div>
      </div>
    ),
  },
  {
    name: "Strategic Timeline",
    description:
      "Visualize your project's journey and manage deadlines effectively with our integrated strategic timeline. Plan, execute, and deliver solutions on schedule.",
    href: "/",
    cta: "Explore",
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 border-b border-tertiary/10",
  },
  {
    name: "Instant Collaboration",
    description:
      "Keep your team synchronized and solutions evolving rapidly with real-time updates and seamless team communication. Build together, faster.",
    href: "/",
    cta: "Explore",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

export function BentoBox() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
