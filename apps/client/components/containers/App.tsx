"use client";
import { SignInDialogProvider } from "@/components/dialogs/signInDialog";
import Header from "@/components/Header";
import NavSideBar from "@/components/NavSidebar";
import Navigation from "@/components/Navigation";
import AppProvider from "@/contexts/App/AppContext";
import AuthContextProvider from "@/contexts/Auth/AuthContext";
import UserProvider from "@/contexts/User/UserContext";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

const publicRoutes = ["/login"];

export default function ContainerApp({ children }: Props) {
  const isPublicRoute = publicRoutes.some((route) =>
    usePathname().startsWith(route)
  );

  return (
    <ThemeProvider attribute="class">
      <AppProvider>
        <AuthContextProvider>
          <UserProvider>
            <SignInDialogProvider>
              <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG}`}
                strategy="afterInteractive"
                onError={(e) =>
                  console.error("Failed to load google script", e)
                }
                crossOrigin="anonymous"
              />
              <main className="w-full flex flex-1 mobile:flex-col overflow-x-hidden overflow-y-auto mobile:pb-16">
                {!isPublicRoute && <NavSideBar className="mobile:hidden" />}
                <div className="mobile:w-full flex-1 flex flex-col">
                  {!isPublicRoute && <Header />}
                  <div className="w-full flex-1 flex flex-col p-3 gap-4">
                    {children}
                  </div>
                </div>
                {!isPublicRoute && (
                  <Navigation className="hidden mobile:flex" />
                )}
              </main>
            </SignInDialogProvider>
          </UserProvider>
        </AuthContextProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
