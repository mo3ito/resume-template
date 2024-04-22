import type { Metadata } from "next";
import {  Exo_2  ,  Jost } from "next/font/google";
import "./globals.css";
import DarkModeProvider from "@/context/DarkMode";
import MailModal from "@/components/mail/MailModal";
import { Suspense } from "react";
import ToastifyContainer from "@/components/providers/ToastifyContainer";
import LoadingPage from "@/components/Loading";

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})
 

export const metadata: Metadata = {
  title: "Mostafa Entezami",
  description: "Html5, css3, JavaScript, TypeScript, React, Next.js, Tailwindcss, Redux, Node.js, MongoDB, Rest Api, Npm, Git, Responsive Design ,Linux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeProvider>
    <html lang="en">
      <body  className={` ${jost.variable} ${exo2.variable} font-jost h-max w-full bg-slate-200 dark:bg-black overflow-y-scroll text-zinc-600 dark:text-zinc-300`}>
        {children}
        <Suspense fallback={<LoadingPage/>}>
        <MailModal/>
        </Suspense>
        <ToastifyContainer/>
        </body>
    </html>
    </DarkModeProvider>
  );
}
