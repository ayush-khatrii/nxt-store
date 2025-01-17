import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider, } from '@clerk/nextjs';

const firaSans = Fira_Sans({
  // add all  weights here
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider signUpFallbackRedirectUrl={process.env.NEXT_PUBLIC_AUTH_URL} signInFallbackRedirectUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
        <html lang="en">
          <body
            className={`${firaSans.className}  ${firaSans.className} antialiased`}
          >
            <main className="">
              {children}
            </main>
          </body>
        </html>
      </ClerkProvider >
    </>
  );
}
