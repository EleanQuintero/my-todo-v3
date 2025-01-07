import type { Metadata } from "next";
import GHLogo from "../ui/icons/gh-logo";
import { UserDataProvider } from "@/contexts/userDataContext";
import "@/app/ui/globals.css"


const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "Login Page",
  description: "Sign in in to my todo",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
 
  return (
      <body>
        <main className="grid grid-rows-custom-layout m-auto p-0 h-screen">
        <h1 className=" bg-slate-700 grid font-extrabold text-4xl justify-items-center">My to-Do-App</h1>
        <UserDataProvider>
        {children}
        </UserDataProvider>
        <footer className="bg-slate-700 pt-8 pb-6 f6 color-fg-muted p-responsive-gray-900 text-white w-full flex p-4">
            <p className="flex-grow text-center">
                hecho con amor por eleqful © {currentYear} 
            </p>
            <div className="flex space-x-2">
                <a target="_blank" href="https://github.com/EleanQuintero" aria-label="GitHub">
                    <GHLogo className="w-4 h-4"/>
                </a>
            </div>
        </footer>
        </main>
      </body>
  );
}
