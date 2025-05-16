import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggler"
import { Key } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              <span className="font-bold text-lg">Siphra</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
