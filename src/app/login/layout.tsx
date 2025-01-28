import type { Metadata } from "next";
import { UserDataProvider } from "@/contexts/userDataContext";
import "@/app/ui/globals.css"
import { Header } from "@/components/Header";
import Footer from "@/components/ui/Footer";

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
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <UserDataProvider>
          <div className="max-w-screen-lg mx-auto p-4 w-full">
            {children}
          </div>
        </UserDataProvider>
      </div>
      <Footer />
    </main>
  );
}
