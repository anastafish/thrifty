import { signOut } from 'next-auth/react'
import {Button} from "@nextui-org/react";

export default function SignOut() {

    return (
        <form
        action={async () => {
            await signOut()
        }}
        >
        <Button color="danger" fullWidth type="submit">Sign Out</Button>
        </form>
    )
}