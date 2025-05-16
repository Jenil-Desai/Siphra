import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function GeneratePage({ params }: { params: { blockchain: string } }) {
  const validBlockchains = ["solana", "ethereum"]
  if (!validBlockchains.includes(params.blockchain)) {
    notFound()
  }
  const blockchain = params.blockchain.charAt(0).toUpperCase() + params.blockchain.slice(1)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{blockchain} Keys</h1>
          <div className="space-x-2">
            <Button variant={"default"} size="lg">Generate</Button>
            <Button variant="destructive" size="lg">Clear All Keys</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
