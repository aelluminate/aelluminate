import {
  BackgroundFlickeringGrid,
  Marquee,
  TextNumberTicker,
  BackgroundRipple,
  Button,
  TextFalling,
} from "@/components/shared"
import { NotificationList } from "@/components/ui/notification-list"
import { ReviewCard } from "@/components/ui/reviews"
import { BentoBox } from "@/components/ui/bento-box"
import { TeamAvatars } from "@/components/ui/team-avatars"

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
    <main className="flex h-full w-full flex-col">
      <div className="flex flex-row items-start gap-2 border-x border-b border-tertiary/10 p-12">
        <div className="flex h-full w-full flex-col items-start justify-center">
          <TextFalling
            text={`Stop patching problem, start building solutions.`}
            highlightWords={["problem"]}
            trigger="auto"
            gravity={2}
            mouseConstraintStiffness={0.1}
            wireframes={false}
          />
          <span className="max-w-lg text-tertiary/75">
            We&apos;re a small but mighty team building awesome stuff with tech and turn &quot;what
            ifs&quot; into &quot;here it is!&quot;
          </span>
        </div>
        <NotificationList />
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
      <div className="relative w-full overflow-hidden border border-x border-b border-tertiary/10 p-10">
        <div className="relative z-20 flex w-full flex-col items-center justify-center font-bold uppercase text-tertiary">
          Statistics
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
      <div className="relative h-fit w-full overflow-hidden border border-x border-b border-tertiary/10">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center justify-center border-r border-tertiary/10 p-12">
            <TextNumberTicker
              value={3}
              className="whitespace-pre-wrap font-lora text-8xl font-medium tracking-tighter text-tertiary"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="text-tertiary/75">Businesses</div>
              <span className="text-sm text-secondary/50">Assisted and empowered</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-tertiary/10 p-12">
            <TextNumberTicker
              value={10}
              className="whitespace-pre-wrap font-lora text-8xl font-medium tracking-tighter text-tertiary"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="text-tertiary/75">Projects</div>
              <span className="text-sm text-secondary/50">Successfully implemented</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-12">
            <TextNumberTicker
              value={2}
              className="whitespace-pre-wrap font-lora text-8xl font-medium tracking-tighter text-tertiary"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="text-tertiary/75">Years and counting</div>
              <span className="text-sm text-secondary/50">Combined industry expertise</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden border border-x border-b border-tertiary/10 p-10">
        <div className="relative z-20 flex w-full flex-col items-center justify-center font-bold uppercase text-tertiary">
          Be part of the team
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
      <div className="relative h-fit w-full overflow-hidden border border-x border-b border-tertiary/10">
        <div className="relative z-20 mx-auto flex w-full max-w-xl flex-col justify-center gap-2 p-12">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="font-lora text-4xl">Join us</h2>
            <span className="text-tertiary/75">
              We always wanted you to be part of our team. Let&apos;s build extraordinary solutions,
              together.
            </span>
            <TeamAvatars className="mt-2" />
            <Button size="lg" variant="outline" className="mt-4 cursor-not-allowed">
              Hiring soon
            </Button>
          </div>
        </div>
        <BackgroundRipple />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-primary"></div>
      </div>
    </main>
  )
}
