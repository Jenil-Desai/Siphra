"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { currentBlockchain } from "@/store/store";
import { getMnemonic } from "@/functions/seed";

export default function Mnemonic() {
  const blockchain = useAtomValue(currentBlockchain);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mnemonic = getMnemonic();
    if (mnemonic) {
      setMnemonic(mnemonic.split(" "))
    }
  }, [blockchain]);

  const copyToClipboard = () => {
    if (mnemonic.length > 0) {
      navigator.clipboard.writeText(mnemonic.join(" "))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const toggleMnemonicVisibility = () => {
    setShowMnemonic(!showMnemonic)
  }

  return (
    <div className="border rounded-lg p-4 space-x-2">
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg font-bold mb-6">Mnemonic Phrase</p>
        <div className="space-x-2">
          <Button size="sm" className="gap-2" onClick={toggleMnemonicVisibility}>
            {showMnemonic ? (
              <>
                <EyeOff className="h-4 w-4" />
                <span>Hide Phrase</span>
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                <span>Show Phrase</span>
              </>
            )}
          </Button>

          <Button size="sm" className="gap-2" onClick={copyToClipboard} disabled={!showMnemonic}>
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Phrase</span>
              </>
            )}
          </Button>
        </div>
      </div>
      {mnemonic.length > 0 ? (
        <div className="space-y-4">
          <div
            className={cn(
              "relative p-6 border rounded-lg bg-muted/50 transition-all duration-200",
              !showMnemonic && "blur-sm hover:blur-[6px] select-none",
            )}
            onClick={toggleMnemonicVisibility}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {mnemonic.map((word, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="absolute -top-3 -left-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="w-full p-3 bg-background border rounded-md text-center shadow-sm">{word}</div>
                </div>
              ))}
            </div>

            {!showMnemonic && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-sm flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Click to reveal</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-12 border rounded-lg bg-muted/20 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-muted-foreground">Click the button below to generate your mnemonic phrase.</p>
        </div>
      )}
    </div>
  )
}
