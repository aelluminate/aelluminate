import {
  Marquee,
  BackgroundRipple,
  Button,
  SeparatorSectionBorder,
  SeparatorSectionText,
  Shadow,
} from "@/components/shared"
import { BusinessesMarquee } from "@/components/ui/businessess-marquee"
import { BentoBox } from "@/components/ui/bento-box"
import { TeamAvatars } from "@/components/ui/team-avatars"
import { SectionHero } from "@/components/ui/sections/section-hero"
import { SectionStatistics } from "@/components/ui/sections/section-statistics"

import businesses from "@/data/businesses.json"

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <SeparatorSectionBorder className="flex flex-col items-center p-12 lg:flex-row lg:items-start lg:gap-2">
        <SectionHero />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder>
        <Marquee pauseOnHover className="[--duration:20s]" repeat={5}>
          {businesses.map((business, index) => (
            <BusinessesMarquee key={index} {...business} />
          ))}
        </Marquee>
        <Shadow position="left" className="w-1/4" />
        <Shadow position="right" className="w-1/4" />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder>
        <BentoBox />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder className="p-10">
        <SeparatorSectionText text="statistics" />
        <Shadow className="z-10 h-60" />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder>
        <SectionStatistics />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder className="p-10">
        <SeparatorSectionText text="be part of the team" />
        <Shadow className="z-10 h-60" />
      </SeparatorSectionBorder>
      <SeparatorSectionBorder>
        <div className="relative z-20 mx-auto flex w-full max-w-xl flex-col justify-center gap-2 p-12">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h2 className="font-lora text-4xl">Join us</h2>
            <span className="text-tertiary/75">
              We always wanted you to be part of our team. Let&apos;s build extraordinary solutions,
              together.
            </span>
            <TeamAvatars className="mt-2" />
            <div className="flex flex-row items-center gap-2">
              <Button size="md" variant="outline" className="mt-4 cursor-not-allowed">
                Hiring soon
              </Button>
              <Button size="md" variant="secondary" className="mt-4">
                Meet the team
              </Button>
            </div>
          </div>
        </div>
        <BackgroundRipple />
        <Shadow className="z-10 h-1/2" />
      </SeparatorSectionBorder>
    </main>
  )
}
