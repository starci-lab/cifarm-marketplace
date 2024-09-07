import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import React, { PropsWithChildren } from "react"
import { WrappedLayout } from "./_layout"
import { Navbar, UnderNavbar } from "@/components"
import { Spacer } from "@nextui-org/react"

const font = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <body className={`${font.className} min-h-screen`}>
                <WrappedLayout>
                    <Navbar />
                    <Spacer y={4}/>
                    <UnderNavbar />
                    {children}
                </WrappedLayout>
            </body>
        </html>
    )
}
export default Layout
