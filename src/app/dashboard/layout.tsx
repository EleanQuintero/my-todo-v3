import type { Metadata } from "next";
import { UserDataProvider } from "@/contexts/userDataContext";
import { TodoProvider } from "@/contexts/todoContext";
import { UserSection } from "@/components/UserSection";
import "@/app/ui/globals.css"


// const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "Dashboard page",
  description: "todoApp",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
 
  return (
    <body>
      <main className="text-UI-bg-main-text bg-UI-bg-main m-auto p-0 h-screen grid grid-cols-display">
       <UserDataProvider>
        <TodoProvider>
        <UserSection />
        {children}
       </TodoProvider>
       </UserDataProvider>
      </main>
    </body>


  
  );
}
