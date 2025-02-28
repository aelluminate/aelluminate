import Link from "next/link"

export const Footer = () => {
  return (
    <div className="mx-auto mt-auto flex w-full max-w-6xl flex-col">
      <footer>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex w-full flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-tertiary/75 lg:flex-row lg:gap-0 lg:px-0">
            <div className="flex flex-row items-center gap-4">
              <Link href="#" className="hover:underline">
                About
              </Link>
              <Link href="#" className="hover:underline">
                Contacts
              </Link>
            </div>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex translate-y-10 flex-col items-center justify-center font-lora text-9xl font-bold text-tertiary/10">
            Aelluminate.
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-full bg-gradient-to-t from-primary"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
