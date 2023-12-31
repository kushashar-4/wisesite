import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { GlobalContextProvider } from "./context/ProgramsContext";

export const metadata: Metadata = {
  title: "WISE - Welcoming Initiatives for Senior Empowerment",
  description: "Pushing initiatives for senior empowerment.",
};

const Uber = localFont({
  src: [
    {
      path: "../public/fonts/UberMoveMedium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/UberMoveBold.otf",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Uber.className} min-h-screen font-[500]`}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
