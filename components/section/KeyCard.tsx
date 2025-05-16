import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Blockchain } from "@/types/blockchain";
import { KeyPair } from "@/types/keypair";
import clearFromLocalStorage from "@/utils/clearFromLocalStorage";
import { Copy, Trash2 } from "lucide-react";

export default function KeyCard({ keyPair, blockchain }: { keyPair: KeyPair, blockchain: Blockchain }) {

  function handleDelete() {
    clearFromLocalStorage(keyPair.id, blockchain);
  }

  function handleCopy(type: "private" | "public") {
    navigator.clipboard.writeText(type === "private" ? keyPair.privateKey : keyPair.publicKey);
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Key Pair</CardTitle>
        <CardDescription>
          Generated on {new Date(Number.parseInt(keyPair.id)).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <Tabs defaultValue="private" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="private">Private Key</TabsTrigger>
            <TabsTrigger value="public">Public Key</TabsTrigger>
          </TabsList>
          <TabsContent value="private" className="mt-2">
            <div className="relative">
              <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">{keyPair.privateKey}</div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1"
                onClick={() => handleCopy("private")}
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
                onClick={() => handleCopy("public")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="ml-auto gap-2" onClick={handleDelete}>
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
