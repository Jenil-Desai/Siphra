import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Secure Blockchain Key Generation</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Generate cryptographic keys for your blockchain applications with our secure, easy-to-use platform.
                Choose your blockchain and get started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/generate/solana">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
                  >
                    <span>Solana</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/generate/ethereum">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                  >
                    <span>Ethereum</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
