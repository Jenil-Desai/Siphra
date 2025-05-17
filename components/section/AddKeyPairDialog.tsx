import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AddKeyPairSchema, addKeyPairSchema } from "@/schema/addKeyPair";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Blockchain } from "@/types/blockchain";
import { toast } from "sonner";
import { generateSolanaKeyPair } from "@/functions/solana";
import { KeyPair } from "@/types/keypair";
import saveToLocalStorage from "@/utils/saveToLocalStorage";
import { useAtomValue } from "jotai";
import { currentBlockchain } from "@/store/store";

interface AddKeyPairDialogProps {
  setIsOpen: (open: boolean) => void;
}

export default function AddKeyPairDialog({ setIsOpen }: AddKeyPairDialogProps) {
  const blockchain = useAtomValue(currentBlockchain);
  const form = useForm({
    resolver: zodResolver(addKeyPairSchema),
    defaultValues: {
      name: ""
    }
  })

  async function onSubmit(data: AddKeyPairSchema) {
    let keypairData: KeyPair | undefined;

    switch (blockchain) {
      case Blockchain.Solana: {
        const keypair = generateSolanaKeyPair();
        keypairData = {
          id: keypair.uuid,
          name: data.name,
          publicKey: keypair.publicKey,
          privateKey: keypair.privateKey,
        };
        break;
      }
      case Blockchain.Ethereum: {
        break;
      }
    }

    if (!keypairData) {
      toast.error("Unsupported blockchain");
      return;
    }

    try {
      saveToLocalStorage(keypairData);
      toast.success("Keypair added successfully");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add keypair");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <DialogHeader>
            <DialogTitle>Add New Keypair</DialogTitle>
            <DialogDescription>Give your keypair a name.</DialogDescription>
          </DialogHeader>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Keypair Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
            >
              Add Website
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  )
}
