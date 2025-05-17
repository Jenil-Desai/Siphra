"use client"
import AddKeyPairDialog from "@/components/section/AddKeyPairDialog";
import KeyCard from "@/components/section/KeyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { currentBlockchain } from "@/store/store";
import { Blockchain } from "@/types/blockchain";
import { KeyPair } from "@/types/keypair";
import clearAllFromLocalStorage from "@/utils/clearAllFromLocalStorage";
import getFromLocalStorage from "@/utils/getFromLocalStorage";
import { useSetAtom } from "jotai";
import { Key } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [keypairs, setKeyPairs] = useState<KeyPair[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setCurrentblockchain = useSetAtom(currentBlockchain);
  const params = useParams<{ blockchain: Blockchain }>();

  const blockchain = params.blockchain;
  if (!Object.values(Blockchain).includes(blockchain)) {
    notFound()
  }

  function getKeyPairs() {
    try {
      const existingKeyPairs = getFromLocalStorage();
      setKeyPairs(existingKeyPairs);
    } catch (error) {
      console.error('Failed to fetch keypairs:', error);
      toast.error('Failed to fetch keypairs');
    }
  }

  useEffect(() => {
    setCurrentblockchain(blockchain);
    getKeyPairs();

    const interval = setInterval(() => {
      getKeyPairs();
    }, 10000 * 60 * 1);

    return () => clearInterval(interval);
  }, [blockchain]);

  const handleClearAll = () => {
    clearAllFromLocalStorage();
    setKeyPairs([]);
    toast.success('All keys cleared successfully');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{blockchain} Keys</h1>
          <div className="space-x-2">
            <Button variant={"default"} size="lg" onClick={() => setIsMenuOpen(true)}>Generate</Button>
            <Button variant="destructive" size="lg" onClick={() => handleClearAll()}>Clear All Keys</Button>
          </div>
        </div>
        {keypairs.length > 0 ? (
          <div className="space-y-5">
            {keypairs.map((keypair, index) => <KeyCard key={index} keyPair={keypair} />)}
          </div>
        ) : (
          <Card className="bg-muted/50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Key className="h-12 w-12 mb-4 opacity-50" />
              <p className="text-center text-muted-foreground">
                No keys generated yet. Click the &quot;Generate&quot; button to create your first key pair.
              </p>
            </CardContent>
          </Card>
        )
        }
      </main >
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent>
          <AddKeyPairDialog setIsOpen={setIsMenuOpen} />
        </DialogContent>
      </Dialog>
    </div >
  )
}
