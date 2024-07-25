import SingleItem from "@/components/singleItem"

export default function Item({params}) {
    return (
        <div>
            <SingleItem id={params.id}/>
        </div>
    )
}