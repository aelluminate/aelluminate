import { AvatarGroup, Avatar, AvatarImage } from "@/components/shared"

import { cn } from "@/lib/utils"
import team from "@/data/team.json"

export function TeamAvatars({ className }: { className?: string }) {
  return (
    <AvatarGroup className={cn("your-default-class", className)}>
      {team.map((member, index) => (
        <Avatar key={index} className={cn("-ml-2 cursor-pointer", { "first:ml-0": index === 0 })}>
          <AvatarImage src={member.image} alt={member.firstName[0]} />
        </Avatar>
      ))}
    </AvatarGroup>
  )
}
TeamAvatars.displayName = "TeamAvatars"
