"use client"
import React from "react"
import {
    Link,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Navbar as NextUINavbar,
    Image,
} from "@nextui-org/react"
import { ConnectButton } from "./ConnectButton"
export const Navbar = () => {
    return (
        <NextUINavbar
            classNames={{
                wrapper: "max-w-full",
            }}
            isBordered
        >
            <NavbarBrand>
                <div className="flex items-center gap-2">
                    <Image removeWrapper src="/icons/cifarm.png" className="w-10 h-10" radius="full" />
                    <div className="text-base font-bold">CiFarm Marketplace</div>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center" className="hidden sm:flex">
                <NavbarItem>
                    <Link color="foreground" href="#">
            Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
            Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
            Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ConnectButton/>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )
}
