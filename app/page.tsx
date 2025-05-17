import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-muted mb-4 inline-block">
              <span className="relative z-10">Secure Key Generation</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Generate Crypto Keys with Siphra
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Create secure cryptographic keys for your blockchain applications with just a few clicks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate/solana">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Solana</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/generate/ethereum">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Ethereum</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
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
