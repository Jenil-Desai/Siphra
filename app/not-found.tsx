import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto text-center">
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[150px] font-bold opacity-10 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none opacity-70">
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
          ))}
        </div>
      </div>
    </div>
  )
}
