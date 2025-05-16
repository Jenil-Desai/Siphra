"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/ui/mode-toggler"
import { Trash2, RefreshCw, Key } from "lucide-react"
import KeyCard from "@/components/section/KeyCard"
import { KeyPair } from "@/types/keypair"

export default function KeyGenerator() {
  const [keys, setKeys] = useState<KeyPair[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Key className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Siphra</h1>
          </div>
          <ModeToggle />
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Generate Cryptographic Keys</CardTitle>
            <CardDescription>
              Create secure private and public keys with a passphrase for your cryptographic needs
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button disabled={isGenerating} className="gap-2">
              {isGenerating ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Key className="h-4 w-4" />}
              Generate New Keys
            </Button>
            <Button variant="destructive" disabled={keys.length === 0} className="gap-2">
              <Trash2 className="h-4 w-4" />
              Delete All Keys
            </Button>
          </CardFooter>
        </Card>

        {keys.length > 0 ? (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Your Keys ({keys.length})</h2>
            {keys.map((keyPair) => (
              <KeyCard keyPair={keyPair} key={keyPair.id} />
            ))}
          </div>
        ) : (
          <Card className="bg-muted/50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Key className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-center text-muted-foreground">
                No keys generated yet. Click the "Generate New Keys" button to create your first key pair.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
