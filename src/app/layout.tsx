import type { Metadata } from "next";
import "@/app/ui/globals.css"


export const metadata: Metadata = {
  title: "My todo v3",
  description: "a new version of my todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
