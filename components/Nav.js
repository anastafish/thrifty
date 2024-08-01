import {auth} from "@/auth"
import SignIn from "./signIn";
import Link from "next/link";
import {Button, User} from "@nextui-org/react";
import {Navbar,   NavbarBrand,   NavbarContent,   NavbarItem} from "@nextui-org/navbar";
import DropDown from "@/components/DropDown"

export default async function Nav() {
    const session = await auth()

    return (        
      <Navbar className="">
      <NavbarBrand>
        <Link href={'/'}>
          <p className="font-bold text-[1.5rem] text-inherit">Thrifty</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">        
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <Link href={'/shop'}>Shop</Link>
        </NavbarItem>
        {session && <NavbarItem>
          <Link href={'/sell'}>Sell</Link>
        </NavbarItem>}
          {session ? 
        <NavbarItem className="flex gap-3">
      <DropDown>
          <User   
        name={session.user.name}
        avatarProps={{
          src: session.user.image,
        }}
        />      
      </DropDown>      
          </NavbarItem>
          :
          <NavbarItem>
            <SignIn />
          </NavbarItem>
        }        
        </NavbarContent>
    </Navbar>
    )
}