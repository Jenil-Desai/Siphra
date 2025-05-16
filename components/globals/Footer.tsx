import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center mt-8 pt-8">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0">
        Made by <Link href="https://github.com/Jenil-Desai" className="text-muted-foreground hover:text-foreground transition-colors underline">Jenil Desai</Link>
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/Jenil-Desai/siphra.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://twitter.com/Jenxl_09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/desaijenil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </footer>
  )
}
