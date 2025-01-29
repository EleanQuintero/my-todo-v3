
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeSwitch  from "@/components/ThemeSwitch"

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 w-full">
      <div className="container flex h-11 items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-3xl font-bold">
           My toDo App
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/caracteristicas" className="text-lg font-medium transition-colors hover:text-primary">
              Características
            </Link>
            <Link href="/precios" className="text-lg font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="/contacto" className="text-lg font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex gap-2 ml-auto">
          <Button variant="ghost" asChild>
            <Link className="text-lg" href="/Login">Iniciar Sesión</Link>
          </Button>
          <Button size={"lg"} asChild>
            <Link className="text-lg font-medium transition-colors hover:text-primary" href="/Login">Registrarse</Link>
          </Button>
          <ThemeSwitch />
        </div>
        
      </div>
    </header>
  )
}

