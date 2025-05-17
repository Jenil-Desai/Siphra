"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeyPair } from "@/types/keypair";
import clearFromLocalStorage from "@/utils/clearFromLocalStorage";
import { Copy, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function KeyCard({ keyPair, getKeyPair }: { keyPair: KeyPair, getKeyPair: () => void }) {
  const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);

  function handleDelete() {
    console.log("Inside Function")
    try {
      clearFromLocalStorage(keyPair.id);
      toast.success("Keypair deleted successfully");
      getKeyPair();
    } catch (error) {
      console.error("Failed to delete keypair:", error);
      toast.error("Failed to delete keypair");
    }
  }

  function handleCopy(type: "private" | "public") {
    navigator.clipboard.writeText(type === "private" ? keyPair.privateKey : keyPair.publicKey);
  }

  const togglePrivateKeyVisibility = () => setIsPrivateKeyVisible(prev => !prev);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{keyPair.name}</CardTitle>
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
              <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">
                {isPrivateKeyVisible ? keyPair.privateKey : "*".repeat(keyPair.privateKey.length / 2)}
              </div>
              <div className="absolute top-1 right-1 flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={togglePrivateKeyVisibility}
                  title={isPrivateKeyVisible ? "Hide private key" : "Show private key"}
                >
                  {isPrivateKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy("private")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
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
        <Button variant="destructive" size="sm" className="ml-auto gap-2" onClick={handleDelete}>
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
