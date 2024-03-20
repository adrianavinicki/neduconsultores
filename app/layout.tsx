"use client"

import { string } from "zod";
import "./ui/global.css";
import { montserrat } from "./ui/fonts";
import  SideNav from "./components/Nav2";

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
       
            {children}
      
       </body>
  </html>
  );
}

