import Providers from "@/lib/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";


export const metadata: Metadata = {
  title: "FlatFlock",
  description: "Welcome to FlatFolk, your ultimate solution for seamless community living! Our app is designed to revolutionize the way you manage and engage with your neighborhood. Whether you’re coordinating events, resolving issues, or just staying informed, FlatFolk provides an intuitive platform that fosters a stronger, more connected community. Experience the convenience and harmony of modern living with FlatFolk – where neighbors become friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <>
            <AppRouterCacheProvider>
              <Toaster position="top-center" />
              {children}
            </AppRouterCacheProvider>
          </>
        </body>
      </html>
    </Providers>
  );
}
