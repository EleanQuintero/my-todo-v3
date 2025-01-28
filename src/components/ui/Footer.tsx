import GHLogo from "@/app/ui/icons/gh-logo"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background flex-shrink-0">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Visit my GitHub profile"
          >
            <GHLogo className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">© {currentYear} Hecho con Hecho con <span className="text-red-500">❤️</span> por Eleqful  . All rights reserved.</div>
      </div>
    </footer>
  )
}