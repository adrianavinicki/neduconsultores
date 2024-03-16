"use client"

import { string } from "zod";
import "./ui/global.css";
import { montserrat } from "./ui/fonts";
import LayoutNav from "./components/LayoutNav";

//router
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const router = useRouter();
  return ( 
    <html lang="en"> 
       <body className={`${montserrat.className} anitaliased`}>
            <LayoutNav >
            {children}
            </LayoutNav>
       </body>
  </html>
  );
}

