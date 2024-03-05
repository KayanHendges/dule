import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ContainerApp from "@/components/containers/App";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" suppressHydrationWarning>
      <body
        className={cn(
          "w-screen h-screen flex flex-col overflow-hidden font-sans antialiased bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50",
          fontSans.variable
        )}
      >
        <ContainerApp>{children}</ContainerApp>
      </body>
    </html>
  );
}
