import { signOut } from 'next-auth/react'
import {Button} from "@nextui-org/react";
import { redirect } from 'next/navigation';

export default function SignOut() {

    return (
        <form
        action={async () => {
            await signOut()
            redirect('/')
        }}
        >
        <Button color="danger" fullWidth type="submit">Sign Out</Button>
        </form>
    )
}