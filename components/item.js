import Image from "next/image"
import Link from "next/link"
import {Card, CardFooter, Button, CardBody} from "@nextui-org/react";


export default function Item({item}) {
    return (
            <Link href={`/item/${item.id}`} id={item.id} className="flex flex-col items-center justify-center p-5">
                            <Card shadow="sm" key={item.id} isPressable>
                            <CardBody className="overflow-visible p-0">
                <Image
                    alt="item_image"
                    className="object-cover"
                    height={200}
                    width={200}
                    src={`https://kujxhgudslinapnnligd.supabase.co/storage/v1/object/public/items/images/${item.id}.jpg`}
                />
                </CardBody>
                <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        {item.price} $
                    </Button>
                </CardFooter>
                </Card>
            </Link>
    )
}