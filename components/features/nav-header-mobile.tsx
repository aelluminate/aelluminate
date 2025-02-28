"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BadgeInfo, Users, Laptop, Blocks, Menu, Rss } from "lucide-react"

import LOGO from "@/public/img/logo.png"
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Badge,
} from "@/components/shared"

export function NavHeaderMobile() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-tertiary/10 bg-primary">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src={LOGO}
              width={1000}
              height={1000}
              alt="Logo"
              className="h-6 w-6"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button size="md" variant="outline">
            <Link href="/projects">Explore</Link>
          </Button>
          <Button size="md" variant="secondary">
            <Link href={`https://calendar.app.google/rjRxmjGvqNfEqBc99`} target="_blank">
              Talk to us
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="h-full">
              <SheetHeader className="justify-start text-start">
                <SheetTitle>
                  <div className="flex flex-row items-center gap-4 font-lora">
                    <Link href="/">
                      <Image
                        src={LOGO}
                        width={1000}
                        height={1000}
                        alt="Logo"
                        className="h-8 w-8"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-col items-start">
                      <h1 className="text-xl">Aelluminate</h1>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex w-full flex-col items-start gap-4 py-4">
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="">Products</div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-sm border border-tertiary/10 bg-secondary p-2 text-primary">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/img/acadeia-logo.png"
                        width={1000}
                        height={1000}
                        alt="acadeia-logo"
                        className="h-6 w-6 rounded-sm"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-lora text-base font-medium">Acadeia</div>
                        <Badge variant="outline">Building</Badge>
                      </div>
                    </div>
                    <p className="line-clamp-3 text-sm leading-tight">
                      Streamline school tasks, boost communication, and simplify academics—all in
                      one easy platform for institutions.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-sm border border-tertiary/10 bg-tertiary/10 p-2 text-tertiary">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/img/nexae-logo.png"
                        width={1000}
                        height={1000}
                        alt="acadeia-logo"
                        className="h-6 w-6 rounded-sm"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-lora text-base font-medium">Nexae</div>
                        <Badge variant="outline" className="border-tertiary/75">
                          Coming soon
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-sm border border-tertiary/10 bg-tertiary/10 p-2 text-tertiary">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/img/visieo-logo.png"
                        width={1000}
                        height={1000}
                        alt="acadeia-logo"
                        className="h-6 w-6 rounded-sm"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-lora text-base font-medium">Visieo</div>
                        <Badge variant="outline" className="border-tertiary/75">
                          Coming soon
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-sm border border-tertiary/10 bg-tertiary/10 p-2 text-tertiary">
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/img/zabeo-logo.png"
                        width={1000}
                        height={1000}
                        alt="acadeia-logo"
                        className="h-6 w-6 rounded-sm"
                      />
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-lora text-base font-medium">Zabe</div>
                        <Badge variant="outline" className="border-tertiary/75">
                          Coming soon
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                  <div className="">Resources</div>
                  <ul className="grid grid-cols-1 gap-2">
                    <Link
                      href="/about "
                      className="flex flex-col items-start rounded-sm border border-tertiary/10 bg-tertiary/10 p-2"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <BadgeInfo className="h-4 w-4" />
                        <span>About</span>
                      </div>
                      <div className="text-xs">Learn more about the company and its goals.</div>
                    </Link>
                    <Link
                      href="/team"
                      className="flex flex-col items-start rounded-sm border border-tertiary/10 bg-tertiary/10 p-2"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Team</span>
                      </div>
                      <div className="text-xs">Meet the team behind the company.</div>
                    </Link>
                    <Link
                      href="/careers"
                      className="flex flex-col items-start rounded-sm border border-tertiary/10 bg-tertiary/10 p-2"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <Laptop className="h-4 w-4" />
                        <span>Careers</span>
                      </div>
                      <div className="text-xs">Join the team and help us build the future</div>
                    </Link>
                    <Link
                      href="/projects"
                      className="flex flex-col items-start rounded-sm border border-tertiary/10 bg-tertiary/10 p-2"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <Blocks className="h-4 w-4" />
                        <span>Projects</span>
                      </div>
                      <div className="text-xs">Discover the projects we&apos;re working on.</div>
                    </Link>
                    <Link
                      href="/blogs"
                      className="flex flex-col items-start rounded-sm border border-tertiary/10 bg-tertiary/10 p-2"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <Rss className="h-4 w-4" />
                        <span>Blogs</span>
                      </div>
                      <div className="text-xs">
                        Read our latest blogs and stay updated with our latest news.
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
