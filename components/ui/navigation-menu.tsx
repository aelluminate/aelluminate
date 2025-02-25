"use client"

import * as React from "react"
import Image from "next/image"
import { BadgeInfo, Users, Laptop } from "lucide-react"

import { navigationMenuTriggerStyle } from "@/components/utils/styles"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavMenuListItem,
} from "@/components/shared/"

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink href="/">
                  <div className="flex h-full w-full select-none flex-col justify-end gap-2 rounded-sm bg-secondary p-4 outline-none">
                    <Image
                      src="/img/acadeia-logo.png"
                      width={1000}
                      height={1000}
                      alt="acadeia-logo"
                      className="h-8 w-8 rounded-sm"
                    />
                    <div className="font-lora text-lg font-medium">Acadeia</div>
                    <p className="-mt-2 line-clamp-3 text-sm leading-tight text-primary/75">
                      Streamline school tasks, boost communication, and simplify academics—all in
                      one easy platform for institutions.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <NavMenuListItem href="/" title="Nexae" logo="/img/nexae-logo.png">
                Powering sales directly at your counter for fast and effective customer service.
              </NavMenuListItem>
              <NavMenuListItem href="/" title="Visieo" logo="/img/visieo-logo.png">
                Transform raw business data into clear, actionable insights.
              </NavMenuListItem>
              <NavMenuListItem href="/" title="Zabe" logo="/img/zabeo-logo.png">
                Optimize the flow of inventory within boxes and across your entire storage system.
              </NavMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-2 gap-2 p-2">
              <NavMenuListItem href="/about" title="About" icon={BadgeInfo}>
                Learn more about the company and its goals.
              </NavMenuListItem>
              <NavMenuListItem href="/team" title="Team" icon={Users}>
                Meet the team behind the company.
              </NavMenuListItem>
              <NavMenuListItem href="/careers" title="Careers" icon={Laptop}>
                Join the team and help us build the future
              </NavMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild href="/docs">
            <div className={navigationMenuTriggerStyle()}>Blog</div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
