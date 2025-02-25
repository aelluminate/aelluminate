import { BackgroundFlickeringGrid, Marquee } from "@/components/shared"
import { ListNotifications } from "@/components/ui/list-notifications"
import { ReviewCard } from "@/components/ui/reviews"
import { BentoBox } from "@/components/ui/bento-box"

const reviews = [
  {
    name: "Holy Angel University",
  },
  {
    name: "KITTO",
  },
  {
    name: "Encephalon TBI",
  },
]

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <div className="flex flex-row items-start gap-2 border-x border-b border-tertiary/10 p-12">
        <div className="mx-auto flex w-full flex-col items-start justify-center">
          <h1 className="mt-2 max-w-3xl font-lora text-6xl">
            Stop <span className="text-secondary">patching</span> problem, start{" "}
            <span className="text-secondary">building</span> solutions.
          </h1>
          <span className="mt-4 max-w-lg text-tertiary/75">
            We&apos;re a small but mighty team building awesome stuff with tech and turn &quot;what
            ifs&quot; into &quot;here it is!&quot;
          </span>
        </div>
        <ListNotifications />
      </div>
      <div className="relative h-fit w-full overflow-hidden border border-x border-b border-tertiary/10">
        <Marquee pauseOnHover className="[--duration:20s]" repeat={5}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary"></div>
      </div>
      <div className="relative h-fit w-full overflow-hidden border border-x border-b border-tertiary/10">
        <BentoBox />
      </div>
      <div className="relative h-fit w-full overflow-hidden border border-x border-b border-tertiary/10">
        <div className="grid grid-cols-3">
          <div className="border-r border-tertiary/10 p-12">Hello</div>
          <div className="border-r border-tertiary/10 p-12">Hello</div>
          <div className="border-tertiary/10 p-12">Hello</div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden border border-x border-b border-tertiary/10 p-10">
        <div className="relative z-50 flex w-full flex-col items-center justify-center font-bold uppercase text-tertiary">
          Use cases
        </div>
        <BackgroundFlickeringGrid
          className="absolute inset-0 z-10 size-full"
          squareSize={4}
          gridGap={6}
          color="#fff2af"
          maxOpacity={0.4}
          flickerChance={0.2}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 bg-gradient-to-t from-primary"></div>
      </div>
    </main>
  )
}
