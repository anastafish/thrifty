"use client"

import SignOut from "./signOut";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import Link from "next/link";
import {Button} from "@nextui-org/react";

export default function DropDown({children}) {
    return (
        <Dropdown>
      <DropdownTrigger>
        {children}
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
          <DropdownItem >
            <Link href={'/profile'}>
              <Button color="success" fullWidth>Profile</Button>
            </Link>
          </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
            <SignOut />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    )
}