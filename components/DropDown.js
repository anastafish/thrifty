"use client"

import SignOut from "./signOut";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";

export default function DropDown({children}) {
    return (
        <Dropdown>
      <DropdownTrigger>
        {children}
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="delete" className="text-danger" color="danger">
            <SignOut />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    )
}