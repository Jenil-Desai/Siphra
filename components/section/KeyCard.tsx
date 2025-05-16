import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeyPair } from "@/types/keypair";
import { Copy, Trash2 } from "lucide-react";

export default function KeyCard({ keyPair }: { keyPair: KeyPair }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Key Pair</CardTitle>
        <CardDescription>
          Generated on {new Date(Number.parseInt(keyPair.id)).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="private">Private Key</TabsTrigger>
            <TabsTrigger value="public">Public Key</TabsTrigger>
            <TabsTrigger value="passphrase">Passphrase</TabsTrigger>
          </TabsList>
          <TabsContent value="private" className="mt-2">
            <div className="relative">
              <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">{keyPair.privateKey}</div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="public" className="mt-2">
            <div className="relative">
              <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">{keyPair.publicKey}</div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="passphrase" className="mt-2">
            <div className="relative">
              <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">{keyPair.passphrase}</div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="ml-auto gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
