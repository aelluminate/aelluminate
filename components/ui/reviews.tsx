export const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure className="relative h-full w-fit cursor-pointer overflow-hidden p-4 text-tertiary/50 hover:text-tertiary">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold">{name}</figcaption>
        </div>
      </div>
    </figure>
  )
}
