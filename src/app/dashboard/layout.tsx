import type { Metadata } from "next";
import { UserDataProvider } from "@/contexts/userDataContext";
import { TodoProvider } from "@/contexts/todoContext";
import "@/app/ui/globals.css"
import { LogedSection } from "@/components/LogedSection";


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
      <main className=" grid grid-rows-display lg:text-UI-bg-main-text lg:bg-UI-bg-main lg:m-auto lg:p-0 lg:h-screen lg:grid lg:grid-cols-display">
       <UserDataProvider>
        <TodoProvider>
        <LogedSection />
        {children}
       </TodoProvider>
       </UserDataProvider>
      </main>


  
  );
}
