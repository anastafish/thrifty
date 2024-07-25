import Image from "next/image"
import Link from "next/link"
import {Card, CardFooter, Button} from "@nextui-org/react";


export default function Item({item}) {
    return (
            <Link href={`/item/${item.id}`} id={item.id} className="flex flex-col items-center justify-center p-5">
                            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={item.image_url}
                    width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-base text-center text-black/80">{item.title}</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        {item.price} $
                    </Button>
                </CardFooter>
                </Card>
            </Link>
    )
}